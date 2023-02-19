import React, { useContext, useEffect } from 'react'

//general scss
import "./style.scss"

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";
import CheckBox from './CheckBoxSlider/CheckBox';
import { MainContext } from '../../../../context/ContextProvider';
import axios from 'axios';
import LoadingCard from '../../Cinemas/LoadingCard/LoadingCard';

function Slider() {
  const { films, setFilms, setLoading, loading } = useContext(MainContext)

  const URL = 'http://localhost:8080/films';

  const getData = async () => {
    await axios.get(URL).then((res) => setFilms(res.data));
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <section className='hero_section'>
      <div className="hero">
        <div className="bg"></div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          freeMode={true}
          navigation={true}
          modules={[Pagination, FreeMode, Navigation]}
          className=" main-slider "
        >
          {/* //!cards of Films */}
          {
            loading ? (<><LoadingCard /> <LoadingCard /> <LoadingCard />
            </>) :
              films?.map((data) => (
                <SwiperSlide className='slide' key={data._id}>
                  <img className='films' width={"400px"} height={"600px"} src={data.poster} alt="film1" />
                  <span>{data.name}</span>
                </SwiperSlide>
              ))
          }
          <CheckBox />
        </Swiper>
      </div>
    </section >
  )
}

export default Slider