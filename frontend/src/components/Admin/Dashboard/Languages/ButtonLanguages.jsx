import React from 'react'
import { Link } from 'react-router-dom';

//general scss
import "./ButtonLanguages.scss"

function ButtonLanguages() {
    return (
        <Link to="/admin/languages">
            <button id="languages" className='glowing-btn8'>
                <span id="languages" className='glowing-txt'>LAN
                    <span id="languages" className='faulty-letter'>GUA</span>GES
                </span>
            </button>
        </Link>
    )
}

export default ButtonLanguages