// import React, { useState } from 'react';
// import { SliderData } from './TestimonialData';
// import previous from '../../images/previous.svg'
// import next from '../../images/next.svg'

// const TestimonialSlider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <section className='slider'>
//       <img className="left-arrow | w-[40px] aspect-square " src={previous} alt="" onClick={prevSlide}/>
//       <img className="right-arrow | w-[40px] aspect-square" src={next} alt="" onClick={nextSlide}/>
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? 'slide active' : 'slide'}
//             key={index}
//           >
//             {index === current && (
//               <div className='flex flex-col justify-center items-center w-[280px] mb-8'>
//                 <img src={slide.image} alt='' className='image' />
//                 <p className='text-white font-medium text-[20px]'>{slide.name}</p>
//                 <p className='text-white font-light'>{slide.firm}</p>
//                 <p className='text-center text-white text-[16px]'>{slide.review}</p>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default TestimonialSlider;

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import TestimonialSliderTemplate from "./TestimonialSliderTemplate";
import { TestimonialData } from "./TestimonialData";

function TestimonialSlider() {
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
        {TestimonialData.map((value) => {
          return (
            <SwiperSlide>
              <TestimonialSliderTemplate value={value} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
