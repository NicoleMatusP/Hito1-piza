import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Register />
    <Login />
    {/* <Home /> */}
    <Footer />
    </>
  )
}

export default App
