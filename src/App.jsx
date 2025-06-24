import React from 'react'
import Layer1 from './pages/Layer1'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Services from './pages/Services'




const App = () => {
  return (
    <div>
      
      <Navbar />
     <Routes>
      <Route path='/' element={<Layer1 />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
     </Routes>

    </div>
  )
}

export default App