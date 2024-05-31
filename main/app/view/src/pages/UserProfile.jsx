import Card from "../components/Card"
import GoBackBtn from "../components/GoBackBtn"

export default function UserProfile() {
  return (
    <div>
      <GoBackBtn />
      <img
        src="/assets/user.png"
        className="m-auto mt-5 w-4/5 rounded-full border border-cyan-500"
        alt="logo"
      />
      <Card value="پوریا موریا" />
      <Card value="09318348635" />
      <Card value="puryakuni@gmail.com" />
      <Card value="آدرس محل سکونت" />
      <Card value="شغل" />
      <Card
        value="خروج از حساب"
        className="rounded-2xl border border-gray-800 text-center text-red-500"
      />
    </div>
  )
}
