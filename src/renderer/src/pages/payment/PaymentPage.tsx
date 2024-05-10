import Header from '@renderer/components/Header'
import '../../../index.css'
import { useLocation, useNavigate } from 'react-router-dom'
import qrisImage from '../../../../../resources/qris.png'
import bankImage from '../../../../../resources/bank.png'
import danaImage from '../../../../../resources/dana.png'
import gopayImage from '../../../../../resources/gopay.png'

function PaymentPage() {
  const navigate = useNavigate()

  const { state } = useLocation()
  const { product, price } = state

  const handleToProcess = (product: string, methode: string) => {
    const paymentDetails = {
      product: product,
      amount: price,
      currency: 'USD', // Example currency
      methode: methode
    }
    navigate('/paymentProcess', { state: { ...paymentDetails, price } })
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header navigate="/" />
      <div className=" flex items-center justify-between px-6 h-24">
        <h1 className="text-4xl">{product}</h1>
        <h2 className="text-3xl underline">${price}</h2>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <div className="grid grid-cols-12 gap-2 ">
          <button
            onClick={() => handleToProcess(product, 'qris')}
            className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12  sm:col-span-6  md:col-span-4 lg:col-span-3 border-2"
          >
            <img className="w-32 h-24" src={qrisImage} alt="qris" />
          </button>
          <button
            onClick={() => handleToProcess(product, 'bank')}
            className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3 border-2"
          >
            <img className="w-32 h-24" src={bankImage} alt="bank" />
          </button>
          <button
            onClick={() => handleToProcess(product, 'gopay')}
            className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3 border-2"
          >
            <img className="w-32 h-24" src={gopayImage} alt="gopay" />
          </button>
          <button
            onClick={() => handleToProcess(product, 'dana')}
            className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3 border-2"
          >
            <img className="w-32 h-24" src={danaImage} alt="dana" />
          </button>
        </div>
      </div>
    </main>
  )
}

export default PaymentPage
