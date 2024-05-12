import Header from '@renderer/components/Header'
import { useLocation } from 'react-router-dom'
import '../../../index.css'
import PaymentOption from './component/PaymentOption'

function PaymentPage() {
  const { state } = useLocation()
  const { cart } = state
  const totalPrice = cart.reduce((prev, cur) => prev + cur.price * cur.quantity, 0)
  const totalItem = cart.reduce((prev, cur) => prev + cur.quantity + cur.quantity, 0)

  return (
    <main className="flex flex-col min-h-screen max-h-screen ">
      <Header navigate="/" />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col  relative overflow-auto bg-gray-200 overflow-x-hidden">
          <div className="px-3 flex-1 overflow-auto">
            {cart.map((item) => (
              <div key={item.name} className="px-2 py-2 rounded-md shadow-sm">
                <h1>{item.name}</h1>
                <div className="flex justify-between">
                  <h2>x {item.quantity}</h2>
                  <h2>{item.price * item.quantity}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky flex items-end justify-between h-16 px-3 py-3 bg-white border-t-4 z-10  bottom-0">
            <h2 className="text-xl">
              Total{' '}
              <b>
                ({totalItem} {totalItem > 1 ? 'items' : 'item'})
              </b>
            </h2>
            <h2 className="text-3xl underline">${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
        <PaymentOption totalPrice={totalPrice} product={cart} />
      </div>
    </main>
  )
}

export default PaymentPage
