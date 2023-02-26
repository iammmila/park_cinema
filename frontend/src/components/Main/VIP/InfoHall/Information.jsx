import React from 'react'

//components
import SliderHall from '../SliderHall/SliderHall'

//general scss
import "./Information.scss"

function Information() {
    return (
        <section className='hall_vip'>
            <div className="container">
                <div className='wrapper_hall'>
                    <div style={{ width: "18%" }} className='line' ></div>
                    <h1>Azal Club VİP Hall</h1>
                    <div className='information-brief'>
                        <div className='left_side'>
                            <span>Park Cinema VIP Lounge - for the real movie gourmets.</span>
                            <p>VIP Lounge is the newest premium of the standard hall, equipped with a silver screen, with state-of-the-art film projection and audio equipment (three-way DOLBY Surround 5.1 sound), which allows you to watch movies in both 2D and 3D formats. Perfectly executed comfortable interior, special wall, and ceiling coverings absorb side tones, contributing to the clear sound of the film.</p>
                            <p>VIP Lounge has 23 luxurious leather armchairs of the Spanish firm “Figueras”, which have wide armrests, electric adjustment of the backrest inclination and footrest.</p>
                            <p>For more comfort, each chair is equipped with a control button, through which viewers can take a comfortable position and most importantly - you can order drinks and food to the hall, enjoying watching.</p>
                            <p>VIP Lounge is for connoisseurs of good cinema and comfort, for those who prefer to gain only the best!</p>
                            <p>We are waiting for you at the Park Cinema VIP Lounge, at Park Bulvar, on the 5th floor.</p>
                        </div>
                        <div className='slider-hall-wrapper'>
                            <SliderHall />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information