import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome ,AiOutlineUser , AiOutlineMessage  } from 'react-icons/ai'
import {BiBook } from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri';
import {HiOutlineDesktopComputer} from 'react-icons/hi';


const Nav = () => {
 
  const [activeNav, setActiveNav] = useState()
 
  return (
    <nav>
       <a href="#home" onClick={()=> setActiveNav('#')} className={activeNav === '#'?'active':''}><AiOutlineHome/></a>
       <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'?'active':''}><AiOutlineUser/></a>
       <a href="#experence" onClick={()=> setActiveNav('#experence')} className={activeNav === '#experence'?'active':''}><BiBook/></a>
       <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services'?'active':''}><RiServiceLine/></a>
       <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio'?'active':''}><HiOutlineDesktopComputer/></a>
       <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav