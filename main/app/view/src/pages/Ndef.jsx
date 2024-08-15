import { useEffect, useState } from "react"
import NfcConsole from "../components/NfcConsole"

export default function Ndef() {
  const [feed, setFeed] = useState([])
  const [buttonText, setButtonText] = useState("Start Scan")

  useEffect(() => {
    if (!("NDEFReader" in window)) {
      // alert("NFC is not supported on your device")
    }
  }, [])

  const nfcScan = async () => {
    try {
      const reader = new NDEFReader()
      await reader.scan()
      setButtonText("Scanning...")

      reader.addEventListener("error", () => {
        setFeed((prevFeed) => [
          ...prevFeed,
          "Argh! Cannot read data from the NFC tag. Try a different one?",
        ])
      })

      reader.addEventListener("reading", async ({ message, serialNumber }) => {
          setFeed((prevFeed) => [`Serial Number: ${serialNumber}`, ...prevFeed])
          // write the number to device
          console.log("User clicked write button")
          try {
            const ndef = new NDEFReader()
            await ndef.write(feed)
            console.log()
          } catch (error) {
            console.log("Argh! " + error)
          }
          try {
            // post the number to backend
            const response = await fetch("somekinda url", {
              method: "POST", // Set the request method to POST
              headers: {
                "Content-Type": "application/json", // Specify the content type
              },
              body: JSON.stringify(feed), // Convert the data object to a JSON string
            })

            // Check if the response is okay (status in the range 200-299)
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const responseData = await response.json() // Parse the JSON response
            return responseData // Return the parsed response
          } catch (error) {
            console.error("Error:", error) // Handle any errors
            throw error // Re-throw the error if needed
          }
      })
    } catch (error) {
      setFeed((prevFeed) => [...prevFeed, `Argh! ${error.message || error}`])
    }
  }

  return (
    <>
        <NfcConsole feed={feed} />
      <button
        onClick={nfcScan}
        className="mb-5 mt-5 rounded-lg border-none bg-[#ffc86b] px-10 py-3 text-base font-semibold text-black"
      >
        {buttonText}
      </button>
    </>
  )
}
