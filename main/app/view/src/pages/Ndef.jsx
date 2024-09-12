import { useEffect, useState } from "react"
// import NfcConsole from "../components/NfcConsole"
import nfcImg from "/assets/nfc.jpg"

export default function Ndef() {
  const [feed, setFeed] = useState([])
  const [nfcValue, setNfcValue] = useState('')
  const [buttonText, setButtonText] = useState("شروع اسکن")
  // const [attemptCount, setAttemptCount] = useState(0)

  useEffect(() => {
    if (!("NDEFReader" in window)) {
      console.log(" گوشی شما از این تکنولوژی پشتیبانی نمیکند")
    }
  }, [])

  const scanTheNfc = async () => {
    try {
      const reader = new NDEFReader()
      await reader.scan()
      setButtonText("در حال اسکن")
      // setAttemptCount((prev) => prev + 1) // Increment the attempt counter

      reader.addEventListener("error", () => {
        setFeed('ارور هنگام پرداخت',
        )
      })

       reader.addEventListener("reading", ({ message, serialNumber }) => {
         setNfcValue(serialNumber)
       })

    } catch (error) {
      setFeed("ارور هنگام پرداخت")
    }
  }

  async function payTheFare() {
    try {
      const writer = new NDEFReader()
      await writer.write({
        records: [
          {
            recordType: "text",
            data: '4c:18:62:d2',
            encoding: "utf-8", // Use proper encoding depending on your data
          },
        ],
      })
      setFeed(`اتمام پرداخت`)
    } catch (error) {
      setFeed("ارور هنگام پرداخت")
    }

  }

  return (
    <>
      <h1 className="my-10 text-center text-xl">
        گوشی خود را به دستگاه نزدیک کنید.
      </h1>
      {/* <NfcConsole feed={feed} /> */}
      <img src={nfcImg} alt="nfc-image" className="my-16" />
      <div className="flex-center gap-4">
        {/* <button
          onClick={scanTheNfc}
          className="rounded-lg border border-gray-300 bg-[#ffc86b] px-10 py-3 text-base font-semibold text-black"
        >
          {buttonText}
        </button> */}
        <button
          onClick={payTheFare}
          className="rounded-lg border border-gray-300 bg-cyan-300 px-10 py-3 text-base font-semibold text-black"
        >
          پرداخت
        </button>
      </div>
      <p className="mt-5 text-center text-lg">
        {feed}
      </p>
    </>
  )
}
