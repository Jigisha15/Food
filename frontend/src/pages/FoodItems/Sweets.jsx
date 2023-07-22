import React from 'react'

import Aambawadi from '../../assets/sweets/amba_wadi.jpg'
import Kheer from '../../assets/sweets/kheer.jpg'
import Naralwadi from '../../assets/sweets/naral_wadi.jpg'
import Nevri from '../../assets/sweets/nevri.jpg'
import Puranpoli from '../../assets/sweets/puranpoli.jpg'
import Sheera from '../../assets/sweets/sheera.jpg'
import Shrikhand from '../../assets/sweets/shrikhand.jpg'
import Modak from '../../assets/sweets/ukdiche_modak.jpg'

import ItemCard from '../../components/ItemCard/ItemCard'

import './FoodItems.css'

const Sweets = () => {
  const sweets = [
    {
      id: 1,
      image: Aambawadi,
      title: 'AAMBA WADI',
      desc: 'This is the description for Aamba Wadi. This is a very amazing delicacy!',
    },
    {
      id: 2,
      image: Kheer,
      title: 'KHEER',
      desc: 'This is the description for Kheer. This is a very amazing delicacy!',
    },
    {
      id: 3,
      image: Naralwadi,
      title: 'NARAL WADI',
      desc: 'This is the description for Naral Wadi. This is a very amazing delicacy!',
    },
    {
      id: 4,
      image: Nevri,
      title: 'NEVRI',
      desc: 'This is the description for Nevri. This is a very amazing delicacy!',
    },
    {
      id: 5,
      image: Puranpoli,
      title: 'PURANPOLI',
      desc: 'This is the description for Puranpoli. This is a very amazing delicacy!',
    },
    {
      id: 6,
      image: Sheera,
      title: 'SHEERA',
      desc: 'This is the description for Sheera. This is a very amazing delicacy!',
    },
    {
      id: 7,
      image: Shrikhand,
      title: 'SHRIKHAND',
      desc: 'This is the description for Shrikhand. This is a very amazing delicacy!',
    },
    {
      id: 8,
      image: Modak,
      title: 'UKDICHE MODAK',
      desc: 'This is the description for Modak. This is a very amazing delicacy!',
    },
  ]

  return (
    <div className="fooditem">
      {sweets.map((item) => (
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

export default Sweets
