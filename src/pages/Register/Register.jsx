import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Register.css'

const Register = () => {
  // this is for localStorage Jugaad

  // const [email, setEmail] = useState('')
  // const [pass, setPass] = useState('')
  // const [name, setName] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(name, email, pass)
  // }

  // // this is to navigate
  // const navigate = useNavigate()
  // const navigateLogin = () => {
  //   navigate('/login')
  // }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePass = (e) => {
    setPass(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()

    console.log(name)
    console.log(email)
    console.log(pass)

    setName('')
    setEmail('')
    setPass('')
  }

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form
        action=""
        className="register-form"
        onSubmit={handleClick}
      >
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={handleName}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email ID"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={handlePass}
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
          // onClick={navigateLogin}
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
