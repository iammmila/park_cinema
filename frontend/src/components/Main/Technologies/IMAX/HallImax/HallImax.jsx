import React from 'react'

//components
import Information from './../HallInfo/Information';

//general scss
import "./HallImax.scss"

function HallImax() {
    return (
        <section className='imax_hall'>
            <div className='bcgImage'>
                <div className="container">
                    <div className='wrapper-blur-section'>
                        <div className='content'>
                            <div className="blur-bg"></div>
                            <div style={{ display: "flex", }}>
                                <Information />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HallImax