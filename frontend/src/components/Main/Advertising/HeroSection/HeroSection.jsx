import React from 'react'

//general scss
import "./HeroSection.scss"

//components
import Information from './Information/Information';

function HeroSection() {
    return (
        <div className='advertising_section'>
            <div className="container">
                <div className="wrapper_advertising">
                    <div className='line' ></div>
                    <h1>Advertisements in cinemas as one of the most effective advertisement types</h1>
                    <Information />
                </div>
            </div>
        </div>
    )
}

export default HeroSection