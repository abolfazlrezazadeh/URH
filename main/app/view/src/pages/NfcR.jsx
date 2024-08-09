import { useState } from "react"

export default function NfcR() {
  const [feedback, setFeedback] = useState("")

  const ScanNfc = async () => {
    setFeedback("clicked scan button")
    try {
      // eslint-disable-next-line no-undef
      const ndef = new NDEFReader()
      await ndef.scan()
      setFeedback("> Scan started")

      ndef.addEventListener("readingerror", () => {
        setFeedback("Argh! Cannot read data from the NFC tag. Try another one?")
      })

      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        setFeedback(
          `> Serial Number: ${serialNumber} \n\n > Records: (${message.records.length}) \n\n ${JSON.stringify(message)}`,
        )
      })
    } catch (error) {
      setFeedback("Argh!" + error)
    }
  }

  return (
    <>
      <button onClick={ScanNfc} className="py-4 px-6 bg-blue-200 mt-40 m-auto block rounded-md mb-5">Scan Nfc</button>
          <p className="text-center">{feedback}</p>
    </>
  )
}
