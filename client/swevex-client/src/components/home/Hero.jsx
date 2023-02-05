import React from "react";
import "../../css/home-css/hero.css";
import "../../observer/observer";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className="home-hero-img">
      <section className="max-width-container h-[280px] md:h-[100vh]">
        <div className="left-container  w-[60%]  h-full  flex flex-col justify-center gap-2 md:w-[45%] md:ml-[2rem]">
          <div className="text-[22px] md:text-[72px] md:leading-[4.5rem] uppercase font-medium">
            Comprehensive <span className="text-[#0894DE]">solution</span> for
            your business
          </div>
          <div className="text-[12px] font-extralight md:text-[24px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </div>
          <button className=" | w-[118px] h-[40px] md:w-[280px] md:h-[75px] text-white text-[12px] md:text-[28px] uppercase font-light  bg-[#0894DE] grid place-content-center rounded-md mt-[4px] hover:bg-[#007abc]">
            <NavLink to="/contact">get started</NavLink>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hero;

{
  /* LAYOUT USING IMG TAG WITH FLEX
    <div>
      <section className=" hero bg-[#eeeff3] flex w-full ">
        <div className="max-width-container flex">
          <div className="left-hero | ml-[2rem] w-[60%] flex flex-col h-full justify-center relative z-[2] gap-[5px]">
            <h1 className="hero-heading | text-2xl uppercase font-medium">
              Comprehensive <span className="text-[#0894DE]">solution</span> for
              your business
            </h1>
            <p className="hero-para | font-extralight text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
            <a
              href="/contact"
              className="cta-btn | border-2 text-white text-[12px] uppercase font-medium w-[118px] h-[40px] bg-[#0894DE] grid place-content-center rounded-md mt-[4px] "
            >
              Get Started
            </a>
          </div>
          <div className="right-hero | w-[40%] flex justify-end items-end h-full">
            <img className="hero-img | h-auto w-auto" src={heroImg} alt="" />
          </div>
        </div>
      </section>
    </div> */
}
