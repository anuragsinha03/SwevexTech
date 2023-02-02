import React from "react";

function CreateCard(props) {
  return (
    <div
      className={
        props.activeCard
          ? "active-card service-card | flex flex-col justify-center items-center border-2 border-black rounded-lg px-2 gap-[2px] "
          : "service-card | flex flex-col justify-center items-center border-2 border-black rounded-lg px-2"
      }
    >
      <img
        className="card-img | w-[30px] aspect-square mb-[8px]"
        src={props.imgURL}
        alt=""
      />
      <h1 className="card-heading | text-xs font-medium">{props.name}</h1>
      <p className="card-description | text-[10px] font-extralight text-center">
        {props.description}{" "}
      </p>
    </div>
  );
}

export default CreateCard;
