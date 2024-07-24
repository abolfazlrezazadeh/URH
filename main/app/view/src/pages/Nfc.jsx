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
        setScanFeedback("Scan complete")
      }

      ndef.onerror = (error) => {
        document.write("Error reading NFC tag:", error)
        setScanFeedback("Error reading NFC tag")
      }

      return () => {
        // Cleanup code when component is unmounted
        ndef.stop()
      }
    } else {
      alert("NFCReader is not supported on this device.")
      navigate("/payment")
    }
  }, [])

  const handleScan = () => {
    if (!reading) {
      ndef.scan()
      setReading(true)
      setScanFeedback("Scanning...")
    } else {
      // Stop scanning
      ndef.stop()
      setReading(false)
      setTagData(null)
      setScanFeedback("Scan stopped")
    }
  }

  return (
    <>
      <NavBar />
      <h1>NFC Reader</h1>
      <button onClick={handleScan}>
        {reading ? "Stop Scan" : "Start Scan"}
      </button>
      <p>{scanFeedback}</p>
      {tagData && (
        <div>
          <h2>Tag Data:</h2>
          <p>{JSON.stringify(tagData)}</p>
        </div>
      )}
    </>
  )
}
