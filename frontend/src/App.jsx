import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp.jsx'
import Home from './pages/home/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Toaster from 'react-hot-toast';
import './App.css'
import { useAuthContext } from './context/auth.context.jsx'

function App() {
  const {authUser} = useAuthContext();
  const [count, setCount] = useState(0)

  return (
    <>
    
   {/* <div><Toaster/></div> */}
    <div className='flex flex-row justify-center items-center p-4 h-screen gap-4'>
    <Routes>
      <Route path='/' element={authUser?<Home/>: <Navigate to='/login'/> }/>

      <Route path='/login'element={authUser? <Navigate to='/'/>: <Login/>}/>
      
      <Route path='/signup' element={authUser? <Navigate to='/'/>: <SignUp/>}/>
    </Routes>

    {/* <Login/> */}
    {/* <SignUp/>  */}
    {/* <Home/> */}
  </div>
    </>
  
  )
}

export default App
