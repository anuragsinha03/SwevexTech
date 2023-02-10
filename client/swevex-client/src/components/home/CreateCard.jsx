import React from "react";
import { useNavigate } from "react-router-dom";

function handleOpeningPages(navigate, name) {
  let baseURL = `${name}`;
  if (window.location.pathname == "/") {
    baseURL = `services/${name}`;
  }
  navigate(baseURL);
}

function CreateCard(props) {
  const navigate = useNavigate();
  return (
    <div
      className={
        props.activeCard
          ? "active-card service-card | flex flex-col justify-center items-center border-2 border-black rounded-lg px-2 gap-[2px] select-none"
          : "service-card | flex flex-col justify-center items-center border-2 border-black rounded-lg px-2 select-none"
      }
      onClick={() => handleOpeningPages(navigate, props.name)}
    >
      <img
        className="card-img | w-[30px] aspect-square mb-[8px]"
        src={props.imgURL}
        alt=""
      />
      <h1 className="card-heading | text-xs font-medium ">{props.name}</h1>
      <p className="card-description | text-[8px] md:text-[10px] font-extralight text-center ">
        {props.description}{" "}
      </p>
    </div>
  );
}

export default CreateCard;
