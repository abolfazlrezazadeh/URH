import NavBar from "../components/NavBar"
import elmi1 from "../assets/podcast/elmi1.png"
import elmi2 from "../assets/podcast/elmi2.png"
import elmi3 from "../assets/podcast/elmi3.png"
import mzhbi1 from "../assets/podcast/mzhbi1.png"
import mzhbi2 from "../assets/podcast/mzhbi2.png"
import mzhbi3 from "../assets/podcast/mzhbi3.png"
import s1 from "../assets/podcast/s1.png"
import s2 from "../assets/podcast/s2.png"
import s3 from "../assets/podcast/s3.png"

export default function Podcast() {
  return (
    <>
      <NavBar />
      <div>
        <h1 className="mr-5 mt-5 text-2xl font-bold">پادکست کده</h1>

        <div>
          <input
            type="text"
            placeholder="چی میخای گوش کنی؟ "
            className="m-auto my-5 block w-4/5 rounded-md border border-gray-500 bg-gray-200 p-1 placeholder:text-center placeholder:text-gray-800"
          />
        </div>

        <ItemWrapper>
          <Header>علمی</Header>
          <div className="flex flex-row gap-2">
            <Item imgSrc={elmi1} title="زمین" />
            <Item imgSrc={elmi2} title="مورچه" />
            <Item imgSrc={elmi3} title="ماشین" />
          </div>
        </ItemWrapper>

        <ItemWrapper>
          <Header>مذهبی</Header>
          <div className="flex flex-row gap-2">
            <Item imgSrc={mzhbi1} title="زیارت عاشورا" />
            <Item imgSrc={mzhbi2} title="انقلاب" />
            <Item imgSrc={mzhbi3} title="سخنان رهبر" />
          </div>
        </ItemWrapper>

        <ItemWrapper>
          <Header>توسعه فردی</Header>
          <div className="flex flex-row gap-2">
            <Item imgSrc={s1} title="هنر جنگ" />
            <Item imgSrc={s2} title="باشگاه 5 صبحی" />
            <Item imgSrc={s3} title="هنر نه گفتن" />
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
    <div className="flex-center flex-col">
      <img src={imgSrc} alt={title} className="" />
      <p className="">{title}</p>
    </div>
  )
}

function ItemWrapper({ children }) {
  return <div className="mb-5 flex flex-col gap-3 pr-3">{children}</div>
}
