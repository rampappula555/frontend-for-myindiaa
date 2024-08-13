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
      src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Iy9HJDezgJsm9x-MNFVEGbl1jkJrlg2II32dK9rMejePeaWiQhwiCpmEwXt2PPC9dOVnnJLCJf8MEKpSndpsvsdNLg7nwrh6zhWSZLB4M2yCrh8xZyxsYMjnD6olJhbCsOwFC~89I9ipZroJchjBCBhLHl2tYHe4yV6xRylCaa~RxyY3ZS0TZ3LsbFZuKiA8QSdvqfU47cE6MuL5d5VOUjO69ievdtSXnWFx~FeHf5I-5OMM5GR0DY-1mgbrh0IqkfO19hRwFplr0pSvL8Gb7jb24EqfSgeychQg3G1m9zik8knt0TIIqrUbsBCHLPHfwbbJo-V82V0SuqAGI0LV1A__"
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
