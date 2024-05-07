import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PaymentSuccess() {
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">PaymentSuccess</h1>
      <button onClick={() => navigate('/')}>back to home</button>
    </div>
  )
}

export default PaymentSuccess
