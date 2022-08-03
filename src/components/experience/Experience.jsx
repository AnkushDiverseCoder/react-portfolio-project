import React from 'react'
import ContentDetails from './ContentDetails'
import './experience.css'


const Experience = () => {
  return (
    <section id='experence'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Devlopement</h3>
          <div className="experience__content">
           <ContentDetails  language="Html" experience = "experienced"/>
           <ContentDetails  language="Css" experience = "intermediate"/>
           <ContentDetails  language="Tailwind css" experience = "experienced"/>
           <ContentDetails  language="Javascript" experience = "experienced"/>
           <ContentDetails  language="React " experience = "intermediate"/>
           <ContentDetails  language="React Native" experience = "intermediate"/>
          </div>
        </div>

        {/* ======= Backend Devlopment =========== */}
        <div className="experience__back">
        <h3>Backend Devlopement</h3>
          <div className="experience__content">
           <ContentDetails  language="Nodejs" experience = "experienced"/>
           <ContentDetails  language="Mongodb" experience = "experienced"/>
           <ContentDetails  language="PostgreSql" experience = "experienced"/>
           <ContentDetails  language="firebase" experience = "experienced"/>
           <ContentDetails  language="java" experience = "intermediate"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience