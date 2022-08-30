import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles/about.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function About() {
  const slides = [];
  for (let i = 0; i < 3; i++) {
    slides.push(
      <SwiperSlide key={`slide ${i}`}>
        <img src={`https:picsum.photos/id/${i}/800/500`} alt={`Slide ${i}`} />
      </SwiperSlide>
    );
  }

  return (
    <div className="about-main-container">
      <div className="line-container">
        <hr id="left-line"></hr>
        <p id="content">About me</p>
        <hr id="left-line"></hr>
      </div>
      <Swiper
        id="main"
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{ delay: 1500 }}
        spaceBetween={0}
      >
        {slides}
      </Swiper>

      <div className="line-container">
        <hr id="left-line"></hr>
        <p id="content">Content</p>
        <hr id="left-line"></hr>
      </div>
    </div>
  );
}

export default About;
