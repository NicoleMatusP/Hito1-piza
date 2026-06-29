import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({img, name, price, ingredients}) => {

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="card h-100 w-100">
  <img src={img} className="card-img-top" alt={name} style={{
    height: "250px",
    objectFit: "cover",
  }}/>
  <div className="card-body">
    <h6 className="card-title">{name}</h6>
    <div className='div-ingredientes' style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderTop: "solid 1px #d7d7d7",
      borderBottom: "solid 1px #d7d7d7",
    }}>
      <p style={{
        margin:"16px 0 12px 0",
      }}>Ingredientes</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{
            fontSize: "14px",
          }}>{ingredient}</li>
        ))}
      </ul>
    </div>
    <div className='div-inferior' style={{
      display:"flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h5 style={{
        margin:"16px 0"
      }}>Precio : ${price.toLocaleString('es-CL')}</h5>
    <div className="div-buttons" style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    }}>
      <Link to="/Pizza" className="btn btn-outline-primary btn-sm" type="submit"
      style={{
          border: "1px solid #000",
          color: "#000",
          background: "white",
      }}>
        Ver más 👀</Link>
      <button className="btn btn-outline-primary btn-sm" type="submit" style={{
        background: "#000000",
        border: "1px solid #000",
        color: "#ffffff"
      }}
      onClick={() => addToCart({ img, name, price, ingredients })}
      >Añadir 🛒</button>
    </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default CardPizza