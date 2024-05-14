import VerificationInput from "react-verification-input"

export default function Confirm() {
  return (
    <>
      <h1 className="mr-8 mt-24 text-3xl font-extrabold">
        کد تایید را وارد کنید
      </h1>
      <p className="mr-[5vw] mt-10 text-base text-gray-600">
        کد تایید به شماره ی
        <span className="mx-2 font-bold text-black">09019735561</span>
        فرستاده شد.
      </p>
      <p className="mr-[5vw] mt-10">
        شماره موبایل صحیح است ؟
        <span className="mx-2 text-blue-600">ویرایش</span>
      </p>
      <div dir="ltr" className="flex-center m-auto my-8 w-4/5">
        <VerificationInput
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
