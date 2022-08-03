import React from 'react'
import './footer.css'
import {AiFillLinkedin,AiFillGithub,AiFillTwitterCircle} from "react-icons/ai"
import {GiPaperBagFolded} from "react-icons/gi"

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Ankush Thakur</a>
      <ul className='permalinks'>
         <li><a href="#home">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#experience">Experience"</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#portfolio">Portfolio</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/thakur-ankush-056561219/"><AiFillLinkedin/></a>
        <a href="https://github.com/AnkushDiverseCoder"><AiFillGithub/></a>
        <a href="https://www.showwcase.com/ankushsingh"><GiPaperBagFolded/></a>
        <a href="https://twitter.com/AnkushCoder1902"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ankush Thakur. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer