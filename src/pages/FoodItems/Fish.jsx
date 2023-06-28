import React from 'react'

import Bangdakalwan from '../../assets/seafood/bangda_kalwan.jpg'
import Crabkalwan from '../../assets/seafood/crab_kalwan.jpg'
import Fishcutlet from '../../assets/seafood/fish_cutlet.jpg'
import Kolambikalwan from '../../assets/seafood/kolambi_kalwan.jpg'
import Pomfretfry from '../../assets/seafood/pomfret_fry.jpg'
import Prawnsbhaat from '../../assets/seafood/prawns_bhaat.jpg'
import Surmaifry from '../../assets/seafood/surmai_fry.jpg'
import Surmaikalwan from '../../assets/seafood/surmai_kalwan.jpg'

import ItemCard from '../../components/ItemCard/ItemCard'

import './FoodItems.css'

const Fish = () => {
  const fish = [
    {
      id: 1,
      image: Bangdakalwan,
      title: 'BANGDA KALWAN',
      desc: 'This is the description for Bangda Kalwan. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 2,
      image: Crabkalwan,
      title: 'KHEKDA KALWAN',
      desc: 'This is the description for Khekda Kalwan. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 3,
      image: Fishcutlet,
      title: 'FISH CUTLET',
      desc: 'This is the description for Fish Cutlet. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 4,
      image: Kolambikalwan,
      title: 'KOLAMBI KALWAN',
      desc: 'This is the description for Kolambi Kalwan. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 5,
      image: Pomfretfry,
      title: 'POMFRET FRY',
      desc: 'This is the description for Pomfret Fry. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 6,
      image: Prawnsbhaat,
      title: 'KOLAMBI BHAAT',
      desc: 'This is the description for Kolambi Bhaat. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 7,
      image: Surmaifry,
      title: 'SURMAI FRY',
      desc: 'This is the description for Surmai Fry. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 8,
      image: Surmaikalwan,
      title: 'SURMAI KALWAN',
      desc: 'This is the description for Surmai Kalwan. This is very nice delicacy. Jee bhar ke khao!',
    },
  ]

  return (
    <div className="fooditem">
      {fish.map((item) => (
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

export default Fish
