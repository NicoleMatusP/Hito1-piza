import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { useState, useEffect } from 'react'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas')
        const data = await response.json()
        setPizzas(data)
      } catch (error) {
        console.error("Error cargando las pizzas:", error)
      }
    }

    fetchPizzas()
  }, [])

  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
              <CardPizza 
                name={pizza.name}
                description={pizza.desc}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home