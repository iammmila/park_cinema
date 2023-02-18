import React from 'react'

//general scss
import "./style.scss"

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import "swiper/css/pagination";

//film images
import film1 from "../../../../assets/films_images/Avatar.jpg"
import film2 from "../../../../assets/films_images/_ыфнееее_resized.jpg"
import film3 from "../../../../assets/films_images/kutsal-1_resized.png"
import film4 from "../../../../assets/films_images/megan_saytt_resized.jpg"
import film5 from "../../../../assets/films_images/my_shitdifejuheolndf_resized.jpg"

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";
import CheckBox from './CheckBoxSlider/CheckBox';

function Slider() {

  return (
    <section className='hero_section'>
      <div className="hero">
        <div className="bg"></div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Pagination, FreeMode, Navigation]}
          className=" main-slider "
        >
          <SwiperSlide className='slide'>
            <img className='films' width={"400px"} height={"600px"} src={film1} alt="film1" />
            <span>Avatar Movie</span>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img className='films' width={"400px"} height={"600px"} src={film2} alt="film1" />
            <span>Avatar Movie</span>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img className='films' width={"400px"} height={"600px"} src={film3} alt="film1" />
            <span>Avatar Movie</span>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img className='films' width={"400px"} height={"600px"} src={film4} alt="film1" />
            <span>Avatar Movie</span>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img className='films' width={"400px"} height={"600px"} src={film5} alt="film1" />
            <span>Avatar Movie</span>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img className='films' width={"400px"} height={"600px"} src={film1} alt="film1" />
            <span>Avatar Movie</span>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img className='films' width={"400px"} height={"600px"} src={film2} alt="film1" />
            <span>Avatar Movie</span>
          </SwiperSlide>
          <CheckBox />
        </Swiper>
      </div>
    </section >
  )
}

export default Slider