import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/Routes.jsx'
import { RouterProvider } from "react-router-dom"; // Fixed: react-router-dom not react-router/dom
import AuthProvider from './provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast' // Added: Toaster component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" /> {/* Added: Toast notifications */}
    </AuthProvider>
  </StrictMode>,
)