import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand.png'
import hero_image from '../Assests/hero.jpg'

const hero = () => {
  return (
    <div className='hero'>
    <div className="hero-left">
      <h2>New Arrivals Only</h2>
      <div>
        <div className="hand-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src="" alt="" />
      </div>
    </div>
    <div className="hero-right">
      <img src={hero_image} alt="" />
    </div>
  </div>
  )
}

export default hero