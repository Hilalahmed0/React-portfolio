import React from 'react'
import './header.css'
import CTA from './cta'
import Mee from '../../assets/dp1.jpg'

import Headersocial from './headersocial'

const header = () => {
  return (
    <section id='header'>
   {/* <header> */}
     <div className="container header-container">
       <h5>Hello, I am</h5>
            <h1>Hilal Ahmed</h1>
            <div className="text-box">
             <div className="text">I am</div>
             <ul className='text-item'>
               <li><span className='sp' >Web Developer...</span></li>
               <li><span className='sp' >Web Designer....</span></li>
               <li><span className='sp' >Freelancer...</span></li>
               <li><span className='sp' >Traveller...</span></li>
             </ul>
            </div>
       {/* <h5 className='text-light'> Frontend Developer</h5> */}
       < CTA />
       < Headersocial />
       <div className="me">
         <img src={Mee} alt="me" />
       </div>
       <a href="#contact" className='scroll-down'>Scroll Down</a>
     </div>
   {/* </header> */}
   </section>
  )
}

export default header

