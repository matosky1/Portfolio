import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React.js SPAs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>State management (Context, Redux, Hooks)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API integration & animations</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONTEND DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom responsive websites (mobile-first design)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Modern UI using React or HTML/CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Landing pages, portfolios, and business sites</p>
            </li>
          </ul>
        </article>
           {/* End of Web development */}

        <article className="service">
          <div className="service__head">
            <h3>Photography</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Event & lifestyle shoots</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Photo retouching/editing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Personal brand shoots for social media or business</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services