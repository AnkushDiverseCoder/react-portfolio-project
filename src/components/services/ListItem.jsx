import React from 'react'
import {FiCheck} from "react-icons/fi"
import "./service.css"

const ListItem = (props) => {
    return (
        <>
            <li>
                <FiCheck className='service__list-icon' />
                <p>{props.paragraph}.</p>
            </li>
            
        </>
    )
}

export default ListItem