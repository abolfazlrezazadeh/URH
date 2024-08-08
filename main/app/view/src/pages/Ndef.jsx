import { useEffect, useState } from "react"
import NfcConsole from "../components/NfcConsole"

export default function Ndef() {
  const [feed, setFeed] = useState([])
  const [buttonText, setButtonText] = useState("Start Scan")

  useEffect(() => {
    if (!("NDEFReader" in window)) {
      alert("NFC is not supported on your device")
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

      reader.addEventListener("reading", ({ message, serialNumber }) => {
        setFeed((prevFeed) => [
          `Serial Number: ${serialNumber}`,
          ...prevFeed,
          ...message.records.map(
            (record, index) => `> Message ${index + 1}: ${record.data}`,
          ),
        ])
      })
    } catch (error) {
      setFeed((prevFeed) => [...prevFeed, `Argh! ${error.message || error}`])
    }
  }

  return (
    <>
      <button
        onClick={nfcScan}
        className="mb-5 rounded-lg border-none bg-[#ffc86b] px-10 py-3 text-base font-semibold text-black"
      >
        {buttonText}
      </button>
      <NfcConsole feed={feed} />
    </>
  )
}
