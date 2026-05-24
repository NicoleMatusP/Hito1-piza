import React from 'react'
import headerImg from '../assets/Header.jpg'

const Header = () => {
  return (
    <>
    <div style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "200px",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h2>¡Pizería Mamma Mía!</h2>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </div>
    </>
  )
}

export default Header
