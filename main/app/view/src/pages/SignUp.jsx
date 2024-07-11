import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from 'react-router-dom'
import {
  sendOtp,
  updatePhoneNumber,
} from "../features/user/userSlice"
import Confirm from "../features/user/Confirm"
import { useEffect } from "react"

export default function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const haveSms = useSelector((store) => store.user.haveSms)
  const phoneNumber = useSelector((store) => store.user.user.phoneNumber)
  const smsSendingLoading = useSelector((store) => store.user.smsSendingLoading)
  const jwtCode = useSelector((store) => store.user.user.jwtToken)

  const handlePhoneNumberChange = (e) => {
    let value = e.target.value
    if (value.length > 11) {
      value = value.slice(0, 11)
    }
    dispatch(updatePhoneNumber(value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (phoneNumber.length !== 11) return
    const userNumAsObj = { phone: phoneNumber }
    dispatch(sendOtp(userNumAsObj))
  }

  useEffect(() => {
    if (jwtCode) {
      console.log('we have jwt code')
      navigate('/bus')
    }
  }, [jwtCode])

  if (haveSms) {
    return (
      <Confirm />
    )
  }

  return (
    <>
      <h1 className="mr-8 mt-24 text-4xl font-extrabold">خوش آمدید</h1>
      <p className="mr-10 mt-10 text-base">لطفا شماره ی خودرا وارد فرمایید</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="number"
          className="m-auto mt-8 block w-4/5 rounded-2xl border border-gray-500 py-3 text-center placeholder-gray-600 placeholder:font-bold"
          placeholder="شماره تلفن"
          // value={phoneNumber}
          onChange={handlePhoneNumberChange}
          inputMode="numeric"
        />
        <p className="mr-10 mt-5 text-base">
          با ثبت نام قوانین و شرایط را میپذیرم
        </p>
        <button
          type="submit"
          disabled={smsSendingLoading}
          className="m-auto mt-5 block rounded-full bg-[#00FFC1] px-10 py-3 disabled:cursor-not-allowed disabled:opacity-60"
        >
          دریافت کد
        </button>
      </form>
    </>
  )
}
