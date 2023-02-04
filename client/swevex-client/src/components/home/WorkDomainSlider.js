import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import WorkDomainSliderTemplate from "./WorkDomainSliderTemplate";
import { WorkDomainData } from "./WorkDomainData";

function WorkDomainSlider() {
  return (
    <div className="flex justify-center items-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {WorkDomainData.map((value) => {
          return (
            <SwiperSlide>
              <WorkDomainSliderTemplate value={value} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default WorkDomainSlider;
