import { AiFillYoutube } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import { BsTelegram } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
export default function Footer() {
  return (
    <>
      <div className="flex flex-wrap gap-2 p-2">
        <div className="flex-center w-32 rounded-md border border-gray-600 p-4 text-center">
          سوالات متداول
        </div>
        <div className="flex-center w-32 rounded-md border border-gray-600 p-4 text-center">
          شکایات{" "}
        </div>
        <div className="flex-center w-32 rounded-md border border-gray-600 p-4 text-center">
          تماس با ما
        </div>
        <div className="flex-center w-32 rounded-md border border-gray-600 p-4 text-center">
          درباره ی ما{" "}
        </div>
      </div>

      {/* links to social media */}
      <div className="my-8 flex flex-row justify-center gap-5">
        <BsInstagram className="text-3xl text-blue-600" />
        <BsTelegram className="text-3xl text-blue-600" />
        <BsTwitter className="text-3xl text-blue-600" />
        <AiFillYoutube className="text-3xl text-blue-600" />
      </div>

      <h1 className="text-left ml-2">Urh©2024</h1>
    </>
  )
}
