import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FaGithubSquare} from 'react-icons/fa'
    

const headersocial = () => {
  return (
    <div className='header-socials'>
          <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer"> <AiFillLinkedin/></a>
          <a href="https://instagram.com/_.hilal_ahmed._?igshid=YTM0ZjI4ZDI=" target='_blank' rel="noopener noreferrer"> <FiInstagram/></a>
          <a href="https://github.com" target='_blank' rel="noopener noreferrer"> <FaGithubSquare/></a>
    </div>
  
  )
}

export default headersocial
