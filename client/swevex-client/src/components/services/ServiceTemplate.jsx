import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../home/Navbar";
import ServicesHero from "./ServicesHero";
import ServicesPageData from "./ServicesPageData";

function ServiceTemplate() {
  const params = useParams();

  const ServicesPage = ServicesPageData.filter((value) => {
    return value.title == params.id;
  });

  return (
    <div>
      <Navbar page="services" />
      {ServicesPage.map((value) => {
        return (
          <div>
            <ServicesHero
              img1={value.img1}
              title={value.title}
              para1={value.para1}
              img2={value.img2}
              para2={value.para2}
              img3={value.img3}
              para3={value.para3}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ServiceTemplate;
