import React, { useState } from 'react'

import ItemCard from '../../components/ItemCard/ItemCard'

import './MenuDisplay.css'

const MenuDisplay = () => {
  const menu = [
    {
      // image: '../../assets/breads/aamboli.jpg',
      image:
        'https://dipsdiner.com/dd/wp-content/uploads/2020/08/Ras-Ghavan-Recipe.jpg',
      title: 'AAMBOLI',
      desc: 'This is the description of Aamboli. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      image: '../../assets/breads/chapati.jpg',
      title: 'CHAPATI',
      desc: 'This is the description of Aamboli. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      image: '../../assets/breads/ghavan.jpg',
      title: 'GHAVANE',
      desc: 'This is the description of Aamboli. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      image: '../../assets/breads/goad_wade.jpg',
      title: 'GOAD WADE',
      desc: 'This is the description of Aamboli. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      image: '../../assets/breads/nachni_bhakri.jpg',
      title: 'NACHNI BHAKRI',
      desc: 'This is the description of Aamboli. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      image: '../../assets/breads/puri.jpg',
      title: 'PURI',
      desc: 'This is the description of Aamboli. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      image: '../../assets/breads/tandul_bhakri.jpg',
      title: 'TANDUL BHAKRI',
      desc: 'This is the description of Aamboli. This is very nice delicacy. Jee bhar ke khao!',
    },
    {
      image: '../../assets/breads/wade.jpg',
      title: 'WADE',
      desc: 'This is the description of Aamboli. This is very nice delicacy. Jee bhar ke khao!',
    },
  ]

  console.log(menu)
  return (
    <div className="menudisplay">
      {menu.map((item, index) => {
        return (
          <ItemCard
            image={item.image}
            title={item.title}
            desc={item.desc}
          />
        )
      })}
    </div>
  )
}

export default MenuDisplay
