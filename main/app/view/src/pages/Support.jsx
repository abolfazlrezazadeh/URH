import { BiMapAlt } from "react-icons/bi"
import { BiSupport } from "react-icons/bi"
import { BiTimer } from "react-icons/bi"
import { BiBus } from "react-icons/bi"
import GoBackBtn from "../components/GoBackBtn"

export default function Support() {
  return (
    <div>
      <GoBackBtn />
      <h1 className="mr-8 mt-24 text-3xl font-extrabold">
        با چه مشکلی برخورد کرداید
      </h1>
      <div className="bg-slate-50 m-auto mt-8 flex w-4/5 cursor-pointer flex-row items-center gap-3 rounded-full border-b-2 border-gray-800 px-3 py-2">
        <BiBus />
        <button>گذارش تاخیر اتوبوس</button>
      </div>
      <div className="bg-slate-50 m-auto mt-8 flex w-4/5 cursor-pointer flex-row items-center gap-3 rounded-full border-b-2 border-gray-800 px-3 py-2">
        <BiMapAlt />
        <button>گزارش خطا در نقشه</button>
      </div>
      <div className="bg-slate-50 m-auto mt-8 flex w-4/5 cursor-pointer flex-row items-center gap-3 rounded-full border-b-2 border-gray-800 px-3 py-2">
        <BiTimer />
        <button>گزارش اشتباه در زمان اعلامی</button>
      </div>
      <div className="bg-slate-50 m-auto mt-8 flex w-4/5 cursor-pointer rounded-full border-b-2 border-gray-800 px-3 py-2">
        <a href="tel:+989925178741" className="flex flex-row items-center gap-3">
          <BiSupport />
          <button>تماس با پشتیبان </button>
        </a>
      </div>
    </div>
  )
}
