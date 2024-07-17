import { useEffect, useState } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"
import NavBar from "../components/NavBar"

export default function Payment() {
  const [scanResault, setScanResault] = useState(null)

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: "250px",
        height: "300px",
      },
      fps: 10,
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
      <NavBar />
      {scanResault ? (
        <div>
          Success
          <a href={scanResault} target="_blank" rel="noreferrer">
            {scanResault}
          </a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </>
  )
}
