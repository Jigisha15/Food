import React from 'react'

import bhaji from '../../assets/icons/bhaji_icon.jpg'
import bread from '../../assets/icons/bread_icon.webp'
import chicken from '../../assets/icons/chicken_icon.jpg'
import drinks from '../../assets/icons/drinks_icon.webp'
import fish from '../../assets/icons/fish_icon.jpg'
import mutton from '../../assets/icons/mutton_icon.webp'
import nashta from '../../assets/icons/nashta_icon.jpg'
import sweets from '../../assets/icons/sweets_icon.jpg'
import thali from '../../assets/icons/thali_icon.jpg'

import Card from '../../components/Card/Card'

import './Menu.css'

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      image: bhaji,
    },
    {
      id: 2,
      image: bread,
    },
    {
      id: 3,
      image: chicken,
    },
    {
      id: 4,
      image: drinks,
    },
    {
      id: 5,
      image: fish,
    },
    {
      id: 6,
      image: mutton,
    },
    {
      id: 7,
      image: nashta,
    },
    {
      id: 8,
      image: sweets,
    },
    {
      id: 9,
      image: thali,
    },
  ]

  console.log(menuItems)

  // return (
  //   {
  //     menuItems.map((item) => {
  //       return (
  //         <div className="menu-container">
  //         </div>
  //     )
  //       })}
  // )

  // return (
  //   <>
  //     <h1 className="menu-h1">This is our menu!</h1>
  //     <div className="menu-container">
  //       <Card
  //         image={bhaji}
  //         title={'BHAJI'}
  //         desc={'This is the description of my menu'}
  //         to={'/bhaji'}
  //       />
  //       <Card
  //         image={bread}
  //         title={'BREAD'}
  //         desc={'This is the description of my menu'}
  //         to={'/breads'}
  //       />
  //       <Card
  //         image={chicken}
  //         title={'CHICKEN'}
  //         desc={'This is the description of my menu'}
  //         to={'/chicken'}
  //       />
  //       <Card
  //         image={drinks}
  //         title={'DRINKS'}
  //         desc={'This is the description of my menu'}
  //         to={'/drinks'}
  //       />
  //       <Card
  //         image={fish}
  //         title={'FISH'}
  //         desc={'This is the description of my menu'}
  //         to={'/seafood'}
  //       />
  //       <Card
  //         image={mutton}
  //         title={'MUTTON'}
  //         desc={'This is the description of my menu'}
  //         to={'/mutton'}
  //       />
  //       <Card
  //         image={nashta}
  //         title={'NASHTA'}
  //         desc={'This is the description of my menu'}
  //         to={'/nashta'}
  //       />
  //       <Card
  //         image={sweets}
  //         title={'SWEETS'}
  //         desc={'This is the description of my menu'}
  //         to={'/sweets'}
  //       />
  //       <Card
  //         image={thali}
  //         title={'THALI'}
  //         desc={'This is the description of my menu'}
  //         to={'/thali'}
  //       />
  //     </div>
  //   </>
  // )
}

export default Menu
