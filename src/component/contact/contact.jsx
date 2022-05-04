import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import{IoLogoWhatsapp} from 'react-icons/io'
import {IoLogoInstagram} from 'react-icons/io'
import { useRef } from 'react';
import emailjs  from 'emailjs-com'

const Contact = () => { 
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xkbqxvq', 'template_xh0rrzb', form.current, '4TWcmHhZCFI4IOtV8')
    e.target.reset()


      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };


  return (
    
    <section id="contact">
      <h5>Get In Touch  </h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-option">
          <article  className='option'>
            <MdOutlineEmail className='option-icon' />
            <h4>Email</h4>
            <h5>hilal8523@gmail.com</h5>
            <a href="mailto:hilal8523@gmail.com" target='_blank'>Send Message</a>
          </article>
          <article  className='option'>
            <IoLogoWhatsapp className='option-icon' />
            <h4>Whatsapp</h4>
            <h5>8105468103</h5>
            <a href="https://api.whatsapp.com/send?phone=+918105468103" target='_blank'>Send Message</a>
          </article>
          <article  className='option'>
            <IoLogoInstagram className='option-icon' />
            <h4>Instagram</h4>
            <h5>hilal8523@gmail.com</h5>
            <a href="mailto:hilal8523@gmail.com" target='_blank'>Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit = {sendEmail} >
          <input type="text" name='name' placeholder='Yuor Full Name' required /> 
          <input type="email" name='email' placeholder='Yuor Email' required /> 
          <textarea name="message"   rows="7" placeholder='Your massege' required ></textarea>
          <button type='submit' className='btn btn-primary'> Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact