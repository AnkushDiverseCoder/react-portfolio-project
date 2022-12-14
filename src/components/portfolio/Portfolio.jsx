import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"
import Content from './Content'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className=" container portfolio__container">
        <Content image={IMG1} title="this is the title" name="github" />
        <Content image={IMG2} title="this is the title" name="github" />
        <Content image={IMG3} title="this is the title" name="github" />
        <Content image={IMG4} title="this is the title" name="github" />
        <Content image={IMG5} title="this is the title" name="github" />
        <Content image={IMG6} title="this is the title" name="github" />
      </div>

    </section>
  )
}

export default Portfolio