import React from 'react'
import './footer.css'
import {ImFacebook2} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

const footer = () => {
  return (
    
    <section id="footer">
    <div className="container footer-container">
    <a href="header"className='logo'>PORTFOLIO</a>
      <ul className='links'>
      <li><a href="header">Home</a></li>
      <li><a href="#skill">Skill</a></li>
      <li><a href="#project">Project</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
     
      </ul>
      <div className="footer-social">
        <a href="https://facebook.com"target='_blank' rel="noopener noreferrer"><ImFacebook2/></a>
        <a href="https://instagram.com/_.hilal_ahmed._?igshid=YTM0ZjI4ZDI="target='_blank' rel="noopener noreferrer"><BsInstagram/></a>
        <a href="https://twitter.com"target='_blank' rel="noopener noreferrer"><FaTwitterSquare/></a>
      </div>
      
      <div className="copy-right">
        <small> &copy; Hilal Ahmed. 2022 All rights reserved </small>
      </div>
    </div>
      
    </section>
  )
}

export default footer