import { MdPayment } from "react-icons/md"
import { FaRegUser } from "react-icons/fa"

import taxiIcon from "../../public/icons/taxi.svg"
import podcastIcon from "../../public/icons/podcast.svg"
import busIcon from "../../public/icons/bus.svg"


import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 z-50 flex h-14 w-full items-center justify-around rounded-tl-3xl rounded-tr-3xl border-t-2 border-gray-300 bg-white/90">
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
        to="/bus"
        className={({ isActive }) => (isActive ? "!bg-primary" : "")}
        style={{
          fontSize: "1.25rem",
          padding: "0.75rem",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={busIcon} alt="bus-icon" />
      </NavLink>
      <NavLink
        to="/user"
        className={({ isActive }) => (isActive ? "!bg-primary" : "")}
        style={{
          fontSize: "1.4rem",
          padding: "0.75rem",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #e0e0e0",
          transform: "translateY(-18px)",
          background: "rgb(255 255 255 / 0.95)",
        }}
      >
        <FaRegUser />
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
        <img src={taxiIcon} alt="taxi-icon" />
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
        <img src={podcastIcon} className="" alt="podcast-icon" />
      </NavLink>
    </nav>
  )
}
