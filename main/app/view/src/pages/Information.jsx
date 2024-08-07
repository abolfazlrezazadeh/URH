import { BiSupport } from "react-icons/bi"
import { FiHelpCircle } from "react-icons/fi"
import { AiOutlineSetting } from "react-icons/ai"
import { FaUserFriends } from "react-icons/fa"
import { GoLocation } from "react-icons/go"
import { CiRoute } from "react-icons/ci"
import userImg from "../../build/assets/user.png"
import InfoCard from "../components/InfoCard"

import { Link, useNavigate }from "react-router-dom"
import NavBar from "../components/NavBar"

export default function Information() {
  const navigate =useNavigate()
  return (
    <>
      <NavBar />
      <Link to='profile' className="mt-10 flex flex-row items-center justify-evenly">
        <img src={userImg} alt="user" className="w-1/4" />
        <div className="space-y-6 text-center text-xl font-bold tracking-wider">
          <p>پوریا موریا</p>
          <p>09314896513</p>
        </div>
      </Link>

      <div className="bg-gray-100/20 border-b-2 border-gray-200 rounded-full m-auto flex justify-between py-4 my-8 px-2">
        <div className="flex flex-row gap-2">
          <p>موجودی: </p>
          <p className="font-bold">15,000</p>
        </div> 
        <button className="text-blue-400">افزایش موجودی</button>
      </div>

      <div className="pr-5">
        <InfoCard icon={<CiRoute />} onClick={() => navigate('developing')} text="مسیر های منتخب" />
        <InfoCard icon={<GoLocation />} onClick={() => navigate('developing')} text="مکان های منتخب" />
        <InfoCard
          icon={<FaUserFriends />}
          text="دعوت دوستان"
          onClick={() => navigate("invite")}
        />
        <InfoCard
          icon={<AiOutlineSetting />}
          text="تنظیمات"
          onClick={() => navigate("settings")}
        />
        <InfoCard
          icon={<BiSupport />}
          text="پشتیبانی"
          onClick={() => navigate("support")}
        />
        <InfoCard icon={<FiHelpCircle />} text="راهنما" />
      </div>
    </>
  )
}
