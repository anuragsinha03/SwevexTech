import React from "react";
import "../../css/home-css/services.css";
import CreateCard from "./CreateCard";
import servicesData from "./servicesData";

function createCards(card, indexVal) {
  console.log(indexVal);
  if (indexVal === 0) {
    return (
      <CreateCard
        activeCard="active"
        name={card.name}
        description={card.description}
        imgURL={card.imgURL}
      />
    );
  } else {
    return (
      <CreateCard
        name={card.name}
        description={card.description}
        imgURL={card.imgURL}
      />
    );
  }
}

function ServiceCard() {
  return (
    <div>
      <section className=" | max-width-container grid my-8 gap-4 grid-cols-2 md:grid-cols-3 md:gap-4 ">
        {servicesData.map(createCards)}
      </section>
    </div>
  );
}

export default ServiceCard;
