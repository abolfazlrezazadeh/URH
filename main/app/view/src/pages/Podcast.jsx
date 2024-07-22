// import { CiSearch } from "react-icons/ci"
import NavBar from "../components/NavBar"

export default function Podcast() {
  return (
    <>
      <NavBar />
      <div>
      <h1 className="font-bold text-2xl mt-5 mr-5">پادکست کده</h1>

      <div>
        <input
          type="text"
          placeholder="چی میخای گوش کنی؟ "
          className="m-auto my-5 block w-4/5 bg-gray-200 placeholder:text-gray-800 placeholder:text-center rounded-md border border-gray-500 p-1"
        />
        {/* <CiSearch /> */}
      </div>

        <ItemWrapper>
          <Header>علمی</Header>
          <div className="flex flex-row gap-2">
            <Item imgSrc="/assets/podcast/elmi1.png" title="زمین" />
            <Item imgSrc="/assets/podcast/elmi2.png" title="مورچه" />
            <Item imgSrc="/assets/podcast/elmi3.png" title="ماشین" />
          </div>
        </ItemWrapper>

        <ItemWrapper>
          <Header>مذهبی</Header>
          <div className="flex flex-row gap-2">
            <Item imgSrc="assets/podcast/mzhbi1.png" title="زیارت عاشورا" />
            <Item imgSrc="assets/podcast/mzhbi2.png" title="انقلاب" />
            <Item imgSrc="assets/podcast/mzhbi3.png" title="سخنان رهبر" />
          </div>
        </ItemWrapper>

        <ItemWrapper>
          <Header>توسعه فردی</Header>
          <div className="flex flex-row gap-2">
            <Item imgSrc="assets/podcast/s1.png" title="هنر جنگ" />
            <Item imgSrc="assets/podcast/s2.png" title="باشگاه 5 صبحی" />
            <Item imgSrc="assets/podcast/s3.png" title="هنر نه گفتن" />
          </div>
        </ItemWrapper>
      </div>
    </>
  )
}

function Header({ children }) {
  return (
    <h2 className="w-max rounded-full border-r border-t border-gray-600 text-2xl">
      {children}
    </h2>
  )
}

function Item({ imgSrc, title }) {
  return (
    <di className="flex-center flex-col">
      <img src={imgSrc} alt={title} className="" />
      <p className="">{title}</p>
    </di>
  )
}

function ItemWrapper({ children }) {
  return <div className="mb-5 flex flex-col gap-3 pr-3">{children}</div>
}
