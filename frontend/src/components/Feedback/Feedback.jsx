import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './Feedback.css'

const Feedback = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ien3edf',
        'template_tqhsfqu',
        form.current,
        'ZFF2ensoiVlBKbQoc'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    // console.log('Email sent')
    e.target.reset()
  }

  return (
    <div className="feedback">
      <h1>We would love to get a feedback from you</h1>

      <div className="f-form">
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
        >
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Contact</label>
            <input
              type="tel"
              name="phone"
            />
          </div>

          <div className="input-group">
            <label htmlFor="feedback">Feedback</label>
            <input
              type="text"
              name="feedback"
            />
          </div>

          <input
            className="input-btn"
            type="submit"
            placeholder="Send"
          />
        </form>
      </div>
    </div>
  )
}

export default Feedback
