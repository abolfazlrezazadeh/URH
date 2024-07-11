import GoBackBtn from "../components/GoBackBtn"

export default function Invite() {
  return (
    <div className="flex-center h-screen flex-col gap-y-4 bg-[#5F5D9C]">
      <GoBackBtn />
      <img
        src="/assets/invite-bg.jpg"
        className="aspect-square w-3/4 rounded-full object-cover"
        alt="bgForInvite"
      />

      <p className="mt-2 text-white">دوستان خود را به اپلیکیشن دعوت کنید</p>
      <button className="rounded-lg bg-primary px-4 py-1 font-bold">
        ارسال لینک دعوت
      </button>
      <button className="">کپی کردن لینک</button>
    </div>
  )
}
