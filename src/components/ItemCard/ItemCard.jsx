import React, { useState } from 'react'

import './ItemCard.css'

const ItemCard = ({ image, title, desc, id }) => {
  const [cart, setCart] = useState([])

  const handleCart = (e) => {
    console.log(e.target.value)
    // alert('clicked')
  }

  return (
    <div className="itemcard-container">
      <img
        src={image}
        alt=""
        className="itemcard-image"
      />
      <div className="itemcard-text">
        <h1 className="itemcard-title">{title}</h1>
        <p className="itemcard-desc">{desc}</p>
        <button
          className="itemcard-btn"
          onClick={handleCart}
          value={'clicked'}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ItemCard
