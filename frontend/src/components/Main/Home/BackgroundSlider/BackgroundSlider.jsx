import React from 'react'
import "./style.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import film1 from "../../../../assets/films_images/Avatar.jpg"
import film2 from "../../../../assets/films_images/_ыфнееее_resized.jpg"
import film3 from "../../../../assets/films_images/kutsal-1_resized.png"
import film4 from "../../../../assets/films_images/megan_saytt_resized.jpg"
import film5 from "../../../../assets/films_images/my_shitdifejuheolndf_resized.jpg"

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

function BackgroundSlider() {
    return (
        <section className='hero-background'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper bg bcg-slider"
            >
                <SwiperSlide
                    style={{ backgroundImage: `url(${film1} )` }} className="bg bcg-slide">
                </SwiperSlide>
                <SwiperSlide
                    style={{ backgroundImage: `url(${film2} )` }} className="bg bcg-slide">
                </SwiperSlide>
                <SwiperSlide
                    style={{ backgroundImage: `url(${film3} )` }} className="bg bcg-slide">
                </SwiperSlide>
                <SwiperSlide
                    style={{ backgroundImage: `url(${film4} )` }} className="bg bcg-slide">
                </SwiperSlide>
                <SwiperSlide
                    style={{ backgroundImage: `url(${film5} )` }} className="bg bcg-slide">
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default BackgroundSlider