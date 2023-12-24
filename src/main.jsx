import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import bistroRouter from './Routers/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Toaster />
        <RouterProvider router={bistroRouter} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
