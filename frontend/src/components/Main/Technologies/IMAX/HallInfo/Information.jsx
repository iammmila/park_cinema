import React from 'react'

// images
import imaxHall from "../../../../../assets/images/formats/imax/imax3.jpg"

//general scss
import "./Information.scss"

function Information() {
    return (
        <div className='information-hall-section'>
            <div style={{ width: "18%" }} className='line' ></div>
            <h1>IMAX HALL</h1>
            <div className='information-brief'>
                <img className='hall_imax' src={imaxHall} alt="hall" />
                <div className='info_paragraphs'>
                    <p>The uniqueness of hall is not only in inalienable attributes of IMAX hall (high-power projectors, the best sound system and special geometry of the hall); filmgoers can find all the components of premium hall at the global level.</p>
                    <p>Comfort seats with adjustable armrests, arranged in compliance with clear plan geometry of IMAX halls, with respect to the giant screen. Monstrous screen with a special silver covering will provide you total immersion into the film. And multichannel powerful sound will help to strengthen this effect. Vibration of chairs is provided!</p>
                    <p>We are waiting for you in IMAX hall, where fiction invades into reality.</p>
                </div>
            </div>
        </div>
    )
}

export default Information