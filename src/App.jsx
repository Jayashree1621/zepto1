import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './router/All'
import Cafe from './router/Cafe' 
import Home from './router/Home'
import Toys from './router/Toys'
import Fresh from './router/Fresh'
import Electronics from './router/Electronics'
import Mobiles from './router/Mobiles'
import Beauty from './router/Beauty'
import Fashion from './router/Fashion'
import './global.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/cafe' element={<Cafe />} />
        <Route path='/home' element={<Home />} />
        <Route path='/toys' element={<Toys />} />
        <Route path='/fresh' element={<Fresh />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/mobiles' element={<Mobiles />} />
        <Route path='/beauty' element={<Beauty />} />
        <Route path='/fashion' element={<Fashion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


