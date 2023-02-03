import React from "react";
import ItHero from "../../images/it-service-hero.svg";
import Footer from "../home/Footer";
import img1 from "../../images/it-infrastructure-img1.svg";
import img2 from "../../images/it-infrastructure-img2.svg";

function ServicesHero(props) {
  return (
    <div>
      <section>
        <img className="w-full" src={props.img1} alt="" />
        <div className="flex justify-center ">
          <span className="services-border | relative font-medium text-2xl mt-12">
            {props.title}
          </span>
        </div>

        <div className="max-width-container my-6 text-[10px] border-l-[15px] border-[#0894DE] pl-2 leading-tight font-extralight md:text-[24px] md:border-l-[30px]">
          <p className="">{props.para1}</p>
        </div>

        <div className="max-width-container flex flex-col md:flex-row md:gap-8">
          <img className="" src={props.img2} alt="" />
          <div>
            <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
              {props.para2}
            </p>
          </div>
        </div>

        <div className="max-width-container flex flex-col md:flex-row-reverse md:gap-8">
          <img className="" src={props.img3} alt="" />
          <div className="text-right">
            <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
              {props.para3}
            </p>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}

export default ServicesHero;
