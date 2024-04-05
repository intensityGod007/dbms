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


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
    <Navbar/>


  <div className='flex flex-row gap-1 justify-between'>
  
  <div className='ms-4'>
  <Side/>
  </div>
  <div className='ms-8'>
   <Dd/>
   </div>

</div>
<createtable/>
<DDL/>
    <Routes>
     
<Route path='/Login' element={<Login/>}/>
<Route path='/Signup'  element={<Signup/>}/>
<Route path='/ddl' element={<Dd/>}/>
{/* <Route path='/dml' element={<} */}
{/* <Route path='/create' element={<Createtable/>}/> */}

</Routes>
{/* <Footer/> */}

  </BrowserRouter>
  )
}

export default App
