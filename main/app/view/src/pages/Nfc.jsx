import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function NFCReader() {
  const [reading, setReading] = useState(false)
  const [tagData, setTagData] = useState(null)
  const [scanFeedback, setScanFeedback] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    // Check if the device is a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile && "NDEFReader" in window) {
      const ndef = new NDEFReader()

      ndef.onreading = (event) => {
        setTagData(event.message)
        setScanFeedback("Scan complete: Tag read successfully!")
        setReading(false) // Stop reading after successful read
      }

      ndef.onerror = (error) => {
        setScanFeedback(`Error reading NFC tag: ${error}`)
        setReading(false)
      }

      return () => {
        // Cleanup code when component is unmounted
        ndef.stop()
      }
    } else {
      console.log("NFCReader is not supported on this device.")
      // navigate("/payment")
    }
  }, [])

  const handleScan = () => {
    if (!reading) {
      // eslint-disable-next-line no-undef
      ndef
        .scan()
        .then(() => {
          setReading(true)
          setScanFeedback(
            "Scanning started... Please bring your NFC tag close.",
          )
        })
        .catch((error) => {
          setScanFeedback(`Scan failed to start: ${error}`)
        })
    } else {
      // Stop scanning
      // eslint-disable-next-line no-undef
      ndef.stop()
      setReading(false)
      setTagData(null)
      setScanFeedback("Scan stopped.")
    }
  }

  return (
    <>
      <NavBar />
      <h1>NFC Reader</h1>
      <button
        onClick={handleScan}
        className="rounded-lg bg-green-300 px-4 py-2 font-semibold tracking-wide"
      >
        {reading ? "Stop Scan" : "Start Scan"}
      </button>
      <p>{scanFeedback}</p>
      {tagData && (
        <div>
          <h2>Tag Data:</h2>
          <p>{JSON.stringify(tagData)}</p>
          <a
            href={tagData?.text?.[0].data}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Tag Link
          </a>
        </div>
      )}
    </>
  )
}