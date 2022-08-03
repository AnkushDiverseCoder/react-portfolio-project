import React from 'react'
import {BsLinkedin ,BsGithub } from "react-icons/bs"
import {AiFillDribbbleCircle } from "react-icons/ai"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/thakur-ankush-056561219/" target="/"><BsLinkedin/></a>
        <a href="https://github.com/AnkushDiverseCoder" target="/"><BsGithub/></a>
        <a href="https://twitter.com/AnkushCoder1902" target="/"><AiFillDribbbleCircle/></a>
    </div>
  )
}

export default HeaderSocials