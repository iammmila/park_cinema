import React from 'react'

//components
import InformationImax from '../InformationImax/InformationImax'

//general scss
import "./HeroSection.scss"

function HeroSection() {
    return (
        <section className='imax-hero'>
            <div className='bcgImage'>
                <div className="container">
                    <div className='wrapper-blur-section'>
                        <div className='content'>
                            <div className="blur-bg"></div>
                            <div style={{ display: "flex" }}>
                                <InformationImax />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection