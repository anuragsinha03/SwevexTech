import React from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function handleOpeningPages(navigate, name) {
  let baseURL = `${name}`;
  console.log(baseURL);
  console.log(name.replaceAll(/ /g, "").toLowerCase());
  if (window.location.pathname == "/") {
    console.log(window.location.pathname);
    baseURL = `services/${name.replaceAll(/ /g, "").toLowerCase()}`;
    navigate(baseURL);
  } else if (window.location.pathname == "/services") {
    console.log(window.location.pathname);
    baseURL = `/${name.replaceAll(/ /g, "").toLowerCase()}`;
    navigate("/services" + baseURL);
  }
}

function CreateCard(props) {
  const navigate = useNavigate();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="100"
      className={
        props.activeCard
          ? "active-card service-card | flex flex-col justify-center items-center border-2 border-black rounded-lg px-2 gap-[2px] cursor-pointer select-none"
          : "service-card | flex flex-col justify-center items-center border-2 border-black rounded-lg px-2 select-none cursor-pointer"
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
AOS.init();
export default CreateCard;
