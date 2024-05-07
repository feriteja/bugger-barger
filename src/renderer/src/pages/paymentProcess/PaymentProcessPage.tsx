import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { useLocation, useNavigate } from 'react-router-dom'

const PaymentProcessPage = () => {
  const [qrCodeImage, setQRCodeImage] = useState('')

  const navigate = useNavigate()
  const { state } = useLocation()
  const { product, price, methode } = state

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qrCodeDataURL = await QRCode.toDataURL(
          `http://localhost:3000?price=${price}&product=${product}&methode=${methode}`,
          {
            width: 300,
            color: {
              dark: '#000'
            }
          }
        )
        setQRCodeImage(qrCodeDataURL)
      } catch (error) {
        // Handle error if QR code generation fails
        console.error('Error generating QR code:', error)
      }
    }

    // Call the async function
    generateQRCode()
  }, [])

  return (
    <main>
      <header className="flex items-center space-x-4 bg-red-500 px-2 py-4">
        <button onClick={() => navigate('/')} className="text-white font-bold text-xl">
          back
        </button>
        <h1 className="text-white font-bold text-3xl">Bugger Barger</h1>
      </header>
      <h2>QR Code Generator</h2>

      {qrCodeImage && (
        <div>
          <h3>QR Code Preview</h3>
          <img src={qrCodeImage} alt="QR Code" />
        </div>
      )}
    </main>
  )
}

export default PaymentProcessPage
