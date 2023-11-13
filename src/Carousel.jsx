import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { CarouselItem } from "./CarouselItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  ticker: `P${index}`,
  title: `Project${index}`,
}));

export function Carousel({updateProjectID}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: windowWidth/210,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <Slider {...settings} pauseOnHover={false} className="carousel">
        {carouselItems.map((carouselItem) => (
          <CarouselItem {...carouselItem} key={carouselItem.id} updateProjectID = {updateProjectID} />
        ))}
      </Slider>
    </>
  );
}
