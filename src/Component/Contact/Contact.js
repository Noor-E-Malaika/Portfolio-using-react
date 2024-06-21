import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div id="contact">
        <h1 className='contactPageTittle'>Contact Me</h1>
        <span className="contactDesc">Please fill ou the form to discuss anything.</span>
        <form className='contactForm'>
            <input type="text" className="name" placeholder='Your Name' />
            <input type="email" className="email" placeholder='Your Email'/>
            <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
            <button type="submit" value="send" className="submitBtn">Submit</button>
            <div className='links'>
                
                
                
            </div>
        </form>
    </div>
  )
}

export default Contact