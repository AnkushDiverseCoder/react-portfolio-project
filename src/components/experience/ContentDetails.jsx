import React from 'react'
import {BsFillPatchCheckFill} from "react-icons/bs"
import "./experience.css";

const ContentDetails = (props) => {
    return (
        <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>{props.language}</h4>
            <small className='text-light'>{props.experience}</small>
            </div>
        </article>
    )
}

export default ContentDetails