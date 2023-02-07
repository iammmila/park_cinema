import React from 'react'
import "./style.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import film1 from "../../../../assets/films_images/Avatar.jpg"
// import required modules
import { Navigation, FreeMode, Pagination } from "swiper";
function Slider() {

  return (
    <section className='hero_section'>
      <div className="hero">
        <div className="bg"></div>
        <Swiper
          // onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={true}
          freeMode={true}
          // spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, FreeMode, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide>
          <img className='films' width={"400px"} src={film1} alt="film1" />
        </SwiperSlide>
          <SwiperSlide>
            <img className='films' width={"400px"} src={film1} alt="film1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='films' width={"400px"} src={film1} alt="film1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='films' width={"400px"} src={film1} alt="film1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='films' width={"400px"} src={film1} alt="film1" />
          </SwiperSlide>
          <SwiperSlide>
            <img  className='films' width={"400px"} src={film1} alt="film1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='films' width={"400px"} src={film1} alt="film1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Slider