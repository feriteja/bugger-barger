import Header from '@renderer/components/Header'
import { generateRandomString } from '@renderer/utils/randomString'
import QRCode from 'qrcode'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'

const PaymentProcessPage = () => {
  const [qrCodeImage, setQRCodeImage] = useState('')

  const navigate = useNavigate()
  const { state } = useLocation()
  const { product, amount, methode, currency } = state
  const orderId = generateRandomString(7)

  console.log({ state })

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qrCodeDataURL = await QRCode.toDataURL(
          `https://hollow-cathleen-synfs-4dc74ccc.koyeb.app/webhook?amount=${encodeURIComponent(amount)}&product=${encodeURIComponent(product)}&methode=${encodeURIComponent(methode)}&currency=${encodeURIComponent(currency)}&orderId=${orderId}`,
          {
            width: 300,
            color: {
              dark: '#000'
            }
          }
        )
        setQRCodeImage(qrCodeDataURL)
      } catch (error) {
        console.error('Error generating QR code:', error)
        // Optionally, set an error state here for UI feedback
      }
    }

    generateQRCode()
  }, [])

  useEffect(() => {
    const socket = io('https://hollow-cathleen-synfs-4dc74ccc.koyeb.app') // Replace with your server URL

    socket.on('connect', () => {
      console.log('Connected to server')
      socket.emit('join', orderId, (response) => {
        console.log({ response })
      })
    })

    socket.on('webhook', () => {
      return navigate('/paymentSuccess')
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col">
      <Header navigate="/payment" state={{ product }} />

      <div className="flex-1 flex flex-col justify-center items-center">
        {qrCodeImage && <img src={qrCodeImage} alt="QR Code" />}
        <h2 className="font-semibold text-lg">
          {methode} - Rp{amount}
        </h2>
      </div>
    </main>
  )
}

export default PaymentProcessPage
