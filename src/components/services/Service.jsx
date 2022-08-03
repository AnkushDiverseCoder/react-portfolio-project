import React from 'react'
import ListItem from './ListItem'
import "./service.css"

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            {/* <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." /> */}
          </ul>
        </article>

        {/* next article  */}
        <article className='service'>
          <div className="service__head">
            <h3>Web devlopment</h3>
          </div>
          <ul className='service__list'>
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          </ul>
        </article>

        {/* ===========3rd Article */}
        <article className='service'>
          <div className="service__head">
            <h3>Content</h3>
          </div>
          <ul className='service__list'>
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            {/* <ListItem paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." /> */}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service