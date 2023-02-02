import React from "react";
import '../../css/home-css/hero.css';
import heroImg from '../../images/hero-img.svg'

function Hero(){
    return (
      <div>
        <section className=" hero bg-[#eeeff3] flex w-full ">
          <div className="max-width-container flex">
            <div className="left-hero | ml-[2rem] w-[60%] flex flex-col h-full justify-center relative z-[2] gap-[5px]">
              <h1 className="hero-heading | text-2xl uppercase font-medium">
                Comprehensive <span className="text-[#0894DE]">solution</span>{" "}
                for your business
              </h1>
              <p className="hero-para | font-extralight text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
              <a
                href="#"
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
      </div>
    );
}

export default Hero;