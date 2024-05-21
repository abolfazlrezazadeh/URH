import { BiSupport } from "react-icons/bi"
import { FiHelpCircle } from "react-icons/fi"
import { AiOutlineSetting } from "react-icons/ai"
import { FaUserFriends } from "react-icons/fa"
import { GoLocation } from "react-icons/go"
import { CiRoute } from "react-icons/ci"

import InfoCard from "./InfoCard"

import { useNavigate } from "react-router-dom"
import GoBackBtn from "./GoBackBtn"

export default function Information() {
  const navigate = useNavigate()

  return (
    <>
      <GoBackBtn />
      <div className="mt-10 flex flex-row items-center justify-evenly">
        <img src="/assets/user.png" alt="user" className="w-1/4" />
        <div className="space-y-6 text-center text-xl font-bold tracking-wider">
          <p>پوریا موریا</p>
          <p>09314896513</p>
        </div>
      </div>

      <div className="m-auto mt-4 flex h-48 w-[90%] flex-col justify-between rounded-md bg-gradient-to-r from-gray-900 to-blue-gray-700 p-5">
        <div className="font-bold tracking-wider text-white">
          <p>موجودی</p>
          <p>تومان 20,000</p>
        </div>
        <div className="flex justify-end">
          <button className="rounded-lg bg-primary px-3 py-1">
            افزایش موجودی
          </button>
        </div>
      </div>

      <div className="pr-5">
        <InfoCard icon={<CiRoute />} text="مسیر های منتخب" />
        <InfoCard icon={<GoLocation />} text="مکان های منتخب" />
        <InfoCard
          icon={<FaUserFriends />}
          text="دعوت دوستان"
          onClick={() => navigate("/invite")}
        />
        <InfoCard
          icon={<AiOutlineSetting />}
          text="تنظیمات"
          onClick={() => navigate("/settings")}
        />
        <InfoCard icon={<BiSupport />} text="پشتیبانی" />
        <InfoCard icon={<FiHelpCircle />} text="راهنما" />
      </div>
    </>
  )
}
