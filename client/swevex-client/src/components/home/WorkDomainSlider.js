import React, { useState } from 'react';
import { WorkDomainData } from './WorkDomainData';
import previous from '../../images/previous.svg'
import next from '../../images/next.svg'

const WorkDomainSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <section className='slider'>
      <div className=''>
        <img className="left-arrow | w-[40px] aspect-square " src={previous} alt="" onClick={prevSlide}/>
        <img className="right-arrow | w-[40px] aspect-square" src={next} alt="" onClick={nextSlide}/>
        {WorkDomainData.map((slide, index) => {
          return (
            <div>
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <div className='flex'>
                <div className='flex flex-col justify-center items-center w-[280px] mb-8'>
                  <img src={slide.image} alt='' className='w-[60px] mb-2 md:w-[100px] mt-4' />
                  <p className='text-white font-medium text-[20px] md:text-[28px]'>{slide.name}</p>
                </div>
                </div>
              )}
            </div>
          </div>      

          );
        })}
      </div>
    </section>
  );
};

export default WorkDomainSlider;
