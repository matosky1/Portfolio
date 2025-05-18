import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Rukbe CEO',
    review: 'Anthony played a key role in redesigning our app interface. He handled the frontend development using React and collaborated closely with designers to deliver a modern user experience.'
  },
  {
    avatar: AVTR2,
    name: 'eCommerce Team Project',
    review: 'Led the frontend Kotlin development of a mobile shopping app. Integrated product listing, cart system, and checkout flow in Jetpack Compose.'

  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testmonials</h2>

      <Swiper className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
           return (
            <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} />
          </div>
          <h5 className='client__name'>{name} </h5>
          <small className='client__review'> {review}
            
          </small>
        </SwiperSlide>

           )

          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials