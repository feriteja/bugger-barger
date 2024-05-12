import { useNavigate } from 'react-router-dom'
import bankImage from '../../../../../../resources/bank.png'
import danaImage from '../../../../../../resources/dana.png'
import gopayImage from '../../../../../../resources/gopay.png'
import qrisImage from '../../../../../../resources/qris.png'

type Props = {
  totalPrice: number
  product: any
}

function PaymentOption({ totalPrice, product }: Props) {
  const navigate = useNavigate()

  const handleToProcess = (methode: string) => {
    const paymentDetails = {
      product,
      amount: totalPrice,
      currency: 'USD', // Example currency
      methode: methode
    }
    navigate('/paymentProcess', { state: paymentDetails })
  }

  return (
    <div className="flex flex-col flex-[2] justify-center  items-center">
      <div className="grid grid-cols-12 gap-2 ">
        <button
          onClick={() => handleToProcess('qris')}
          className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12  sm:col-span-6  md:col-span-4 lg:col-span-3 border-2"
        >
          <img className="w-32 h-24" src={qrisImage} alt="qris" />
        </button>
        <button
          onClick={() => handleToProcess('bank')}
          className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3 border-2"
        >
          <img className="w-32 h-24" src={bankImage} alt="bank" />
        </button>
        <button
          onClick={() => handleToProcess('gopay')}
          className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3 border-2"
        >
          <img className="w-32 h-24" src={gopayImage} alt="gopay" />
        </button>
        <button
          onClick={() => handleToProcess('dana')}
          className="flex justify-center hover:shadow-lg shadow-md border-black items-center col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3 border-2"
        >
          <img className="w-32 h-24" src={danaImage} alt="dana" />
        </button>
      </div>
    </div>
  )
}

export default PaymentOption
