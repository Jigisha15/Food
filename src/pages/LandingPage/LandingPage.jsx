import React, { useState } from 'react'

import car1 from '../../assets/carousel/car1.jpg'
import car2 from '../../assets/carousel/car2.png'
import car3 from '../../assets/carousel/car3.webp'
import car4 from '../../assets/carousel/car4.jpg'

import { TfiAngleRight, TfiReceipt } from 'react-icons/tfi'
import { TfiAngleLeft } from 'react-icons/tfi'

import './LandingPage.css'

const LandingPage = () => {
  const carousel = [
    {
      id: 1,
      image: car1,
    },
    {
      id: 2,
      image: car2,
    },
    {
      id: 3,
      image: car3,
    },
    {
      id: 4,
      image: car4,
    },
  ]

  console.log(carousel)

  const [click, setClick] = useState(0)
  const length = carousel.length
  // console.log(length)

  const prevClick = () => {
    setClick(click === length - 1 ? 0 : click + 1)
  }

  const nextClick = () => {
    setClick(click === 0 ? length - 1 : click - 1)
  }

  return (
    <>
      <div className="carousel">
        <button
          className="carousel-button"
          onClick={prevClick}
        >
          <TfiAngleLeft size={25} />
        </button>
        {carousel.map((item, index) => (
          <div
            className={
              index === click
                ? 'carousel-container active'
                : 'carousel-container'
            }
            key={item.id}
          >
            {index === click && (
              <div className="small-carousel">
                <img
                  className="carousel-image"
                  src={item.image}
                  alt=""
                />
              </div>
            )}
          </div>
        ))}
        <button
          className="carousel-button"
          onClick={nextClick}
        >
          <TfiAngleRight size={25} />
        </button>
      </div>
      {/* <div className="landingpage-container">
        <div className="black-container"></div>

        <div className="image-container"></div>
        <div className="mid-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magnam
          expedita necessitatibus tempora eligendi sequi vitae omnis
          perspiciatis ab, modi ut itaque molestias molestiae? Quia illo
          molestias illum ex ducimus.
        </div>
      </div> */}
      <div className="fix-image">
        <div className="image-quote">
          वदनि कवळ घेता नाम घ्या श्रीहरीचे ।<br />
          सहज हवन होते नाम घेता फुकाचे ।<br />
          जिवन करि जिवित्वा अन्न हे पूर्णब्रह्म ।<br />
          उदरभरण नोहे जाणिजे यज्ञकर्म ॥१॥
        </div>

        <div className="fix1 fix">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo
          cupiditate maxime quam dolor animi delectus dicta! Sit velit ab,
          commodi nostrum voluptate, deserunt rerum officiis non explicabo
          facilis assumenda quasi minus excepturi vitae culpa earum dicta
          cupiditate ipsam adipisci?
        </div>

        <div className="fix2 fix">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          quo. Porro ab similique, aliquid placeat nesciunt maiores accusantium
          est perspiciatis quas eveniet facilis dignissimos. Non fugit ut,
          reiciendis doloribus animi placeat error, numquam sequi minus
          voluptatum delectus ex quas. In.
        </div>
      </div>
    </>
  )
}

export default LandingPage
