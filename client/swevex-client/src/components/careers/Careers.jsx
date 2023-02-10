import React from "react";
import Navbar from "../home/Navbar";
import careers from "../../images/careers.svg";
import Footer from "../home/Footer";
import { CarrierContainerData } from "./CarrierContainerData";
import CarrierContainerCard from "./CarrierContainerCard";
function Careers() {
  return (
    <div>
      <section>
        <Navbar page="careers" />
        <div>
          <img className="w-full" src={careers} alt="" />
          <div className="flex justify-center ">
            <span className="services-border | relative font-medium text-2xl my-4">
              JOIN OUR TEAMS
            </span>
          </div>
        </div>
        <div className="max-width-container w-[1fr] my-4 grid md:grid-cols-3 gap-4 md:flex-row ">
          {CarrierContainerData.map((val, index) => {
            return (
              <CarrierContainerCard
                key={index}
                serviceImg={val.serviceImg}
                serviceTitle={val.serviceTitle}
                serviceDescription={val.serviceDescription}
              />
            );
          })}
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default Careers;
