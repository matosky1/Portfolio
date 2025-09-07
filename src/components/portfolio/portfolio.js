import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/ecommerce.webp'
import IMG5 from '../../assets/Track Race.webp'
import IMG6 from '../../assets/portfolio7.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather App',
    github: 'https://github.com/matosky1/weather.git',
    demo: 'https://matosky1.github.io/weather/'

  },
  {
    id: 2,
    image: IMG2,
    title: 'Connect game',
    github: 'https://github.com/matosky1/connect-game.git',
    demo: 'https://matosky1.github.io/connect-game/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'API',
    github: 'https://github.com/matosky1/Rest-API.git',
    demo: ' https://matosky1.github.io/Rest-API/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Ecommerce App',
    github: 'https://github.com/Chidiebere-Nwigwe/EcommerceApp.git',
    demo: 'https://drive.google.com/file/d/1D-tAWz7faalmGFcSSKgSaZhCa3jTop75/view?usp=drivesdk'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Track Race(unreal Engine)',
    github: 'https://github.com/SODV2203/unrealkartracer-matosky1.git',
    demo: 'https://drive.google.com/file/d/1DE5PiUYZOQLOKsMosWe2yIEBem9bxPZS/view?usp=drivesdk'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Photography-Portfolio',
    github: 'https://github.com/matosky1/Photography-Portfolio',
    demo: 'https://matosky1.github.io/Photography-Portfolio/'
  }

]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>

     
      <div className="container portfolio__container">
  {data.map(({ id, image, title, github, demo }) => (
    <article key={id} className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
        <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
      </div>
    </article>
  ))}
</div>

      
    </section>
  )
}

export default portfolio