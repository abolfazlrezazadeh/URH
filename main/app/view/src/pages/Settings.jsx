import { Switch } from "@material-tailwind/react"
import GoBackBtn from "../components/GoBackBtn"
import NavBar from "../components/NavBar"

export default function Settings() {
  return (
    <div>
      <GoBackBtn />
      <NavBar />
      <h1 className="mr-14 mt-20 text-4xl font-bold">تنظیمات</h1>
      <div
        className={`bg-slate-50 m-auto mt-5 flex w-4/5 cursor-pointer flex-row items-center justify-between gap-3 rounded-full border-b-2 border-gray-800 px-3 py-2 font-semibold`}
      >
        <p>نشان دادن نزدیک ترین اتوبوس</p>
        <Switch color="cyan" />
      </div>
      <div
        className={`bg-slate-50 m-auto mt-5 flex w-4/5 cursor-pointer flex-row items-center justify-between gap-3 rounded-full border-b-2 border-gray-800 px-3 py-2 font-semibold`}
      >
        <p>اطلاعات ترافیکی</p>
        <Switch color="cyan" />
      </div>
      <div
        className={`bg-slate-50 m-auto mt-5 flex w-4/5 cursor-pointer flex-row items-center justify-between gap-3 rounded-full border-b-2 border-gray-800 px-3 py-2 font-semibold`}
      >
        <p>تم</p>
        <Switch color="yellow" />
      </div>
      <div
        className={`bg-slate-50 m-auto mt-5 flex w-4/5 cursor-pointer flex-row items-center justify-between gap-3 rounded-full border-b-2 border-gray-800 px-3 py-2 font-semibold`}
      >
        <p>زبان</p>
        <select name="" id="">
          <option value="Farsi">Farsi</option>
          <option value="English">English</option>
        </select>
      </div>
    </div>
  )
}
