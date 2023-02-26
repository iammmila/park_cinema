import React from 'react'

//general scss
import "./Cards.scss"

//icons
import { FaEye } from "react-icons/fa";
import { Gi3DGlasses } from "react-icons/gi"
import { GiSmokingFinger } from "react-icons/gi"
import { GrResources } from "react-icons/gr"

function Cards() {
    return (
        <>
            <div className='feature_card card1'>
                <FaEye className='laser-icons' />
                <h6>improve image quality</h6>
                <p>Your audience will enjoy a better movie experience thanks to laser. Boost your brightness, contrast, and color and guarantee a consistent brightness over time.</p>
            </div>
            <div className='feature_card card2'>
                <Gi3DGlasses className='laser-icons' />
                <h6>moviegoer satisfaction</h6>
                <p>Picture quality is the number one factor influencing a moviegoer’s decision to see a movie in a theater. Laser projection improves color quality and brightness levels, which matters significantly to 68% of moviegoers.*</p>
            </div>
            <div className='feature_card card3'>
                <GiSmokingFinger className='laser-icons' />
                <h6>simplify your operations</h6>
                <p>Laser projection makes running your theaters simpler by improving operational efficiency. It implies less storage, less staff training, and less maintenance.</p>
            </div>
            <div className='feature_card card4'>
                <GrResources className='laser-icons' />
                <h6>reduce resources</h6>
                <p>With laser projection, you can cut costs up to 70% by reducing your power consumption, minimizing heat dissipation, and increasing efficiency.</p>
            </div>
        </>
    )
}

export default Cards