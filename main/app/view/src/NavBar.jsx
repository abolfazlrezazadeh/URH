import { BiQr } from "react-icons/bi"
import { FaTaxi } from "react-icons/fa"
import { BsBusFrontFill } from "react-icons/bs"
import { BiSupport } from "react-icons/bi"
export default function NavBar() {
  return (
    <nav className="absolute bottom-4 left-1/2 top-[90%] flex h-14 w-4/5 -translate-x-1/2 -translate-y-1/2 transform justify-around rounded-full border-t-2 border-gray-400">
      <button className="text-2xl">
        <FaTaxi />
      </button>
      <button className="text-2xl">
        <BiQr />
      </button>
      <button className="text-2xl">
        <BsBusFrontFill />
      </button>
      <button className="text-2xl">
        <BiSupport />
      </button>
    </nav>
  )
}
