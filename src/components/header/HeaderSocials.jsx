import React from 'react'
import {BsLinkedin ,BsGithub } from "react-icons/bs"
import {AiFillDribbbleCircle } from "react-icons/ai"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="/"><BsLinkedin/></a>
        <a href="https://github.com" target="/"><BsGithub/></a>
        <a href="https://dribble.com" target="/"><AiFillDribbbleCircle/></a>
    </div>
  )
}

export default HeaderSocials