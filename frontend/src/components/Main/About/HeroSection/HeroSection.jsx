import React from 'react'

//general scss
import "./HeroSection.scss"

// import bcgImage from "./../../../../assets/about-image/image.jpg"

import Information from '../AboutUs/Information'
function HeroSection() {
    return (
        <section className='hero-about'>
            <div className="container">
                <div className='wrapper-blur-section'>
                    <div className='content'>
                        <div className="blur-bg"></div>
                        <Information />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection