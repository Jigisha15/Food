import React from 'react'

import ItemCard from '../../components/ItemCard/ItemCard'

import Aluwadi from '../../assets/veg/alu_wadi.jpg'
import Batata from '../../assets/veg/batatyachi_bhaki.jpg'
import Bharlelawangi from '../../assets/veg/bharleli_wangi.jpg'
import Kaaju from '../../assets/veg/kaaju_bhaji.jpg'
import Kothimbirwadi from '../../assets/veg/kothimbir_wadi.jpg'
import Usal from '../../assets/veg/usal.jpg'
import Varanbhaat from '../../assets/veg/varan_bhaat.jpg'

import './FoodItems.css'

const Bhaji = () => {
  const bhaji = [
    {
      id: 1,
      image: Aluwadi,
      title: 'ALU WADI',
      desc: 'This is Alu Wadi chi description. This is a very nice bhaji',
    },
    {
      id: 2,
      image: Batata,
      title: 'BATATYA CHI BHAJI',
      desc: 'This is Alu Wadi chi description. This is a very nice bhaji',
    },
    {
      id: 3,
      image: Bharlelawangi,
      title: 'BHARLELI WANGI',
      desc: 'This is Alu Wadi chi description. This is a very nice bhaji',
    },
    {
      id: 4,
      image: Kaaju,
      title: 'KAAJU BHAJI',
      desc: 'This is Alu Wadi chi description. This is a very nice bhaji',
    },
    {
      id: 5,
      image: Kothimbirwadi,
      title: 'KOTHIMBIR WADI',
      desc: 'This is Alu Wadi chi description. This is a very nice bhaji',
    },
    {
      id: 6,
      image: Usal,
      title: 'USAL',
      desc: 'This is Alu Wadi chi description. This is a very nice bhaji',
    },
    {
      id: 7,
      image: Varanbhaat,
      title: 'VARAN BHAAT',
      desc: 'This is Alu Wadi chi description. This is a very nice bhaji',
    },
  ]

  // console.log(bhaji)

  return (
    <div className="fooditem">
      {bhaji.map((item) => (
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

export default Bhaji
