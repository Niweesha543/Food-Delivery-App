import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route } from 'react-router'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart  />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        
        </Routes>    
        </div>
  )
}

export default App
