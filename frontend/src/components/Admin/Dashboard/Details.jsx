import React from 'react'


//general scss
import "./Details.scss"

//components
import ButtonFilms from './Films/ButtonFilms'
import ButtonLanguages from './Languages/ButtonLanguages'

function Details() {
    return (
        <div className='wrapperDashboard'>
            <div className="container">
                <ButtonFilms />
                <ButtonLanguages />
            </div>
        </div>
    )
}

export default Details