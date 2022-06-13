import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import './header.css'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="#" target="_blank"><BsLinkedin size={'2rem'} /></a>
        <a href="#" target="_blank"><FaGithub size={'2rem'} /></a>
        <a href="#" target="_blank"><FiDribbble size={'2rem'} /></a>
    </div>
  )
}

export default HeaderSocial