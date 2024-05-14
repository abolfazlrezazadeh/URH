export default function Invite() {
  return (
    <div className="bg-inviteBg gap-y-4 flex-center h-screen flex-col">
      <img
        src="/assets/invite-bg.jpg"
        className="aspect-square rounded-full object-cover"
        alt="bgForInvite"
      />

      <p className="text-white mt-2">دوستان خود را به اپلیکیشن دعوت کنید</p>
      <button className="bg-primary py-1 px-4 font-bold ">ارسال لینک دعوت</button>
      <button className="">کپی کردن لینک</button>
    </div>
  );
}
