import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Footer from './components/Footer'
import Pizza from './views/Pizza'
import Cart from './views/Cart'
import Login from './views/Login'
import Register from './views/Register'
import NotFound from './components/NotFound'
import Profile from './views/Profile'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza" element={<Pizza />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
