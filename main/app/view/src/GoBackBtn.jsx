import { IoIosArrowBack } from "react-icons/io"; 
import { useNavigate } from "react-router-dom"

export default function GoBackBtn() {
    const navigate = useNavigate()

  return (
    <div
      className="absolute left-4 top-4 cursor-pointer rounded-sm bg-gray-200 p-1 text-2xl"
      onClick={() => navigate(-1)}
    >
      <IoIosArrowBack />
    </div>
  )
}
