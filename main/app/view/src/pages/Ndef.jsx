import { useEffect, useState } from "react"
import NfcConsole from "../components/NfcConsole"

export default function Ndef() {
  const [feed, setFeed] = useState([])
  const [buttonText, setButtonText] = useState("شروع اسکن")
  const [attemptCount, setAttemptCount] = useState(0)

  useEffect(() => {
    if (!("NDEFReader" in window)) {
      alert("NFC is not supported on your device")
    }
  }, [])

  const nfcScan = async () => {
    try {
      const reader = new NDEFReader()
      await reader.scan()
      setButtonText("در حال اسکن")
      setAttemptCount((prev) => prev + 1) // Increment the attempt counter

      reader.addEventListener("error", () => {
        setFeed((prevFeed) => [
          ...prevFeed,
          `Argh! Cannot read data from the NFC tag. Try a different one? Attempt: ${attemptCount + 1}`,
        ])
      })

      reader.addEventListener("reading", async ({ message, serialNumber }) => {
        setFeed((prevFeed) => [`Serial Number: ${serialNumber}`, ...prevFeed])

        if (attemptCount >= 1) {
          // Only write data after the first attempt
          const record = message.records[0]
          const textDecoder = new TextDecoder(record.encoding)
          const dynamicData = textDecoder.decode(record.data) // Read dynamic NFC data

          // Writing the dynamic data back to NFC
          console.log("User clicked write button")
          try {
            const ndef = new NDEFReader()
            await ndef.write({
              records: [
                {
                  recordType: "text",
                  data: dynamicData, // Use dynamic data read from NFC
                  language: "en", // Specify the language code
                },
              ],
            })
            setFeed((prevFeed) => [
              `Successfully wrote '${dynamicData}' to the NFC tag!`,
              ...prevFeed,
            ])
          } catch (error) {
            console.error("Write Error: ", error)
            setFeed((prevFeed) => [
              "Argh! Failed to write to the NFC tag: " + error.message,
              ...prevFeed,
            ])
          }
        }
      })
    } catch (error) {
      setFeed((prevFeed) => [
        ...prevFeed,
        `Argh! ${error.message || error}. Attempt: ${attemptCount + 1}`,
      ])
    } finally {
      setButtonText("گوتولده")
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
