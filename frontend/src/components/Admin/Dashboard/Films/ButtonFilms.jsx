import React from 'react'
import { Link } from 'react-router-dom';

//general scss
import "./ButtonFilms.scss"

function ButtonFilms() {
    return (
        <Link to="/admin/films">
            <button id="films" className='glowing-btn6' >
                <span id="films" className='glowing-txt'>F
                    <span id="films" className='faulty-letter'>IL</span>MS
                </span>
            </button>
        </Link>

    )
}

export default ButtonFilms