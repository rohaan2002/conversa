import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from './context/auth.context.jsx'
import { SocketContextProvider } from './context/socket.context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
