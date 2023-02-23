import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

//general scss
import "./SliderHall.scss"

//images
import img1 from "../../../../assets/images/VIP/img1.jpg"
import img2 from "../../../../assets/images/VIP/img2.jpg"
import img3 from "../../../../assets/images/VIP/img3.jpg"
import img4 from "../../../../assets/images/VIP/img4.jpg"
import img5 from "../../../../assets/images/VIP/img5.jpg"

function SliderHall() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={img1} alt="img1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="img2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="img3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="img4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="img5" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper3"
            >
                <SwiperSlide>
                    <img src={img1} alt="img1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="img2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="img3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="img4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="img5" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SliderHall