import React, { useState } from 'react';
import { SliderData } from './SliderData';
import previous from '../../images/previous.svg'
import next from '../../images/next.svg'

const TestimonialSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <img className="left-arrow | w-[40px] aspect-square " src={previous} alt="" onClick={prevSlide}/>
      <img className="right-arrow | w-[40px] aspect-square" src={next} alt="" onClick={nextSlide}/>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className='flex flex-col justify-center items-center w-[280px] mb-8'>
                <img src={slide.image} alt='' className='image' />
                <p className='text-white font-medium text-[20px]'>{slide.name}</p>
                <p className='text-white font-light'>{slide.firm}</p>
                <p className='text-center text-white text-[16px]'>{slide.review}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default TestimonialSlider;
