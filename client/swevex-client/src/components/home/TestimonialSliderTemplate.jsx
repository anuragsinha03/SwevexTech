import React from "react";

function TestimonialSliderTemplate(props) {
  const { image, name, firm, review } = props.value;
  return (
    <div className="flex flex-col justify-center items-center w-full  mb-8">
      <img src={image} alt="" className="image" />
      <p className="text-white font-medium text-[20px]">{name}</p>
      <p className="text-white font-light">{firm}</p>
      <p className="text-center text-white text-[16px]">{review}</p>
    </div>
  );
}

export default TestimonialSliderTemplate;
