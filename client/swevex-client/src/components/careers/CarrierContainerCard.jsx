import React from "react";
import { useNavigate } from "react-router-dom";

function HandleOnclickingApplyHere(CarrierPath, Navigate) {
  const URL_FOR_DIRECTION = `/careers/apply/${CarrierPath}`;
  Navigate(URL_FOR_DIRECTION);
}

function CarrierContainerCard(props) {
  const Navigate = useNavigate();
  return (
    <div>
      <div className="border-2 border-black flex flex-col gap-4 justify-center items-center pt-8 rounded ">
        <div className="flex flex-col items-center">
          <img
            className="w-[100px] aspect-square"
            src={props.serviceImg}
            alt=""
          />
          <p className="text-[28px] font-medium uppercase">
            {props.serviceTitle}
          </p>
          <p className="text-center">{props.serviceDescription}</p>
        </div>
        <button
          type="button"
          className="w-full bg-[#0894DE] uppercase p-4 text-white text-xl font-extralight md:text-2xl border-t-2 border-black hover:bg-[#007abc] "
          onClick={() =>
            HandleOnclickingApplyHere(props.serviceTitle, Navigate)
          }
        >
          apply Here!
        </button>
      </div>
    </div>
  );
}

export default CarrierContainerCard;
