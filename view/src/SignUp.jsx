export default function SignUp() {
  return (
    <>
      <h1 className="mr-8 mt-24 text-4xl font-extrabold">خوش آمدید</h1>
      <p className="mr-10 mt-10 text-base">لطفا شماره ی خودرا وارد فرمایید</p>
      <form>
        <input
          type="text"
          className="m-auto mt-8 block w-4/5 rounded-2xl border border-gray-500 py-3 text-center placeholder-gray-600 placeholder:font-bold"
          placeholder="شماره موبایل"
          maxLength={11}
          minLength={11}
        />
        <p className="mr-10 mt-5 text-base">
          با ثبت نام قوانین و شرایط را میپذیرم
        </p>
        <button className="m-auto mt-5 block rounded-full bg-[#00FFC1] px-10 py-3">
          دریافت کد
        </button>
      </form>
    </>
  )
}
