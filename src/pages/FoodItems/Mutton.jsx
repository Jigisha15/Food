import React from 'react'

import Chulivarchamutton from '../../assets/mutton/chulivarcha_mutton.png'
import Muttonsukka from '../../assets/mutton/mutton _sukka.jpg'
import Muttongravy from '../../assets/mutton/mutton_gravy.jpg'
import Muttonkadai from '../../assets/mutton/mutton_kadai.jpg'
import Muttonrassa from '../../assets/mutton/mutton_rassa.jpg'

import ItemCard from '../../components/ItemCard/ItemCard'

import './FoodItems.css'

const Mutton = () => {
  const mutton = [
    {
      id: 1,
      image: Chulivarchamutton,
      title: 'CHULIVARCHA MUTTON',
      desc: 'This is the description of Chulivarcha Mutton. This is very tasty delicacy.',
    },
    {
      id: 2,
      image: Muttonsukka,
      title: 'MUTTON SUKKA',
      desc: 'This is the description of Mutton Sukka. This is very tasty delicacy.',
    },
    {
      id: 3,
      image: Muttongravy,
      title: 'MUTTON GRAVY',
      desc: 'This is the description of Mutton Gravy. This is very tasty delicacy.',
    },
    {
      id: 4,
      image: Muttonkadai,
      title: 'MUTTON KADAI',
      desc: 'This is the description of Mutton Kadai. This is very tasty delicacy.',
    },
    {
      id: 5,
      image: Muttonrassa,
      title: 'MUTTON RASSA',
      desc: 'This is the description of Mutton Rassa. This is very tasty delicacy.',
    },
  ]

  return (
    <div className="fooditem">
      {mutton.map((item) => (
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

export default Mutton
