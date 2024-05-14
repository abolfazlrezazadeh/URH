import Card from "./Card";

export default function UserProfile() {
  return (
    <div>
      <img src="/assets/user.png" className="border border-cyan-500 w-4/5 m-auto mt-5 rounded-full" alt="logo" />
      <Card value='پوریا موریا' />
      <Card value='09318348635' />
      <Card value='puryakuni@gmail.com' />
      <Card value='آدرس محل سکونت' />
      <Card value='شغل' />
      <Card value='خروج از حساب' className='text-red-500 border border-gray-800 rounded-2xl text-center' />
    </div>
  )
}
