import { MdPayment } from "react-icons/md"
import { BiQr } from "react-icons/bi"
import { FaTaxi } from "react-icons/fa"
import { BsBusFrontFill } from "react-icons/bs"
import { BiSupport } from "react-icons/bi"
import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="absolute bottom-4 left-1/2 top-[90%] z-50 flex h-14 w-4/5 -translate-x-1/2 -translate-y-1/2 transform items-center justify-around rounded-full border-t-2 border-gray-400 bg-white/95">
      <NavLink
        to="/bus"
        className={({ isActive }) => (isActive ? "bg-primary" : "")}
        style={{
          fontSize: "1.25rem",
          padding: "0.75rem",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BsBusFrontFill />
      </NavLink>
      <NavLink
        to="/payment"
        className={({ isActive }) => (isActive ? "bg-primary" : "")}
        style={{
          fontSize: "1.25rem",
          padding: "0.75rem",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MdPayment />
      </NavLink>
      <NavLink
        to="/taxi"
        className={({ isActive }) => (isActive ? "bg-primary" : "")}
        style={{
          fontSize: "1.25rem",
          padding: "0.75rem",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaTaxi />
      </NavLink>
      <NavLink
        to="/podcast"
        style={{
          fontSize: "1.25rem",
          padding: "0.75rem",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={({ isActive }) => (isActive ? "bg-primary" : "")}
      >
        <BiSupport />
      </NavLink>
    </nav>
  )
}
