import { useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'

type props = {
  navigate: string
  title?: string
  state?: any
}

function Header(props: props) {
  const navigate = useNavigate()

  return (
    <header className="flex items-center space-x-4  px-2 py-4 bg-opacity-85">
      <button
        onClick={() => navigate(props.navigate, { state: props.state })}
        className="font-bold text-xl px-4"
      >
        <IoMdArrowRoundBack size={32} />
      </button>
      <h1 className=" font-bold text-lg text-red-500   sm:text-xl md:text-2xl">
        {props.title || 'BugaBug'}
      </h1>
    </header>
  )
}

export default Header
