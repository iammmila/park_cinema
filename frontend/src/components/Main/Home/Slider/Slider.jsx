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
import { FreeMode, Navigation, Pagination } from "swiper";
function Slider() {

  return (
    <section className='hero_section'>
      <div className="hero">
        {/* //! BACKGROUND SLIDER */}
        
        {/* <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="bg bcg-slider"
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
        </Swiper> */}


<div className="bg"></div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true} 
          freeMode={true}
          // spaceBetween={10}
          // autoplay={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, FreeMode, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='films' width={"400px"} height={"600px"} src={film1} alt="film1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='films' width={"400px"} height={"600px"} src={film2} alt="film1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='films' width={"400px"} height={"600px"} src={film3} alt="film1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='films' width={"400px"} height={"600px"} src={film4} alt="film1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='films' width={"400px"} height={"600px"} src={film5} alt="film1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='films' width={"400px"} height={"600px"} src={film1} alt="film1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='films' width={"400px"} height={"600px"} src={film2} alt="film1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Slider