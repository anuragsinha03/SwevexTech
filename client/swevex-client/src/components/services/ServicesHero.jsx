import React from "react";
import ItHero from "../../images/it-service-hero.svg";
import Footer from "../home/Footer";
import img1 from "../../images/it-infrastructure-img1.svg";
import img2 from "../../images/it-infrastructure-img2.svg";
function ServicesHero() {
  return (
    <div>
      <section>
        <img className="w-full" src={ItHero} alt="" />
        <div className="flex justify-center ">
          <span className="services-border | relative font-medium text-2xl mt-12">
            IT INFRASTRUCTURE
          </span>
        </div>

        <div className="max-width-container my-6 text-[10px] border-l-[15px] border-[#0894DE] pl-2 leading-tight font-extralight md:text-[24px] md:border-l-[30px]">
          <p className="">
            At SwevexTECH, our mission is to drive business and bridge the
            divide between offshore locations by creating opportunity for profit
            without compromising on quality or amount of deliverables. DK
            Business Patron envisages the global landmass as a a marketplace and
            assimilating the inherent strengths of different territorial
            locations, a collaborative effort towards achieving a common goal
            can not only make returns much more steeper on initial investment as
            a connected marketplace and assimilating the inherent strengths of
            different territorial locations, a collaborative effort towards
            achieving a common goal can not only make returns much more steeper
            on initial investment marketplace and assimilating the inherent
            strengths of different territorial locations, a collaborative effort
            towards achieving a common goal can not only make returns much more
            steeper on initial investment marketplace and assimilating the
            inherent strengths of different territorial locations, a
            collaborative effort towards achieving a common goal can not only
            make returns much more steeper on initial investment.
          </p>
        </div>

        <div className="max-width-container flex flex-col md:flex-row md:gap-8">
          <img className="" src={img1} alt="" />
          <div>
            <div className=" | relative font-medium text-2xl mt-4 border-b-[2px] border-black">
              OUR MISSION
            </div>
            <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
              At SwevexTECH, our mission is to drive business and bridge the
              divide between offshore locations by creating opportunity for
              profit without compromising on quality or amount of deliverables.
              DK Business Patron envisages the global landmass as a connected
              marketplace and assimilating the inherent strengths of different
              territorial locations, a collaborative effort towards achieving a
              common goal can not only make returns much more steeper on initial
              investment as a connected marketplace and assimilating the
              inherent strengths of different territorial locations, a
              collaborative effort towards achieving a common goal can not only
              make returns much more steeper on initial investment marketplace
              and assimilating the inherent strengths of different territorial
              locations
            </p>
          </div>
        </div>

        <div className="max-width-container flex flex-col md:flex-row-reverse md:gap-8">
          <img className="" src={img2} alt="" />
          <div className="text-right">
            <div className=" | relative font-medium text-2xl mt-4 border-b-[2px] border-black">
              OUR VISION
            </div>
            <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
              At SwevexTECH, our mission is to drive business and bridge the
              divide between offshore locations by creating opportunity for
              profit without compromising on quality or amount of deliverables.
              DK Business Patron envisages the global landmass as a connected
              marketplace and assimilating the inherent strengths of different
              territorial locations, a collaborative effort towards achieving a
              common goal can not only make returns much more steeper on initial
              investment as a connected marketplace and assimilating the
              inherent strengths of different territorial locations, a
              collaborative effort towards achieving a common goal can not only
              make returns much more steeper
            </p>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}

export default ServicesHero;
