import React from 'react'

import Aamlasarbat from '../../assets/drinks/aamla_sarbat.jpg'
import Aamras from '../../assets/drinks/aamras.jpg'
import Chaas from '../../assets/drinks/chaas.jpg'
import Chai from '../../assets/drinks/chai.jpg'
import Kokamsarbat from '../../assets/drinks/kokam_sarbat.jpg'
import Mangojuice from '../../assets/drinks/mango_juice.jpg'
import Panha from '../../assets/drinks/panha.jpg'
import Piyush from '../../assets/drinks/piyush.jpg'
import Solkadhi from '../../assets/drinks/solkadhi.jpg'

import ItemCard from '../../components/ItemCard/ItemCard'

import './FoodItems.css'

const Drinks = () => {
  const drinks = [
    {
      id: 1,
      image: Aamlasarbat,
      title: 'AAMLA SARBAT',
      desc: 'This is the description of the Aamla Sarbat. This is very tasty!',
    },
    {
      id: 2,
      image: Aamras,
      title: 'AAMRAS',
      desc: 'This is the description of the Aamras. This is very tasty!',
    },
    {
      id: 3,
      image: Chaas,
      title: 'CHAAS',
      desc: 'This is the description of the Chaas. This is very tasty!',
    },
    {
      id: 4,
      image: Chai,
      title: 'CHAI',
      desc: 'This is the description of the Chai. This is very tasty!',
    },
    {
      id: 5,
      image: Kokamsarbat,
      title: 'KOKAM SARBAT',
      desc: 'This is the description of the Kokam Sarbat. This is very tasty!',
    },
    {
      id: 6,
      image: Mangojuice,
      title: 'AAMBA SARBAT',
      desc: 'This is the description of the Mango Sarbat. This is very tasty!',
    },
    {
      id: 7,
      image: Panha,
      title: 'PANHA',
      desc: 'This is the description of the Panha. This is very tasty!',
    },
    {
      id: 8,
      image: Piyush,
      title: 'PIYUSH',
      desc: 'This is the description of the Piyush. This is very tasty!',
    },
    {
      id: 9,
      image: Solkadhi,
      title: 'SOLKADHI',
      desc: 'This is the description of the Solkadhi. This is very tasty!',
    },
  ]

  return (
    <div className="fooditem">
      {drinks.map((item) => (
        <div
          className="fooditem-container"
          key={item.id}
        >
          <ItemCard
            image={item.image}
            title={item.title}
            desc={item.desc}
          />
        </div>
      ))}
    </div>
  )
}

export default Drinks
