import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import Signup from './component/Signup'
import DDL from './component/Ddl/DDL'
import Dd from './component/Ddl/Dd'
import Side from './component/Ddl/Side'
import Dm from './component/Dml/Dm'
import HeroSection from './component/HeroSection'
import { dbmscontext } from './context/dbmscontext'
import { useContext } from 'react'

function App() {
  const { isLoggedIn } = useContext(dbmscontext);

  return (
    <BrowserRouter>
      
      {/* <HeroSection /> */}
     
     
      
      {/* Use a conditional operator to render different components based on the login state */}
      {isLoggedIn ? (
        <Routes>
          <Route path='/' element={<HeroSection />} />
      
        </Routes>
      ) : (
        <Routes>
        <Route path='/' element={<Login />} />

          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      )}

      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
