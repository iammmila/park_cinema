import React, { useContext, useEffect } from 'react'

//general scss
import "./Slider.scss"

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
import { Link } from 'react-router-dom';

function Slider() {
  const { films, setFilms, setLoading, loading, filterTags, FilmsURL } = useContext(MainContext)

  const getData = async () => {
    await axios.get(FilmsURL).then((res) => setFilms(res.data));
    setLoading(false);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='hero_section'>
      <div className="hero">
        <div className="bg"></div>
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          freeMode={true}
          navigation={true}
          modules={[Pagination, FreeMode, Navigation]}
          className="main-slider"
          breakpoints={{
            1600: {
              slidesPerView: 4
            },
            1100: {
              slidesPerView: 3
            },
            850: {
              slidesPerView: 2
            },
            600: {
              slidesPerView: 1
            },
            0: {
              slidesPerView: 1
            }
          }}
        >
          {/* //!cards of Films */}
          {
            loading ? (<><LoadingCard /> <LoadingCard /> <LoadingCard />
            </>) :
              films?.filter((film) => filterTags.length > 0 ? filterTags.every((filterTag) =>
                film.formats.map((format) => format.name).includes(filterTag)
              )
                : films)
                .map((film) => (
                  <SwiperSlide className='slide' key={film.id}>
                    <Link to={`/film/${film.id}`}>
                      <img className='films' width={"400px"} height={"600px"} src={film.uri} alt="film" />
                      <span>{film.name}</span>
                    </Link>
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