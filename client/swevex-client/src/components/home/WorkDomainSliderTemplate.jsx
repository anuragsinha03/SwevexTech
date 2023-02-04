import React from "react";

function WorkDomainSliderTemplate(props) {
  const { image, name } = props.value;
  return (
    <div className="flex flex-col justify-center items-center w-full mb-8">
      <img src={image} alt="" className="w-[60px] mb-2 md:w-[100px] mt-4" />
      <p className="text-white font-medium text-[20px] md:text-[28px]">
        {name}
      </p>
    </div>
  );
}

export default WorkDomainSliderTemplate;
