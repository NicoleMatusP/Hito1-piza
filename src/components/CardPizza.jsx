import React from 'react'

const CardPizza = (props) => {
  return (
    <>
      <div className="card h-100 w-100">
  <img src={props.img} className="card-img-top" alt={props.name} style={{
    height: "250px",
    objectFit: "cover",
  }}/>
  <div className="card-body">
    <h6 className="card-title">{props.name}</h6>
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
      <p style={{
        textAlign: "center",
      }}>{props.ingredients.join(", ")}</p>
    </div>
    <div className='div-inferior' style={{
      display:"flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h5 style={{
        margin:"16px 0"
      }}>Precio : ${props.price.toLocaleString('es-CL')}</h5>
    <div className="div-buttons" style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    }}>
      <button className="btn btn-outline-primary btn-sm" type="submit"
      style={{
          border: "1px solid #000",
          color: "#000",
          background: "white",
      }}>
        Ver más 👀</button>
      <button className="btn btn-outline-primary btn-sm" type="submit" style={{
        background: "#000000",
        border: "1px solid #000",
        color: "#ffffff"
      }}>Añadir 🛒</button>
    </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default CardPizza
