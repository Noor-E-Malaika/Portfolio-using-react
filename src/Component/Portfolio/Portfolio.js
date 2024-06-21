import React from 'react'
import './Portfolio.css'
import timer from '../../assets/img/timer.jpeg'
import calculator from '../../assets/img/calculator.jpeg'
import tictactoe from '../../assets/img/tictactoe.jpeg'
import login from '../../assets/img/login.jpeg'
import todo from '../../assets/img/todo.png'
import pomodoro from '../../assets/img/pomodoro.webp'


const Project = () => {
  return (
    <section id="works">
      <h2 className='worksTittle'>My Projects</h2>
      <span className="worksDesc">A clean, modern portfolio website showcasing my skills, projects, and experience as a web developer. This project demonstrates my ability to design and build responsive, user-friendly websites.</span>
     
      <div className="worksImgs">

      <div className='cardContainer'>
        <img src={timer} alt="" className="workImg" />
        <p>this is my timer app using HTML, CSS and JavaScript.</p>
        <a href="card" className='cardBtn'>code</a>
      </div>

      <div className='cardContainer'>
        <img src={calculator} alt="" className="workImg" />
        <p>This is my calculator app using HTML, CSS ,JavaScript.</p>
        <a href="card" className='cardBtn'>code</a>
      </div>

      <div className='cardContainer'>
      <img src={tictactoe} alt="" className="workImg" />
      <p>This is my TicTacoe game app using HTML, CSS, JavaScript.</p>
      <a href="card" className='cardBtn'>code</a>
      </div>

      <div className='cardContainer'>
        <img src={login} alt="" className="workImg" />
        <p>This is my login page using HTML, CSS, JavaScript.</p>
        <a href="card" className='cardBtn'>code</a>
      </div>

     <div className='cardContainer'>
       <img src={pomodoro} alt="" className="workImg" />
       <p>this is my pomodoro timer app using HTML, CSS, JavaScript.</p>
       <a href="card" className='cardBtn'>code</a>
       </div>

      <div className='cardContainer'>
        <img src={todo} alt="" className="workImg" />
        <p>This is my todo app list using HTML, CSS, JavaSript.</p>
        <a href="card" className='cardBtn'>code</a>
      </div>
    </div>
      <button className="workBtn">See More</button>
    </section>
    
  )
}

export default Project