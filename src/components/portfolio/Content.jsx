import React from 'react'
import "./portfolio.css"
const Content = (props) => {
    return (
        <div className="">
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={props.image} alt="IMG1" />
                </div>
                <h3>{props.title}</h3>
                <div className="portfolio__item-cta">
                    <a href="https://github.com" className='btn'>{props.name}</a>
                    <a href="https://github.com" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                </div>
            </article>
        </div>
    )
}

export default Content