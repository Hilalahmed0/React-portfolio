import React from 'react'
import Header from './component/header/header'
import Nav from './component/nav/nav'
import Skill from './component/skills/skill'
import Project from './component/project/project'
import About from './component/about/about'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'
import Gallary from './component/gallary/gallary'


const app = () => {
  return ( 
    <>
    < Header />
    < Nav />
    < Skill />
    < Project />
    < About />
     <Gallary />
    < Contact />
    < Footer />
    </>
  )
}

export default app