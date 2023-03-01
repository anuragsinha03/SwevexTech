import React from "react";
import Navbar from "../home/Navbar";
import careers from "../../images/careers.svg";
import placeholderCareersHero from "../../images/careers.jpg";
import Footer from "../home/Footer";
import { CarrierContainerData } from "./CarrierContainerData";
import CarrierContainerCard from "./CarrierContainerCard";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import ChatWithUs from "../home/ChatWithUs";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Careers() {
  return (
    <div>
      <section>
        <Navbar page="careers" />
        <div>
          <LazyLoadImage
            data-aos="fade-down"
            data-aos-delay="150"
            width="100%"
            src={careers}
            placeholderSrc={placeholderCareersHero}
            effect="blur"
            alt=""
          />
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
        <ChatWithUs />
        <Footer />
      </section>
    </div>
  );
}
AOS.init();
export default Careers;
