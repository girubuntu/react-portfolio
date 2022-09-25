import React from 'react'
import './portfolio.css'
import invImage from '../../assets/inventory.jpg'
import triWeb from '../../assets/website.jpg'
import movie from '../../assets/movie.jpg'
import irihano from '../../assets/irihano.JPG'
import irebero from '../../assets/rebero.JPG'

const data = [
  {
    id: 1,
    image: irebero, 
    title: 'Rebero',
    github: '#',
    demo: 'https://www.irebero.rw/'
  },
  {
    id: 2,
    image: movie, 
    title: 'Movie library',
    github: 'https://github.com/girubuntu/movie-library',
    demo: 'https://movie-library-lake.vercel.app/'
  },
  {
    id: 3,
    image: triWeb, 
    title: 'Trinity Website',
    github: 'https://github.com/girubuntu/trinitywebsite',
    demo: 'https://www.trinityinternationacademy.rw'
  },
  {
    id: 4,
    image: irihano, 
    title: 'Irihano',
    github: 'https://github.com/girubuntu/Lost-item',
    demo: 'https://irihano.rw/'
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h1>Portfolio</h1>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
               <article key={id} className='portfolio_item'>
                  <div className="portfolio_item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item-cta">
                    <a href={github} className='btn' target='_blank'>GitHub</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }      
       
      </div>
    </section>
  )
}

export default Portfolio