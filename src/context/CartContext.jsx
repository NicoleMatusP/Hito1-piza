import {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const total = cartItems.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);
  
  const addToCart = (item) => {
  const existingItem = cartItems.find((pizza) => pizza.id === item.id);

  if (existingItem) {
    setCartItems(
      cartItems.map((pizza) =>
        pizza.id === item.id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  } else {
    setCartItems([...cartItems, { ...item, count: 1 }]);
  }
};

    const incrementCount = (id) => {
  setCartItems(
    cartItems.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    )
  );
};

    const decrementCount = (id) => {
    const targetPizza = cartItems.find((pizza) => pizza.id === id);

    if (targetPizza.count === 1) {
        setCartItems(cartItems.filter((pizza) => pizza.id !== id));
    } else {
        setCartItems(
        cartItems.map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        );
    }
    };

  return (
    <CartContext.Provider value={{ cartItems, total, addToCart, incrementCount, decrementCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;