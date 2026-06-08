import { useState } from 'react'
import Navbar from './components/Navbar'
// import Home from './components/Home'
import Footer from './components/Footer'
import Cart from './components/Cart'
// import Login from './components/Login'
// import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Cart />
    {/* <Register />
    <Login /> */}
    {/* <Home /> */}
    <Footer />
    </>
  )
}

export default App
