import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Anthony</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/matosky1"><FaGithub /></a>
        <a href="https://www.instagram.com/matosky_jnr/"> < AiOutlineInstagram/></a>
        <a href="https://www.linkedin.com/in/anthony-odinukwe/"> <FaLinkedinIn /> </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Odinukwe Anthony. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer