/*import React from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div id="navbar" className='navbar'>
      <h1>Portfolio</h1>
      <ul className='nav-menu'>
        <li><Link  activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500}> Home</Link></li>
        <li><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}> About</Link></li>
        <li><Link  activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500}> Portfolio</Link></li>
        <li><Link  activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}> Contact</Link></li>
        <li><Link  activeClass="active" to="footer" spy={true} smooth={true} offset={-100} duration={500}> Footer</Link></li>
      </ul>
      <div className="nav-connect">Connect</div>
    </div>
  
  );
};

export default Navbar;*/

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navbar" className='navbar'>
      <h1>Portfolio</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
        <li><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
        <li><Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link></li>
        <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
        <li><Link activeClass="active" to="footer" spy={true} smooth={true} offset={-100} duration={500}>Footer</Link></li>
      </ul>
      <div className="nav-connect">Connect</div>
    </div>
  );
};

export default Navbar;
