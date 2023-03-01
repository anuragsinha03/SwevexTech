import React from "react";
import "../../css/home-css/hero.css";
import "../../observer/observer";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="home-hero-img">
      <section className="max-width-container h-[280px] md:h-[100vh]">
        <div className="left-container  w-[60%]  h-full  flex flex-col justify-center gap-2 md:w-[45%] md:ml-[2rem]">
          <div className="text-[22px] md:text-[72px] leading-[1.5rem] md:leading-[4.5rem] uppercase font-medium">
            Comprehensive <span className="text-[#0894DE]"> solution </span> for
            your business
          </div>
          <div className="text-[12px] font-extralight md:text-[24px]">
            Swevex is a ONE-STOP solution to all business, operations, and
            execution related problems
          </div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button className=" | w-[160px] h-[40px] md:w-[400px] md:h-[75px] text-white text-[12px] md:text-[28px] uppercase font-light  bg-[#0894DE] grid place-content-center rounded-md mt-[4px] hover:bg-[#007abc]">
              <NavLink to="/contact">
                BOOK <span className="font-medium">FREE</span> CONSULTATION
              </NavLink>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
