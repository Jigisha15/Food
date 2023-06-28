import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { BsFillSuitHeartFill } from 'react-icons/bs'

import './Card.css'

const Card = ({ image, title, desc, to }) => {
  const [like, setLike] = useState(false)
  const handleClick = () => {
    setLike(!like)
  }
  return (
    <div className="card-container">
      {/* <div className="card-image"></div> */}
      <img
        src={image}
        alt=""
        className="card-image"
      />
      <div className="card-text">
        <h1 className="card-title">
          <b> {title} </b>
        </h1>
        <p className="card-p"> {desc}</p>
        <span className="card-span">
          <NavLink
            className="card-btn"
            to={to}
          >
            Explore
          </NavLink>
          <button className="card-heart">
            <BsFillSuitHeartFill
              size={18}
              onClick={handleClick}
              color={like ? 'darkgreen' : 'black'}
            />
          </button>
        </span>
      </div>
    </div>
  )
}

export default Card
