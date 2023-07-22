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
      title: 'Bhaji',
      desc: 'This is the description of this menu item.',
      to: '/bhaji',
    },
    {
      id: 2,
      image: bread,
      title: 'Bread',
      desc: 'This is the description of this menu item.',
      to: '/bread',
    },
    {
      id: 3,
      image: chicken,
      title: 'Chicken',
      desc: 'This is the description of this menu item.',
      to: '/chicken',
    },
    {
      id: 4,
      image: drinks,
      title: 'Drinks',
      desc: 'This is the description of this menu item.',
      to: '/drinks',
    },
    {
      id: 5,
      image: fish,
      title: 'Fish',
      desc: 'This is the description of this menu item.',
      to: '/fish',
    },
    {
      id: 6,
      image: mutton,
      title: 'Mutton',
      desc: 'This is the description of this menu item.',
      to: '/mutton',
    },
    {
      id: 7,
      image: nashta,
      title: 'Nashta',
      desc: 'This is the description of this menu item.',
      to: '/nashta',
    },
    {
      id: 8,
      image: sweets,
      title: 'Sweets',
      desc: 'This is the description of this menu item.',
      to: '/sweets',
    },
    {
      id: 9,
      image: thali,
      title: 'Thali',
      desc: 'This is the description of this menu item.',
      to: '/thali',
    },
  ]

  return (
    <div className="menu">
      <div className="menu-h1">This is our Menu!</div>
      {menuItems.map((item) => (
        <div
          className="menu-container"
          key={item.id}
        >
          <Card
            image={item.image}
            title={item.title}
            desc={item.desc}
            to={item.to}
          />
        </div>
      ))}
    </div>
  )
}

export default Menu
