import React from 'react'

//general scss
import "./Features.scss"

// images
import imaxImg from "../../../../../assets/images/formats/imax/imax2.jpg"

function Features() {
    return (
        <section className='features_imax'>
            <div className="container">
                <div className='wrapper_imax'>
                    <div className='line' ></div>
                    <h1>IMAX – movie technology of future that already exists</h1>
                    <div className='information-brief'>
                        <div className='wrapper_contents'>
                            <span>Superior image quality.</span>
                            <p>Cinema has two projectors, so the image projected on the screen, is brighter twice. Greater accuracy, clarity and perfect image quality are provided thanks to digital projection system.</p>
                            <span>Superior image quality.</span>
                            <p>Cinema has two projectors, so the image projected on the screen, is brighter twice. Greater accuracy, clarity and perfect image quality are provided thanks to digital projection system.</p>
                        </div>
                        <img className='img-imax' src={imaxImg} alt="futureImg" />
                    </div>
                    <div className="wrapper_contents_bottom">
                        <span >Amazing purity of sound.</span>
                        <p>The sound is unmatched part of the technology. Its depth makes a film like penetrating inside. Each filmgoer feels what is happening on the screen with his body, he lives in the created world. This effect is achieved also owing to the patentedhigh power speaker system. Another indicator of super sound quality - is a wide frequency response. This implies the use of higher and very low frequencies, so it can be called vibrations. The peculiarity of the sound also depends on the listening environment, so the IMAX company hasa patent on a particular geometry of the hall. Also the sound track is better thanks to improved process of digitally remastering. Sound is configured in such a way that when you are in a cinema, you enjoy its dynamism, purity, brightness and clarity.</p>
                        <span>The increased width of the screen.</span>
                        <p>Image format - is a technical term that means the proportional ratio between the width and height of image on the screen. Typically, many modern films are produced in a CinemaScope format (2.40:1). This format was created in 1953 and still is considered like standard. It destroys all known patterns, expands the image formats movies to IMAX® 1.43:1. Thus, filmgoers see the image enlarged up to 40% in comparison with conventional cinemas. It is also possible to protect most part of image at the stage of final mounting (up to IMAX® 1.9:1), which makes the image even more than 21%, than in conventional cinemas. Format of IMAX Image allows filmgoers to immerse into film, just to live in it and not to feel themselves like bystanders.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features