import React from 'react'

import Chickenthali from '../../assets/thali/chiken_thali.jpg'
import Crabthali from '../../assets/thali/crab_thali.jpg'
import Muttonthali from '../../assets/thali/mutton_thali.jpg'
import Pomfretthali from '../../assets/thali/pomfret_thali.jpg'
import Prawnsthali from '../../assets/thali/prawns_thali.jpg'
import Vegthali from '../../assets/thali/veg_thali.jpg'

import ItemCard from '../../components/ItemCard/ItemCard'

import './FoodItems.css'

const Thali = () => {
  const thali = [
    {
      id: 1,
      image: Chickenthali,
      title: 'CHICKEN THALI',
      desc: 'This is the description for Chicken Thali. This is jaam bhaari! Do try!',
    },
    {
      id: 2,
      image: Crabthali,
      title: 'CRAB THALI',
      desc: 'This is the description for Crab Thali. This is jaam bhaari! Do try!',
    },
    {
      id: 3,
      image: Muttonthali,
      title: 'MUTTON THALI',
      desc: 'This is the description for Mutton Thali. This is jaam bhaari! Do try!',
    },
    {
      id: 4,
      image: Pomfretthali,
      title: 'POMFRET THALI',
      desc: 'This is the description for Pomfret Thali. This is jaam bhaari! Do try!',
    },
    {
      id: 5,
      image: Prawnsthali,
      title: 'PRAWNS THALI',
      desc: 'This is the description for Prawns Thali. This is jaam bhaari! Do try!',
    },
    {
      id: 6,
      image: Vegthali,
      title: 'VEG THALI',
      desc: 'This is the description for Veg Thali. This is jaam bhaari! Do try!',
    },
  ]

  return (
    <div className="fooditem">
      {thali.map((item) => (
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

export default Thali
