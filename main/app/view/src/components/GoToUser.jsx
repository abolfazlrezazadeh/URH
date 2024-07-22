import { FaRegUser } from "react-icons/fa"; 
import { Link } from "react-router-dom";


export default function GoToUser() {
  return (
    <Link
          to="/information"
      className="absolute right-3 top-3 z-50 cursor-pointer rounded-lg bg-white/90 p-[0.4rem] text-black shadow-lg outline outline-1 outline-gray-400"
    >
          <FaRegUser />
    </Link>
  )
}
