import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { SiWhatsapp } from "react-icons/si"
import  { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(
      'service_4r3aqae',      // ✅ Your EmailJS Service ID
      'template_vuzygkk',     // ✅ Your Template ID
      form.current,           // ✅ The form DOM element
      '9JeQKrAa7mx20PBdm'     // ✅ Your Public Key
    )
    .then(
      () => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message: ' + error.text);
      }
    );
  };
  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>odinukweanthony@gmail.com</h5>
            <a href="mailto:odinukweanthony@gmail.com" target="_blank"> Send a message</a>
          </article>
          <article className="contact__option">
          <FaLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Odinukwe Anthony</h5>
            <a href="https://www.linkedin.com/in/anthony-odinukwe/"  target="_blank"> Send a message</a>
          </article>
          <article className="contact__option">
          <SiWhatsapp className='contact__option-icon'/> 
            <h4>WhatsApp</h4>
            <h5>+18255615819</h5>
            <a href="https://api.whatsapp.com/send?phone=18255615819" target="_blank" rel="noreferrer">
            Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
  <input type="text" name='name' placeholder='Your Full Name' required />
  <input type="email" name='email' placeholder='Your Email' required />
  <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
  <button type='submit' className='btn btn-primary'>Send Message</button>
</form>


      </div>
      </section>
  )
}

export default Contact