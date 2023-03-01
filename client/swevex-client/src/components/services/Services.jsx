import React from "react";
import Navbar from "../home/Navbar";
import serviceshero from "../../images/services-hero.svg";
import placeholderServicesHero from "../../images/services-hero.jpg";
import ServiceCard from "../home/ServiceCard";
import Footer from "../home/Footer";
import ChatWithUs from "../home/ChatWithUs";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Services() {
  return (
    <div>
      <Navbar page="services" />
      <LazyLoadImage
        data-aos="fade-down"
        data-aos-delay="150"
        width="100%"
        src={serviceshero}
        placeholderSrc={placeholderServicesHero}
        alt=""
        effect="blur"
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
