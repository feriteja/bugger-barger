import { useState } from 'react'
import burgerImage from '../../../../../resources/burger.png'
import menuData from '../../../../../resources/data/menu_data.json'
import hotdogImage from '../../../../../resources/hotdog.png'
import pizzaImage from '../../../../../resources/pizza.png'
import '../../../index.css'
import Cart from './components/Cart'

export type CartProps = {
  name: string
  price: number
  quantity: number
  type: string
}

function HomePage() {
  const [menuChoice, setMenuChoice] = useState<'hotdog' | 'pizza' | 'burger'>('burger')
  const [cart, setCart] = useState<CartProps[]>([])
  const menuFood = menuData.find((item) => item.category === menuChoice)

  const imageFood = {
    pizza: pizzaImage,
    burger: burgerImage,
    hotdog: hotdogImage
  }

  const addToCart = (productName: string, price: number, type: string) => {
    setCart((state) => {
      const isProductInCart = state.findIndex((product) => product.name === productName)
      if (isProductInCart !== -1) {
        const updatedCart = [...cart]
        updatedCart[isProductInCart] = {
          ...updatedCart[isProductInCart],
          quantity: updatedCart[isProductInCart].quantity + 1
        }
        return updatedCart
      } else {
        return [...state, { name: productName, price, quantity: 1, type: type }]
      }
    })
  }

  return (
    <main className="min-h-screen  flex flex-col">
      <div className="flex  flex-col sm:flex-row relative">
        <div className="flex-[2] md:flex-1 relative shadow-xl ">
          <div className="sticky min-h-screen flex flex-col space-y-8 justify-center items-center bottom-0 top-0 right-0 left-0  ">
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
        </div>
        <div className="flex-[5] flex justify-center items-center py-12 shadow-md">
          <div className=" grid mx-4 grid-cols-12 gap-8 place-items-center ">
            {menuFood?.variants.map((item) => (
              <button
                onClick={() => addToCart(item.name, item.price, menuChoice)}
                // onClick={() =>
                //   navigate(
                //     { pathname: 'payment' },
                //     { state: { product: item.name, price: item.price } }
                //   )
                // }
                className=" flex flex-col  justify-center items-center h-52 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 w-32 text-center rounded-md shadow-md"
                key={item.name}
              >
                <img src={imageFood[menuChoice]} alt={item.name} />
                <h1>{item.name}</h1>
                <h2>${item.price}</h2>
              </button>
            ))}
          </div>
        </div>
        <div className="sm:flex-[3] md:flex-[2]   ">
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </main>
  )
}

export default HomePage
