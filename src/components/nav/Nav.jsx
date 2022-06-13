import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookmarksFill} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {BsFillArchiveFill} from 'react-icons/bs'

const Nav = () => {
  const [activeNav, setActiveNav ] = useState('#')
  return (
   <nav>
     <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
     <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBookmarksFill/></a>
     <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
     <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFillArchiveFill/></a>
   </nav>
  )
}

export default Nav
