import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, incrementCount, decrementCount, total } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="container text-center my-5 p-5 border rounded shadow-sm bg-light">
        <h2 className="mb-3">Tu carrito está vacío 🍕🛒</h2>
        <p className="text-muted">¡Date un gusto! Ve al menú principal y añade tus pizzas favoritas.</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 font-weight-bold">Detalles del pedido:</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-8 bg-white p-4 border rounded shadow-sm">
          
          {cartItems.map((pizza) => (
            <div 
              key={pizza.id} 
              className="d-flex align-items-center justify-content-between p-3 mb-3 border-bottom"
            >
              <div className="d-flex align-items-center" style={{ gap: "15px" }}>
                <img 
                  src={pizza.img} 
                  alt={pizza.name} 
                  style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }} 
                />
                <h5 className="text-capitalize mb-0 font-weight-bold">{pizza.name}</h5>
              </div>
              <div className="d-flex align-items-center" style={{ gap: "20px" }}>
                <span className="text-success font-weight-bold">
                  ${(pizza.price * pizza.count).toLocaleString()}
                </span>
                
                <div className="d-flex align-items-center border rounded">
                  <button 
                    className="btn btn-outline-danger btn-sm border-0 px-3" 
                    onClick={() => decrementCount(pizza.id)}
                  >
                    -
                  </button>
                  
                  <span className="px-3 font-weight-bold">{pizza.count}</span>
                  
                  <button 
                    className="btn btn-outline-primary btn-sm border-0 px-3" 
                    onClick={() => incrementCount(pizza.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
            <h3 className="font-weight-bold mb-0">
              Total: <span className="text-dark">${total.toLocaleString()}</span>
            </h3>
            <button className="btn btn-dark btn-lg px-4 font-weight-bold shadow-sm">
              Ir a Pagar 💳
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;