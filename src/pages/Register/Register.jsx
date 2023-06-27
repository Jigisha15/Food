import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Register.css'

const Register = () => {
  // this is for localStorage Jugaad

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, pass)
  }

  // this is to navigate
  const navigate = useNavigate()
  const navigateLogin = () => {
    navigate('/login')
  }

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form
        action=""
        className="register-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <label htmlFor="confirm-password">Confirm Password</label>
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
        />
        <br />
        <button
          className="register-button"
          type="submit"
          onClick={navigateLogin}
        >
          Register
        </button>
        <br />
        <button className="register-login">
          Already a User?
          <Link
            to={'/login'}
            className="register-span"
          >
            Login
          </Link>
        </button>
      </form>
    </div>
  )
}

export default Register
