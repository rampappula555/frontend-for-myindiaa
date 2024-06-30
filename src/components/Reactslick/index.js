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
      src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gFPFpDNcM0QDObB04llFYxNHDoBzwTR0A9t2NrYBC59H8jX1K4wo8rSaO7lumfaiVFlYNa7WB9Es7KzUSMKxccLoSbhGDwUZAsNfwW7GGMh4VZaL8uKvFTeK2f3ASVxGLrJ17xCDyW9iZupaoYIkPSKkZc64OOHzCVGwwcfGFfUBUQ3LFgMEjL4A477GyR8xKd1xfxeie82m2uy1ePQwMqDrNllDy49IDqqIkRTD~Gc2WOo6EDjzvFaKjbNKNm6ANLfOG39Ooa5X9DdcisX8zQFILWUZVP8PZgsK4-1jiBG6C4qnWn2OdvUKUtJAmtRU8KcfBAiXO6gO7MTrELBoVA__"
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
