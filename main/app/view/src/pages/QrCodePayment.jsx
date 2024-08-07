import { useEffect, useState } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"

export default function QrCodePayment() {
  const [scanResult, setScanResult] = useState(null)
  const [shouldRenderScanner, setShouldRenderScanner] = useState(true)

  useEffect(() => {
    if (shouldRenderScanner) {
      const scanner = new Html5QrcodeScanner("reader", {
        qrbox: {
          width: "250px",
          height: "300px",
        },
        fps: 10,
      })

      scanner.render(onSuccess, onError)

      return () => {
        scanner.clear()
      }
    }
  }, [shouldRenderScanner])

  const onSuccess = (result) => {
    setScanResult(result)
    setShouldRenderScanner(false)
  }

  const onError = (error) => {
    console.warn(error)
  }
  return (
    <>
      <h1>پرداخت با nfc</h1>
      scanResult ? (
      <div>
        Success
        <a href={scanResult} target="_blank" rel="noreferrer">
          {scanResult}
        </a>
      </div>
      ) : (<div id="reader"></div>)
    </>
  )
}
