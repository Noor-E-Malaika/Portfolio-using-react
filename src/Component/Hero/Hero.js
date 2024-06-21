import React from 'react'
import './Hero.css'
import black from '../../assets/img/black.jpeg'

const Hero = () => {
  return (
    <section id="hero">
    <div className="introContent">
      <span className='hello'>Hello,</span>
      <span className='introText'>I'm <span className='introName'>Noor E Malaika</span> <br /> Frontend Website Designer.</span>
      <p className='introPara'> I am a skilled web designer with experience in creating visually appealing and user-friendly websites.I have created a portfolio showcasing my skill.
       </p>
      <div className="connect">Resume</div>
      

    </div>
    <img src= {black} alt="" className="bg" />
    </section>
  )
}

export default Hero;