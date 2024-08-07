import { useNavigate } from "react-router-dom"

export default function PaymentNavBar() {
    const navigate = useNavigate()

  return (
    <div className="flex-center absolute bottom-32 left-1/2 w-full -translate-x-1/2 transform">
      <button
        className={`mt-2 rounded-r-xl border border-gray-500 px-2 py-1`}
        onClick={() => {
          navigate("nfc")
        }}
      >
        پرداخت با nfc
      </button>
      <button
        className={`mt-2 rounded-l-xl border border-gray-500 px-2 py-1`}
        onClick={() => {
          navigate("qrcode")
        }}
      >
        پرداخت با qr code
      </button>
    </div>
  )
}
