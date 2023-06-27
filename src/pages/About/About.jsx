import React from 'react'

import './About.css'

const About = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((el) => observer.observe(el))

  return (
    <div className="about-container">
      <div className="about-three">
        <p className="three-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
          possimus fuga nam molestiae impedit nulla error deleniti voluptates!
          Illo quos unde eius, similique cum dignissimos accusantium facere.
          Obcaecati porro illo quod alias nobis, quo sed, temporibus maxime
          minima officia sunt quas. Quibusdam, accusamus! Sit, laudantium
          repellat incidunt quaerat eum pariatur!
        </p>
      </div>

      <div className="about-animate">
        <div className="animate-one hidden">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          ipsam nam cumque quaerat quasi fuga, cum officia illum id fugit neque
          ab molestias pariatur numquam voluptas? Cum, inventore. Qui illo vitae
          magni rerum incidunt soluta quibusdam, voluptatum distinctio voluptate
          odit quod laborum laudantium est voluptas quis eos aspernatur harum
          doloribus.
        </div>
        <div className="animate-one hidden">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          ipsam nam cumque quaerat quasi fuga, cum officia illum id fugit neque
          ab molestias pariatur numquam voluptas? Cum, inventore. Qui illo vitae
          magni rerum incidunt soluta quibusdam, voluptatum distinctio voluptate
          odit quod laborum laudantium est voluptas quis eos aspernatur harum
          doloribus.
        </div>
      </div>

      {/* <div className="about-three"></div> */}
    </div>
  )
}

export default About
