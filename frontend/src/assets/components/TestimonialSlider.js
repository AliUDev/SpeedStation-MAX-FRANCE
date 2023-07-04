import { Rating } from "@mui/material";
import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TestimonialSlider = () => {
  return (
    <div className="p-lg-5 p-2">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
        }}
        navigation={false}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="swipe_slide_main_container">
          <div className="testimonial_cards text-left">
            <div className="card p-4 border-0 mb-5 mb-md-0">
              <p className="px-xl-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center mx-4 mb-4">
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    className="rounded-circle shadow-1-strong"
                    width="75"
                    height="75"
                  />
                  <div className="ms-3">
                    <h6>Maria Smantha</h6>
                    <p className="mb-0">Web Developer</p>
                  </div>
                </div>
                <Rating name="read-only" value={2} readOnly />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipe_slide_main_container">
          <div className=" testimonial_cards text-left">
            <div className="card p-4 border-0 mb-5 mb-md-0">
              <p className="px-xl-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center mx-4 mb-4">
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    className="rounded-circle shadow-1-strong"
                    width="75"
                    height="75"
                  />
                  <div className="ms-3">
                    <h6>Maria Smantha</h6>
                    <p className="mb-0">Web Developer</p>
                  </div>
                </div>
                <Rating name="read-only" value={2} readOnly />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipe_slide_main_container">
          <div className="testimonial_cards text-left">
            <div className="card p-4 border-0 mb-5 mb-md-0">
              <p className="px-xl-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center mx-4 mb-4">
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    className="rounded-circle shadow-1-strong"
                    width="75"
                    height="75"
                  />
                  <div className="ms-3">
                    <h6>Maria Smantha</h6>
                    <p className="mb-0">Web Developer</p>
                  </div>
                </div>
                <Rating name="read-only" value={2} readOnly />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipe_slide_main_container">
          <div className="testimonial_cards text-left">
            <div className="card border-0 p-4 mb-5 mb-md-0">
              <p className="px-xl-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <div className="d-flex flex-wrap gap-3   justify-content-between align-items-center mx-4 mb-4">
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    className="rounded-circle shadow-1-strong"
                    width="75"
                    height="75"
                  />
                  <div className="ms-3">
                    <h6>Maria Smantha</h6>
                    <p className="mb-0">Web Developer</p>
                  </div>
                </div>
                <Rating name="read-only" value={2} readOnly />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
