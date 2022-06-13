import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/girubuntuTrans1.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Girubuntu Sam</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
