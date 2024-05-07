import { useNavigate } from 'react-router-dom'
import '../../../index.css'

function HomePage() {
  const navigate = useNavigate()
  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-red-500 px-6 py-4">
        <h1 className="text-white font-bold text-3xl">Bugger Barger</h1>
      </header>
      <div className="flex flex-1  justify-center items-center">
        <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 ">
          <button
            onClick={() => navigate({ pathname: 'payment' }, { state: { product: 'Burger' } })}
            className="col-span-4 flex items-center justify-center h-12 w-20 shadow-md cursor-pointer border-2 border-black"
          >
            Burger
          </button>
          <button
            onClick={() => navigate({ pathname: 'payment' }, { state: { product: 'Pizza' } })}
            className="col-span-4 flex items-center justify-center h-12 w-20 shadow-md cursor-pointer border-2 border-black"
          >
            Pizza
          </button>
          <button
            onClick={() => navigate({ pathname: 'payment' }, { state: { product: 'Hotdog' } })}
            className="col-span-4 flex items-center justify-center h-12 w-20 shadow-md cursor-pointer border-2 border-black"
          >
            Hotdog
          </button>
        </div>
      </div>
    </main>
  )
}

export default HomePage
