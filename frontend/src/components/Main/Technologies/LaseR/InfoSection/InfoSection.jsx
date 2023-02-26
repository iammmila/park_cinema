import React from 'react'

//components
import Cards from '../CardsFeatures/Cards'

//images 
import laserImage from "../../../../../assets/images/formats/laser/laser.png"

//general scss
import "./InfoSection.scss"

function InfoSection() {
    return (
        <section className='laser-features-section'>
            <div className="container">
                <div className="wrapper-cards">
                    <Cards />
                </div>
                <div className="laser-info">
                    <img className='laser_image' src={laserImage} alt="laser" />
                    <div className='laser_wrapper_info'>
                        <p>On July, 2017 Park Cinema has presented hall with a new-generation projector for the first time ever in Azerbaijan. The innovative technology famous all over the world is waiting for the movie fans in Park Bulvar shopping and entertainment center.</p>
                        <p>Laser hall is optimized for 199 seats and it is the first and currently the only one in Azerbaijan. The new-generation projector set in the hall opens for visitors vivid and saturated picture which leads movie-watching to a new level.</p>
                        <p>Unlike an ordinary projector, the new-generation laser projector provides brightness and increases contrast, thereby providing for viewers the opportunity to watch detailed picture on the big screen. Contrast allows the projector to achieve incredible depth and realism of the picture while simultaneously displaying very bright and very dark colors and smooth color transitions.</p>
                        <p>It should be also noted that under the laser projector there is no flicker of the picture. As a result of a uniform distribution of light on the screen, the person's eye perceives the resulting picture as a single whole.</p>
                        <p>Be the first one watched a movie in the laser hall of Park Cinema, feel the difference and share your impressions on the social media. Our visitors’ feedbacks are deeply appreciated by us.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSection