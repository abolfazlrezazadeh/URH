import GoBackBtn from '../components/GoBackBtn'
import NavBar from '../components/NavBar'

export default function Developing() {
  return (
    <div className='absolute inset-0 bg-black/10 flex-center text-center font-body text-xl'>
      <GoBackBtn />
      <NavBar />
      در حال توسعه ...
    </div>
  )
}
