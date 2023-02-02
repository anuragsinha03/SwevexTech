import React from "react";
import Navbar from "../home/Navbar";
import ServicesHero from "./ServicesHero";

function ServiceTemplate() {
  return (
    <div>
      <Navbar page="services" />
      <ServicesHero />
    </div>
  );
}

export default ServiceTemplate;
