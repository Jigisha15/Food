import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialYoutube } from 'react-icons/sl'
import { SlSocialInstagram } from 'react-icons/sl'

import './Footer.css'

const Footer = () => {
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
    <div className="footer-container">
      <div className="footer-first">
        <h1 className="f1">We Welcome you!</h1>
        <div className="f1-text">
          We welcome you to taste the amazingly tasty delicacies of the Kokan
          region. We are very proud of hte variety of spices and food ranging
          from breakfast to deserts which we prepare keeping the authenticity as
          the main criteria. <br />
          <br />
          We welcome you warmly to our outlet! <br />
          <br />
          अतिथि देवो भव
        </div>
      </div>
      <div className="footer-left">
        <h1 className="l1">Follow Us</h1>

        <div className="l2">
          <button className="l2-btn">
            <SlSocialFacebook size={20} />
          </button>
          <button className="l2-btn">
            <SlSocialYoutube size={20} />
          </button>
          <button className="l2-btn">
            <SlSocialInstagram size={20} />
          </button>
        </div>

        <div className="l3">
          <h1 className="l3-h1">Address</h1>
          <p className="l3-p">123, Street Mumbai</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6483488596027!2d72.85152331744385!3d19.166864200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7acec2a614b%3A0xf78c135987a10623!2sMorarji%20Mill%20Mhada%20Sankul!5e0!3m2!1sen!2sin!4v1685743852189!5m2!1sen!2sin"
            width={150}
            height={100}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>

        <div className="l4">
          <ul>
            <li>
              Email:
              <a
                href=""
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {' '}
                kokan@gmail.com
              </a>
            </li>
            <li>Phone: +12 345 6789</li>
          </ul>
        </div>
      </div>
      <div className="footer-center">
        <h1 className="c1">Open Hours</h1>
        <ul>
          <li>Monday: 8:am-3pm 7pm-12am</li>
          <li>Tuesday: 8:am-3pm 7pm-12am</li>
          <li>Wednesday: 8:am-3pm 7pm-12am</li>
          <li>Thursday: 8:am-3pm 7pm-12am</li>
          <li>Friday: 8:am-3pm 7pm-12am</li>
          <li>Saturday: 8:am-3pm 7pm-12am</li>
          <li>Sunday: 8:am-3pm 7pm-12am</li>
        </ul>
      </div>
      <div className="footer-right">
        <h1 className="r1">Send Us your Feedback</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="r1-form"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            type="email"
            placeholder="Email-Id"
            name="email"
          />
          <input
            type="tel"
            placeholder="Contact number"
            name="phone"
          />
          <input
            type="text"
            placeholder="Your Feedback"
            name="feedback"
          />
          <input
            type="submit"
            placeholder="Send"
            style={{
              cursor: 'pointer',
              width: '40%',
              borderRadius: '20px',
              marginLeft: '60px',
              paddingLeft: '0',
              backgroundColor: '#2a7844',
              color: '#edfef0',
            }}
          />
        </form>
      </div>
    </div>
  )
}

export default Footer
