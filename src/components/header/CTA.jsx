import React from 'react'
import CV from '../../assets/girubuntu_samuel_cv.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary '>Let's Chat</a>
    </div>
  )
}

export default CTA