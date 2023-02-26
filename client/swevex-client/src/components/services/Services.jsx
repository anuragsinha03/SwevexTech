import React from "react";
import Navbar from "../home/Navbar";
import serviceshero from "../../images/services-hero.svg";
import ServiceCard from "../home/ServiceCard";
import Footer from "../home/Footer";
import ChatWithUs from "../home/ChatWithUs";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  return (
    <div>
      <Navbar page="services" />
      <img
        data-aos="fade-down"
        data-aos-delay="150"
        className="w-full"
        src={serviceshero}
        alt=""
      />
      <div className="flex justify-center ">
        <span className="services-border | relative font-medium text-2xl mt-4">
          OUR SERVICES
        </span>
      </div>
      <ServiceCard />
      <ChatWithUs />
      <Footer />
    </div>
  );
}
AOS.init();
export default Services;
