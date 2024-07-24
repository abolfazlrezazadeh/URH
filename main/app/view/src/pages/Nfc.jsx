import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function NFCReader() {
  const [reading, setReading] = useState(false)
  const [tagData, setTagData] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    // Check if the device is a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    document.write(isMobile)

    if (isMobile && "NDEFReader" in window) {
      const ndef = new NDEFReader()

      ndef.onreading = (event) => {
        setTagData(event.message)
      }

      ndef.onerror = (error) => {
        console.log("Error reading NFC tag:", error)
      }

      return () => {
        // Cleanup code when component is unmounted
        ndef.stop()
      }
    } else {
      alert("NFCReader is not supported on this device.")
      navigate('/payment')

    }
  }, [])

  const handleScan = () => {
    if (!reading) {
      ndef.scan()
      setReading(true)
    } else {
      // Stop scanning
      ndef.stop()
      setReading(false)
      setTagData(null)
    }
  }

  return (
    <>
    <NavBar />
      <h1>NFC Reader</h1>
      {tagData && (
        <div>
          <h2>Tag Data:</h2>
          <p>{JSON.stringify(tagData)}</p>
        </div>
      )}
    </>
  )
}
