import React from 'react'
import './about.css'
import ME from '../../assets/dp.jpg'


const About = () => {
  return (
     <section id="about">
       <h5>Get To Know</h5>
      <h2>About Me</h2>
       <div className="container about-container">
         <div className="about-me">
          <div className="my-img">
                       <img src={ME} alt="" /> </div>
         </div>
         <div className="my-content">
           <h4>Hi there! </h4>
                     <p> My name is  <span>Hilal Ahmed Qureshi,</span> I'm a <span>Front End Engineer</span>  based in <span>Bangalore.</span> I describe myself as a passionate developer who loves <span>Coding</span> designing and the web platform. I like to create  and contribute to open source <span>projects.</span> That helps me to learn a ton of new stuff, grow as a developer and gain more <span>experience.</span>   </p>
                  
                   
           <a href="#contact" className='btn btn-primary'>Lets talk</a>
         </div>
       </div>
     </section>
    
  )
}

export default About

