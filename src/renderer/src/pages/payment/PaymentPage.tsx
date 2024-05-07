import '../../../index.css'
import { useLocation, useNavigate } from 'react-router-dom'
// import { initiatePayment } from './initiatePayment'

function PaymentPage() {
  const navigate = useNavigate()

  const { state } = useLocation()
  const { product } = state

  const handleToProcess = (product: string, methode: string) => {
    const paymentDetails = {
      product: product,
      amount: 120000,
      currency: 'IDR', // Example currency
      methode: methode
    }
    navigate('/paymentProcess', { state: paymentDetails })
  }

  return (
    <main className="flex flex-col min-h-screen">
      <header className="flex items-center space-x-4 bg-red-500 px-2 py-4">
        <button onClick={() => navigate('/')} className="text-white font-bold text-xl">
          back
        </button>
        <h1 className="text-white font-bold text-3xl">Bugger Barger</h1>
      </header>
      <div className=" flex items-center justify-between px-6 h-24">
        <h1 className="text-4xl">{product}</h1>
        <h2 className="text-3xl underline">Rp.120.000</h2>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <div className="grid grid-cols-12 gap-2 ">
          <button
            onClick={() => handleToProcess(product, 'qris')}
            className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12 h-16 w-32 sm:col-span-6  md:col-span-4 lg:col-span-3 border-2"
          >
            QRIS
          </button>
          <button
            onClick={() => handleToProcess(product, 'bank')}
            className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12 h-16 w-32 sm:col-span-6 md:col-span-4 lg:col-span-3 border-2"
          >
            BANK
          </button>
          <button
            onClick={() => handleToProcess(product, 'gopay')}
            className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12 h-16 w-32 sm:col-span-6 md:col-span-4 lg:col-span-3 border-2"
          >
            GOPAY
          </button>
          <button
            onClick={() => handleToProcess(product, 'dana')}
            className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12 h-16 w-32 sm:col-span-6 md:col-span-4 lg:col-span-3 border-2"
          >
            DANA
          </button>
        </div>
      </div>
    </main>
  )
}

export default PaymentPage
