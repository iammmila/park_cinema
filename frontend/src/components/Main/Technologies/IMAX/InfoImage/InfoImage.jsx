import React from 'react'
import "./style.scss"
import imaxProject from "../../../../../assets/images/imax/IMAX1.jpg"
function InfoImage() {
    return (
        <img style={{ zIndex: 11, width:"48%",height:"100%", borderRadius:"20px" }} src={imaxProject} alt="project" />
    )
}

export default InfoImage