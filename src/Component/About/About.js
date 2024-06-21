import React from 'react'
import './About.css'
import frontend from '../../assets/img/frontend.jpeg'
import webdesigner from '../../assets/img/webdesigner.jpeg'
import computer from '../../assets/img/computer.jpeg'



const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTittle">What I do</span> <br/>
      <span className="skillDesc">I'm a skilled and passionate web designer with experience in creating visuallly web designerealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. i'm proficient in HTMl, CSS and JavaScript,as weel as design software such as Adobe Photoshop and Illustrator.</span>
      <div className="skillBars">
          <div className="skillBar">
          <img src={frontend} alt="" className='skillBarImg' />
              <div className="skillBarText">
                <h2>Front-end Developer</h2>
                <p>"Crafting digital experiences that captivate and inspire."</p>
            </div>
          </div>

          <div className="skillBar">
           <img src={webdesigner} alt="" className='skillBarImg' />
            <div className="skillBarText">
              <h2>Website Designer</h2>
              <p>"Building websites that bring ideas to life with elegance and functionality."</p>
            </div>
          </div>

          <div className="skillBar">
           <img src={computer} alt="" className='skillBarImg' />
            <div className="skillBarText">
              <h2>Back-end Developer</h2>
              <p>"Architecting robust solutions to power the digital world behind the scenes."</p>
            </div>
          </div>


            </div>
    

    </section>
  )
}

export default Skill