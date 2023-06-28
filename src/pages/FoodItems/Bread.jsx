import React from 'react'

import ItemCard from '../../components/ItemCard/ItemCard'

import Aamboli from '../../assets/breads/aamboli.jpg'
import Chapati from '../../assets/breads/chapati.jpg'
import Ghavan from '../../assets/breads/ghavan.jpg'
import Goadwade from '../../assets/breads/goad_wade.jpg'
import Nachnibhakri from '../../assets/breads/nachni_bhakri.jpg'
import Puri from '../../assets/breads/puri.jpg'
import Tandulbhakri from '../../assets/breads/tandul_bhakri.jpg'
import Wade from '../../assets/breads/wade.jpg'

import './FoodItems.css'

const Bread = () => {
  const bread = [
    {
      id: 1,
      image: Aamboli,
      title: 'AAMBOLI',
      desc: 'This is the description of Aamboli. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 2,
      image: Chapati,
      title: 'CHAPATI',
      desc: 'This is the description of Chapati. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 3,
      image: Ghavan,
      title: 'GHAVAN',
      desc: 'This is the description of Ghavan. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 4,
      image: Goadwade,
      title: 'GOAD WADE',
      desc: 'This is the description of Goad Wade. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 5,
      image: Nachnibhakri,
      title: 'NACHNI BHAKRI',
      desc: 'This is the description of Nachnibhakri. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 6,
      image: Puri,
      title: 'PURI',
      desc: 'This is the description of Puri. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 7,
      image: Tandulbhakri,
      title: 'TANDUL BHAKRI',
      desc: 'This is the description of Tandulbhakri. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      id: 8,
      image: Wade,
      title: 'WADE',
      desc: 'This is the description of Wade. This is very nice delicacy. Jee bhar ke khao!',
    },
  ]

  return (
    <div className="fooditem">
      {bread.map((item) => (
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

export default Bread
