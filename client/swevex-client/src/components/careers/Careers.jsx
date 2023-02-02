import React from "react";
import Navbar from "../home/Navbar";
import careers from "../../images/careers.svg";
import sales from "../../images/customer-support.svg";
import marketing from "../../images/marketing.svg";
import technical from "../../images/web-development.svg";
import Footer from "../home/Footer";
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

        <div className="max-width-container my-4 flex flex-col justify-center items-center gap-4 md:flex-row ">
          <div className="border-2 border-black flex flex-col justify-center items-center p-8 rounded hover:bg-[#0894DE] hover:text-white">
            <img className="w-[100px] aspect-square" src={sales} alt="" />
            <p className="text-[28px] font-medium">SALES</p>
            <p className="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="border-2 border-black flex flex-col justify-center items-center p-8 rounded hover:bg-[#0894DE] hover:text-white ">
            <img className="w-[100px] aspect-square" src={marketing} alt="" />
            <p className="text-[28px] font-medium">MARKETING</p>
            <p className="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="border-2 border-black flex flex-col justify-center items-center p-8 rounded hover:bg-[#0894DE] hover:text-white ">
            <img className="w-[100px] aspect-square" src={technical} alt="" />
            <p className="text-[28px] font-medium">TECHNICAL</p>
            <p className="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
        </div>

        <div className="bg-[#0894DE] max-width-container text-center text-white gap-8 p-4 text-[24px] rounded mb-8">
          <a className="" href="/careers/apply">
            APPLY HERE!
          </a>
        </div>

        <Footer />
      </section>
    </div>
  );
}

export default Careers;
