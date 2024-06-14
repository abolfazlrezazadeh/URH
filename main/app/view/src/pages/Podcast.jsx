import { CiSearch } from "react-icons/ci"

export default function Podcast() {
  return (
    <div>
      <h1>پادکست کده</h1>

      <div>
        <input type="text" placeholder="چی میخای گوش کنی؟ " />
        <CiSearch />
      </div>

      <ItemWrapper>
        <Header>علمی</Header>
      </ItemWrapper>

      <ItemWrapper>
        <Header>مذهبی</Header>
      </ItemWrapper>

      <ItemWrapper>
        <Header>توسعه فردی</Header>
      </ItemWrapper>

    </div>
  )
}

function Header({ children }) {
  return <h2 className="text-3xl border-t border-r border-gray-600 rounded-full w-max">{children}</h2>
}

function Item() {
  return <>
  </>
}

function ItemWrapper({ children }) {
  return <div className="flex flex-col">{children}</div>
}
