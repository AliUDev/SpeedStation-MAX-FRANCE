import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Img1 from "../images/img-1.png";
import Img2 from "../images/img-2.png";
import Img3 from "../images/img-3.jpg";
import { Link } from "react-router-dom";
import "./Slider.scss";

const HomeSlider = () => {
  return (
    <div className="swiper_container_outer">
      <h1 className="swiper_heading">
        European-wide and German Freight Forwarders <br></br>Freight forwarding
        for each city
      </h1>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container cities_swiper"
        >
          <SwiperSlide>
            <img src={Img1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img1} alt="slide_image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Img3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">Back</div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next slider-arrow">Next</div>
          </div>
        </Swiper>
      </div>
      <Link to="/" className="learn_more_button">
        Explore More Cities
      </Link>
    </div>
  );
};

export default HomeSlider;
