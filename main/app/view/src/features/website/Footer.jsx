import { AiFillYoutube } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import { BsTelegram } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
export default function Footer() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 p-2">
        <div className="flex-center w-32 cursor-pointer whitespace-nowrap rounded-md border border-gray-600 p-4 text-center">
          سوالات متداول
        </div>
        <div className="flex-center w-32 cursor-pointer rounded-md border border-gray-600 p-4 text-center">
          شکایات
        </div>
        <div className="flex-center w-32 cursor-pointer rounded-md border border-gray-600 p-4 text-center">
          تماس با ما
        </div>
        <div className="flex-center w-32 cursor-pointer rounded-md border border-gray-600 p-4 text-center">
          درباره ی ما
        </div>
      </div>

      {/* links to social media */}
      <div className="my-8 flex flex-row justify-center gap-5">
        <BsInstagram className="cursor-pointer text-3xl text-[#5B7DF5]" />
        <BsTelegram className="cursor-pointer text-3xl text-[#5B7DF5]" />
        <BsTwitter className="cursor-pointer text-3xl text-[#5B7DF5]" />
        <AiFillYoutube className="cursor-pointer text-3xl text-[#5B7DF5]" />
      </div>

      <h1 className="ml-2 text-left">Urh©2024</h1>
    </>
  )
}
