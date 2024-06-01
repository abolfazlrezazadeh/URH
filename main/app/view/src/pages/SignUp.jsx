import { useState } from "react"
// import { useSelector } from "@reduxjs/toolkit"
import VerificationInput from "react-verification-input"

export default function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState("")
  // const signIn = useSelector(store => store.user.haveSms)

  const handlePhoneNumberChange = (e) => {
    let value = e.target.value
    if (value.length > 11) {
      value = value.slice(0, 11)
    }
    setPhoneNumber(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (phoneNumber.length !== 11) return
    console.log(phoneNumber)
  }

  // if (signIn) {
    return (
      <>
        <h1 className="mr-8 mt-24 text-4xl font-extrabold">خوش آمدید</h1>
        <p className="mr-10 mt-10 text-base">لطفا شماره ی خودرا وارد فرمایید</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="number"
            className="m-auto mt-8 block w-4/5 rounded-2xl border border-gray-500 py-3 text-center placeholder-gray-600 placeholder:font-bold"
            placeholder="شماره تلفن"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            inputMode="numeric"
            />
          <p className="mr-10 mt-5 text-base">
            با ثبت نام قوانین و شرایط را میپذیرم
          </p>
          <button
            type="submit"
            className="m-auto mt-5 block rounded-full bg-[#00FFC1] px-10 py-3"
            >
            دریافت کد
          </button>
        </form>
      </>
    )
  // } else {
  //   return (
  //     <>
  //       <h1 className="mr-8 mt-24 text-3xl font-extrabold">
  //         کد تایید را وارد کنید
  //       </h1>
  //       <p className="mr-[5vw] mt-10 text-base text-gray-600">
  //         کد تایید به شماره ی
  //         <span className="mx-2 font-bold text-black">09019735561</span>
  //         فرستاده شد.
  //       </p>
  //       <p className="mr-[5vw] mt-10">
  //         شماره موبایل صحیح است ؟
  //         <span className="mx-2 text-blue-600">ویرایش</span>
  //       </p>
  //       <div dir="ltr" className="flex-center m-auto my-8 w-4/5">
  //         <VerificationInput
  //           validChars="0-9"
  //           length={5}
  //           placeholder=" "
  //           classNames={{
  //             container: "container",
  //             character: "character",
  //             characterInactive: "character--inactive",
  //             characterSelected: "character--selected",
  //             characterFilled: "character--filled",
  //           }}
  //         />
  //       </div>
  //       <h4>
  //         <button className="m-auto mt-5 block rounded-full bg-[#00FFC1] px-20 py-3">
  //           تایید
  //         </button>
  //       </h4>
  //     </>
  //   )
  // }
}
