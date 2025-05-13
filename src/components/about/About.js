import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />

          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          I’m a passionate Fullstack Developer who turns complex problems into clean, scalable, 
  and efficient solutions. From responsive websites to dynamic web apps, 
  I bring modern tech and best practices together to deliver digital products that perform. 
  With 20+ completed projects, I’m here to help you build, fix, or upgrade your web presence — fast.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>
      </div>
      </section>
  )
}

export default About