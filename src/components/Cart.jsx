import React, { useState } from 'react'
import { pizzaCart } from '../pizzas'

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart)

  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
    0
  )

  const handleIncrease = (id) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 }
      }

      return pizza
    })

    setCart(updatedCart)
  }

  const handleDecrease = (id) => {
    const updatedCart = cart
      .map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count - 1 }
        }

        return pizza
      })
      .filter((pizza) => pizza.count > 0)

    setCart(updatedCart)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '40px',
      }}
    >
      <h5>Detalles del pedido:</h5>

      <ul style={{ padding: 0 }}>
        {cart.map((pizza) => (
          <li
            key={pizza.id}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '500px',
              justifyContent: 'space-between',
              listStyle: 'none',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={pizza.img}
                alt={pizza.name}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                }}
              />
              <p style={{ margin: 0 }}>{pizza.name}</p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <p style={{ margin: 0 }}>
                ${pizza.price.toLocaleString('es-CL')}
              </p>

              <button onClick={() => handleDecrease(pizza.id)}>-</button>

              <p style={{ margin: 0 }}>{pizza.count}</p>

              <button onClick={() => handleIncrease(pizza.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>

      <h5>Total: ${totalPrice.toLocaleString('es-CL')}</h5>

      <button>Pagar</button>
    </div>
  )
}