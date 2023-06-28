import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="nav-ul">
        <li>
          <NavLink
            className="nav-li"
            to={'/'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/menu'}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/cart'}
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/login'}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/about'}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/testimonials'}
          >
            Testimonials
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
