import React from 'react'
import { useState, useEffect } from 'react'

export default function Pizza() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas/p001')
                const data = await response.json()
                setPizzas(data)
            } catch (error) {
                console.error("Error cargando las pizzas:", error)
            }
        }
        fetchPizzas()
    }, [])

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
        <div style={{width: '300px', height: '300px', overflow: 'hidden'}}>
            <img src={pizzas.img} alt={pizzas.name}/>
        </div>

        <h3>{pizzas.name}</h3>
        <p style={{ fontSize: '16px' }}>{pizzas.desc}</p>
        <ul>
            {pizzas.ingredients && pizzas.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Precio: ${pizzas.price}</p>
    </div>
  )
}