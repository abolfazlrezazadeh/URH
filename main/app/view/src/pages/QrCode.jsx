import { useEffect, useState } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"

export default function QrCode() {
  const [scanResault, setScanResault] = useState(null)

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: "250px",
        height: "300px",
      },
      fps: 5,
    })

    scanner.render(success, error)

    function success(resault) {
      scanner.clear()
      setScanResault(resault)
    }
    function error(err) {
      console.warn(err)
    }
  }, [])

  return (
    <>
      {scanResault ? (
        <div>
          Success <a href={scanResault}>{scanResault}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </>
  )
}
