import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimage1 from "../images/sliderimage1.png";
import sliderimage2 from "../images/sliderimage2.png";
import sliderimage3 from "../images/sliderimage3.png";
import sliderimage4 from "../images/sliderimage4.png";
import sliderimage5 from "../images/sliderimage5.png";
import "./Slider.scss";

const SliderComp = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="p-lg-5 px-2 py-5">
      <Slider className="tour_slider" {...settings}>
        <div className="slider-content">
          <img className="m-0" src={sliderimage1} height={300} />
          <h6 className="slider-content">Transport</h6>
        </div>
        <div className="slider-content">
          <img className="m-0" src={sliderimage2} height={300} />
          <h6>Pallettenversand</h6>
        </div>
        <div className="slider-content">
          <img className="m-0" src={sliderimage3} height={300} />
          <h6>Sperrgutversand</h6>
        </div>
        <div className="slider-content">
          <img className="m-0" src={sliderimage4} height={300} />
          <h6>Mobeltransport</h6>
        </div>
        <div className="slider-content">
          <img className="m-0" src={sliderimage5} height={300} />
          <h6>Motorradtarnsport</h6>
        </div>
        <div className="slider-content">
          <img className="m-0" src={sliderimage5} height={300} />
          <h6>Motorradtarnsport</h6>
        </div>
        <div className="slider-content">
          <img className="m-0" src={sliderimage5} height={300} />
          <h6>Motorradtarnsport</h6>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
