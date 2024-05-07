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
    <header className="flex items-center space-x-4 bg-red-500 px-2 py-4">
      <button
        onClick={() => navigate(props.navigate, { state: props.state })}
        className="text-white font-bold text-xl px-4"
      >
        <IoMdArrowRoundBack size={32} color="#fff" />
      </button>
      <h1 className="text-white font-bold text-lg sm:text-xl md:text-2xl">
        {props.title || 'Bugger Barger'}
      </h1>
    </header>
  )
}

export default Header