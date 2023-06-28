import React from 'react'

import Batatawada from '../../assets/nashta/batata_wada.jpg'
import Kandabhajji from '../../assets/nashta/kanda_bhajji.jpg'
import Misalpav from '../../assets/nashta/misal_pav.jpg'
import Pohe from '../../assets/nashta/pohe.jpg'
import Sabudanakichdi from '../../assets/nashta/sabudana_khichdi.jpg'
import Sabudanawada from '../../assets/nashta/sabudana_wada.jpg'
import Thalipeeth from '../../assets/nashta/thalipeeth.jpg'
import Upma from '../../assets/nashta/upma.jpg'

import ItemCard from '../../components/ItemCard/ItemCard'

import './FoodItems.css'

const Nashta = () => {
  const nashta = [
    {
      id: 1,
      image: Batatawada,
      title: 'BATATA WADA',
      desc: 'This is the description of Batata Wada. This is very tasty!',
    },
    {
      id: 2,
      image: Kandabhajji,
      title: 'KANDA BHAJJI',
      desc: 'This is the description of Kanda Bhajji. This is very tasty!',
    },
    {
      id: 3,
      image: Misalpav,
      title: 'MISAL PAV',
      desc: 'This is the description of Misal Pav. This is very tasty!',
    },
    {
      id: 4,
      image: Pohe,
      title: 'POHE',
      desc: 'This is the description of Pohe. This is very tasty!',
    },
    {
      id: 5,
      image: Sabudanakichdi,
      title: 'SABUDANA KHICHADI',
      desc: 'This is the description of Sabudana Khichadi. This is very tasty!',
    },
    {
      id: 6,
      image: Sabudanawada,
      title: 'SABUDANA WADA',
      desc: 'This is the description of Sabudana Wada.This is very tasty!"}',
    },
    {
      id: 7,
      image: Thalipeeth,
      title: 'THALIPEETH',
      desc: 'This is the description of Thalipeeth. This is very tasty!',
    },
    {
      id: 8,
      image: Upma,
      title: 'UPMA',
      desc: 'This is the description of Upma. This is very tasty!',
    },
  ]

  return (
    <div className="fooditem">
      {nashta.map((item) => (
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

export default Nashta
