import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Login.css'

const Login = () => {
  // this is for localStorage jugaad
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(email, pass)
  }

  // this is for navigate
  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/')
  }

  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN</h1>
      <form
        action=""
        className="login-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter Your Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <button
          className="login-button"
          type="submit"
          onClick={navigateHome}
        >
          Login
        </button>
        <br />
        <button className="login-register">
          Don't have an Account?
          <Link
            to={'/register'}
            className="login-span"
          >
            Register Here
          </Link>
        </button>
      </form>
    </div>
  )
}

export default Login
