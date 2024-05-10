import { useNavigate } from 'react-router-dom'
import '../../../index.css'
import burgerImage from '../../../../../resources/burger.png'
import pizzaImage from '../../../../../resources/pizza.png'
import hotdogImage from '../../../../../resources/hotdog.png'
import menuData from '../../../../../resources/data/menu_data.json'
import { useState } from 'react'

function HomePage() {
  const [menuChoice, setMenuChoice] = useState<'hotdog' | 'pizza' | 'burger'>('burger')
  const navigate = useNavigate()
  const menuFood = menuData.find((item) => item.category === menuChoice)

  const imageFood = {
    pizza: pizzaImage,
    burger: burgerImage,
    hotdog: hotdogImage
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex flex-1 flex-col sm:flex-row">
        <div className="flex sm:fixed  flex-row sm:flex-col sm:flex-1 sm:min-h-screen py-5 px-8 shadow-2xl gap-4 justify-center items-center">
          <h1 className="fixed top-16 font-bold text-2xl hidden sm:block">BugaBug</h1>
          <button
            onClick={() => setMenuChoice('burger')}
            className="col-span-4 flex items-center justify-center shadow-md cursor-pointer rounded-md "
          >
            <img className="w-20 h-20" src={burgerImage} />
          </button>
          <button
            onClick={() => setMenuChoice('pizza')}
            // onClick={() => navigate({ pathname: 'payment' }, { state: { product: 'Pizza' } })}
            className="col-span-4 flex items-center justify-center shadow-md cursor-pointer rounded-md "
          >
            <img className="w-20 h-20" src={pizzaImage} />
          </button>
          <button
            onClick={() => setMenuChoice('hotdog')}
            // onClick={() => navigate({ pathname: 'payment' }, { state: { product: 'Hotdog' } })}
            className="col-span-4 flex items-center justify-center shadow-md cursor-pointer rounded-md "
          >
            <img className="w-20 h-20" src={hotdogImage} />
          </button>
        </div>
        <div className="flex-[4] flex justify-center items-center ">
          <div className=" grid mx-4 grid-cols-12 gap-8 place-items-center ">
            {menuFood?.variants.map((item) => (
              <button
                onClick={() =>
                  navigate(
                    { pathname: 'payment' },
                    { state: { product: item.name, price: item.price } }
                  )
                }
                className=" flex flex-col  justify-center items-center h-60 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 w-32 text-center rounded-md shadow-md"
                key={item.name}
              >
                <img src={imageFood[menuChoice]} alt={item.name} />
                <h1>{item.name}</h1>
                <h2>${item.price}</h2>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
