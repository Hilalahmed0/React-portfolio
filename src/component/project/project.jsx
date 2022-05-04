import React from 'react'
import './project.css'
import IM1 from '../../assets/ims.jpg'
import IM2 from '../../assets/ims2.jpg'
import IM3 from '../../assets/ims3.jpg'




const Menu =[
  {
    id:1,
    name:'Live Demo',
    image:IM1,
    title:"Portfolio-1",
    link:"https://my-project-101.netlify.app/",
  },
  {
    id:2,
    name:'Live Demo',
    image:IM2,
    title:"Portfolio-2",
    link:"https://hilal-portfolio-demo.netlify.app/",
  },
  {
    id:3,
    name:'Live Demo',
    image:IM3,
    title:"Flipkart shopping Page-demo",
    link:"https://online-shopping-demo.netlify.app/",
  },
  {
    id:4,
    name:'Live Demo',
    image:IM1,
    title:" Access101 Page-demo",
    link:"https://demo-access-practice.netlify.app/",
  },
]
const project = () => {
  return (
   
    <section id="project">
      <h5>My recent Assignment</h5>
      <h2>Projects</h2>
      <div className="container project-container"
      
      >
        {
          Menu.map(({id, name, image, title, link}) =>{
            return(
            <article key={id} className='project-item'>
              <div className="project-img">
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <a href={link} className='btn'target= '_blank' >{name}</a>
            </article>
             
            )
          })
        }
       
    
         
        
      </div>
    </section>
  )
}

export default project


