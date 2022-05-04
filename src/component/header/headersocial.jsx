import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FaGithubSquare} from 'react-icons/fa'
    

const headersocial = () => {
  return (
    <div className='header-socials'>
          <a href="https://linkedin.com" target="_blank"> <AiFillLinkedin/></a>
          <a href="https://instagram.com/_.hilal_ahmed._?igshid=YTM0ZjI4ZDI=" target="_blank"> <FiInstagram/></a>
          <a href="https://github.com" target="_blank"> <FaGithubSquare/></a>
    </div>
  
  )
}

export default headersocial
