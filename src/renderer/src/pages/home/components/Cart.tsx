import React from 'react'
import { CartProps } from '../HomePage'
import CartCard from './CartCard'
import { useNavigate } from 'react-router-dom'

type props = {
  cart: CartProps[]
  setCart: React.Dispatch<React.SetStateAction<CartProps[]>>
}

function Cart({ cart, setCart }: props) {
  const totalPrice = cart.reduce((prev, cur) => prev + cur.price * cur.quantity, 0)
  const navigate = useNavigate()

  const minFromCart = (productName: string) => {
    console.log('min click')

    setCart((state) => {
      const isProductInCart = state.findIndex((product) => product.name === productName)
      if (isProductInCart !== -1) {
        if (cart[isProductInCart].quantity === 1) {
          const filterCart = state.filter((product) => product.name !== productName)
          return filterCart
        } else {
          const updatedCart = [...cart]
          updatedCart[isProductInCart] = {
            ...updatedCart[isProductInCart],
            quantity: updatedCart[isProductInCart].quantity - 1
          }
          return updatedCart
        }
      } else {
        return state
      }
    })
  }

  const removeFromCart = (productName: string) => {
    setCart((state) => {
      const filterCart = state.filter((product) => product.name !== productName)
      return filterCart
    })
  }

  return (
    <div className="flex  sticky max-h-screen min-h-screen overflow-x-hidden bottom-0 top-0 right-0 left-0 px-3">
      <div className="space-y-3 flex-1 py-5 overflow-auto">
        {cart.map((item) => (
          <CartCard
            key={item.name}
            cart={item}
            onDelete={() => removeFromCart(item.name)}
            onMin={() => minFromCart(item.name)}
          />
        ))}
        <div className="h-32" />
      </div>
      <div className="absolute flex flex-col bottom-0 border-t-2 right-0 left-0 h-32 z-10 bg-white">
        <h1>Total</h1>
        <h2 className="font-bold text-2xl">${totalPrice.toFixed(2)}</h2>
        <button
          className=" absolute bottom-3 right-3 left-3  bg-green-300 px-3 py-2 rounded-md disabled:bg-slate-500"
          disabled={totalPrice === 0}
          onClick={() => navigate('payment', { state: { cart } })}
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default Cart
