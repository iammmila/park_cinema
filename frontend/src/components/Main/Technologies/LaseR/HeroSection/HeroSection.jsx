import React from 'react'
import "./style.scss"
import InformationImax from './../../IMAX/InformationImax/InformationImax';

function HeroSection() {
    return (
        <section className='imax-hero'>
            <div className='bcgImage'>
                <div className="container">
                    <div className='wrapper-blur-section'>
                        <div className='content'>
                            <div className="blur-bg"></div>
                            <div style={{ display: "flex", }}>
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