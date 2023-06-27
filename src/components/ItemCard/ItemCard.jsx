import React, { useState } from 'react'

import './ItemCard.css'

const ItemCard = ({ image, title, desc }) => {
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
        <button className="itemcard-btn">Add item</button>
      </div>
    </div>
  )
}

export default ItemCard
