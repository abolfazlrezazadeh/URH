import { useEffect, useState } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

export default function Payment() {
  const [scanResult, setScanResult] = useState(null)
  const [activeTab, setActiveTab] = useState("qr")
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
      <NavBar />

      <div className="flex-center absolute bottom-32 left-1/2 w-full -translate-x-1/2 transform">
        <button
          className={`mt-2 rounded-r-xl border border-gray-500 px-2 py-1 ${activeTab === "nfc" && "bg-primary"}`}
          onClick={() => {
            setActiveTab("nfc")
            setShouldRenderScanner(false)
          }}
        >
          پرداخت با nfc
        </button>
        <button
          className={`mt-2 rounded-l-xl border border-gray-500 px-2 py-1 ${activeTab === "qr" && "bg-primary"}`}
          onClick={() => {
            setActiveTab("qr")
            setShouldRenderScanner(true)
          }}
        >
          پرداخت با qr code
        </button>
      </div>

      {activeTab === "qr" ? (
        scanResult ? (
          <div>
            Success
            <a href={scanResult} target="_blank" rel="noreferrer">
              {scanResult}
            </a>
          </div>
        ) : (
          <div id="reader"></div>
        )
      ) : (
        <Link to='/nfc'>Go to nfc tab</Link>
      )}
    </>
  )
}
