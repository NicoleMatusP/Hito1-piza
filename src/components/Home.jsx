import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import Napolitana from '../assets/card-1.webp'
import Española from '../assets/card-2.jpeg'
import Pepperoni from '../assets/card-3.jpeg'
import { pizzas } from '../pizzas'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
      <div className="row g-4">
        {pizzas.map((pizza) => (
        <div className="col-12 col-md-6 col-lg-4">
            <CardPizza 
              key={pizza.id}
              name={pizza.name}
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
