import React from 'react'

import Chickenfry from '../../assets/chicken/chicken_fry.jpg'
import Chickengravy from '../../assets/chicken/chicken_gravy.jpg'
import Chickenkadai from '../../assets/chicken/chicken_kadai.jpg'
import Chickensukka from '../../assets/chicken/chicken_sukka.jpg'
import Chulivarchachicken from '../../assets/chicken/chulivarcha_chicken.jpg'

import ItemCard from '../../components/ItemCard/ItemCard'

import './FoodItems.css'

const Chicken = () => {
  const chicken = [
    {
      id: 1,
      image: Chickenfry,
      title: 'CHICKEN FRY',
      desc: 'This is the description of Chicken. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 2,
      image: Chickengravy,
      title: 'CHICKEN GRAVY',
      desc: 'This is the description of Chicken Gravy. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 3,
      image: Chickenkadai,
      title: 'CHICKEN KADAI',
      desc: 'This is the description of Chicken Kadai. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 4,
      image: Chickensukka,
      title: 'CHICKEN SUKKA',
      desc: 'This is the description of Chicken Sukka. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 5,
      image: Chulivarchachicken,
      title: 'CHULIVARCHA CHICKEN',
      desc: 'This is the description of Chulivarchs Chicken. This is very nice delicacy. Jee bhar ke khao!',
    },
  ]
  return (
    <div className="fooditem">
      {chicken.map((item) => (
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

export default Chicken
