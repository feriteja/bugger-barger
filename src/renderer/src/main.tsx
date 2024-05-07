import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import PaymentPage from './pages/payment/PaymentPage'
import PaymentProcessPage from './pages/paymentProcess/PaymentProcessPage'
import PaymentSuccess from './pages/paymentSuccess/PaymentSuccess'

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'payment',
    element: <PaymentPage />
  },
  {
    path: 'paymentProcess',
    element: <PaymentProcessPage />
  },
  {
    path: 'paymentSuccess',
    element: <PaymentSuccess />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
