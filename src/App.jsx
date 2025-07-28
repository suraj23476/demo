import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import About from './Component/About'
import Order from './Pages/Order'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </>
  )
}

export default App