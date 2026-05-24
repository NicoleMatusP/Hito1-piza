import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import Napolitana from '../assets/card-1.webp'
import Española from '../assets/card-2.jpeg'
import Pepperoni from '../assets/card-3.jpeg'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <CardPizza 
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img={Napolitana}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img={Española}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img={Pepperoni}
          />
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Home
