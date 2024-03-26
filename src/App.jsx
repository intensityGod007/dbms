import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import Signup from './component/Signup'
import Createtable from './component/Ddl/Createtable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
    <Navbar/>
   
    <Routes>
     
<Route path='/Login' element={<Login/>}/>
<Route path='/Signup'  element={<Signup/>}/>
{/* <Route path='/create' element={<Createtable/>}/> */}

</Routes>
{/* <Footer/> */}

  </BrowserRouter>
  )
}

export default App
