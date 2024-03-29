import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

 const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <div>
                <p>Bring The well</p>
                <p>being & beauty</p>
                <p>naturally!!!</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=''/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img} alt=''/>
        </div>
    </div>
  )
}
export default Hero