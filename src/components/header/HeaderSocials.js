import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/anthony-odinukwe/" target="_blank"><FaLinkedin /></a>
      <a href="https://github.com/matosky1" target="_blank"><FaGithub /></a>
      <a href="https://www.instagram.com/matosky_jnr/" target="_blank"><FaInstagram /></a>
    </div>
  )
} 

export default HeaderSocials