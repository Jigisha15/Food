import React, { useRef, useState } from 'react'

import './Testimonials.css'

const Testimonials = () => {
  // const testimonials = useRef()

  // const handleClick = () => {
  //   console.log(testimonials.current.value, 'initial value')
  //   localStorage.setItem('inputValue', testimonials.current.value)
  // }
  // console.log(localStorage.getItem('inputValue'), '*****')

  const [name, setName] = useState('')
  const [response, setResponse] = useState('')

  function saveClick() {
    var testimonials = JSON.parse(localStorage.getItem('testimonials') || '[]')

    var testimonial = { name: name, response: response }
    testimonials.push(testimonial)
    localStorage.setItem('testimonials', JSON.stringify(testimonials))

    console.log(name, response)
  }

  return (
    <>
      <div className="test-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Add response"
          value={response}
          onChange={(e) => {
            setResponse(e.target.value)
          }}
        />
        <button onClick={saveClick}>Post</button>

        {/* <input ref={testimonials} /> */}
        {/* <button onClick={handleClick}>Post</button> */}
      </div>

      <div className="testimonials-container">
        <h1>Hi from testimonials</h1>
        <div className="test">
          <p className="test-name">name</p>
          <p className="test-text">response</p>
        </div>
      </div>
    </>
  )
}

export default Testimonials
