import React from 'react'

// images
import imaxProject from "../../../../../assets/images/formats/imax/IMAX1.jpg";

//general scss
import "./InfoImage.scss"

function InfoImage() {
    return (
        <img className='info-image'  src={imaxProject} alt="project" />
    )
}

export default InfoImage