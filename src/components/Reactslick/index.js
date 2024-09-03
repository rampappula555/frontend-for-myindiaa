import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const imgSrc = (
    <img
      src="https://s3b.cashify.in/gpro/uploads/2022/08/19140212/iPhone-14-Pro-Max-Everything-We-Know-Till-Now.jpg"
      alt="Banner"
      className="rounded-lg shadow-lg w-full h-[390px]"
    />
  );
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>{imgSrc}</div>
        <div>{imgSrc}</div>
        <div>{imgSrc}</div>
        <div>{imgSrc}</div>
        <div>{imgSrc}</div>
        <div>{imgSrc}</div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
