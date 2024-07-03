import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

import { checkOtp } from "../user/userSlice"
import VerificationInput from "react-verification-input"

import Modal from "../../components/Modal"

export default function Confirm() {
  const dispatch = useDispatch()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const phoneNumber = useSelector((store) => store.user.user.phoneNumber)

  function checkOtpHandler(e) {
    // const regex = /^09[0-9]{9}$/
    const userInfoToCheck = {
      phone: phoneNumber,
      code: e,
    }
    dispatch(checkOtp(userInfoToCheck))
  }

  function editNumber() {
    // setIsEditModalOpen(prevState => !prevState)
    setIsEditModalOpen(true)
  }

  return (
    <>
      <h1 className="mr-8 mt-24 text-3xl font-extrabold">
        کد تایید را وارد کنید
      </h1>
      <p className="mr-[5vw] mt-10 text-base text-gray-600">
        کد تایید به شماره ی
        <span className="mx-2 font-bold text-black">{phoneNumber}</span>
        فرستاده شد.
      </p>
      <p className="mr-[5vw] mt-10">
        شماره موبایل صحیح است ؟
        <span
          className="mx-2 cursor-pointer text-blue-600"
          onClick={editNumber}
        >
          ویرایش
        </span>
      </p>
      <div dir="ltr" className="flex-center m-auto my-8 w-4/5">
        <VerificationInput
          inputProps={{ autoComplete: "one-time-code" }}
          autoFocus={true}
          onComplete={(e) => checkOtpHandler(e)}
          validChars="0-9"
          length={5}
          placeholder=" "
          classNames={{
            container: "container",
            character: "character",
            characterInactive: "character--inactive",
            characterSelected: "character--selected",
            characterFilled: "character--filled",
          }}
        />
      </div>
      <h4>
        <button className="m-auto mt-5 block rounded-full bg-[#00FFC1] px-20 py-3">
          تایید
        </button>
      </h4>
    </>
  )
}
