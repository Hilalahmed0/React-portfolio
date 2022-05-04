import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineProject } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { FcViewDetails } from 'react-icons/fc'
import { useState } from 'react'
import {ImImages} from 'react-icons/im'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#skill" onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''} ><GiSkills /></a>
      <a href="#project"  onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''} ><AiOutlineProject /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#gallary" onClick={() => setActiveNav('#gallary')} className={activeNav === '#gallary' ? 'active' : ''}><ImImages /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
      <a href="#footer" onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><FcViewDetails /></a>

    </nav>
  )
}

export default Nav