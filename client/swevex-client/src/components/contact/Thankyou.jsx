import React from "react";
import { NavLink } from "react-router-dom";
import thankyou from "../../images/thankyou.svg";
import AOS from "aos";
import "aos/dist/aos.css";
// import Navbar from "../../components/home/Navbar";

function Thankyou() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div className="flex justify-center items-center h-[100vh]">
        <section className="flex flex-col justify-center items-center">
          <img
            data-aos="zoom-out-up"
            data-aos-delay="150"
            className="w-[50%] md:w-[70%]"
            src={thankyou}
            alt=""
            loading="lazy"
          />
          <h1 className="text-4xl font-bold">✔ THANK YOU</h1>
          <h1 className="text-xl md:text-3xl font-medium">
            Your response has been submitted
          </h1>
          <h1 className="">We will get back to you shortly</h1>
          <NavLink
            onClick={() => {
              localStorage.clear();
            }}
            className="w-[90px] bg-[#0894DE] text-white text-center p-2 mt-4 rounded hover:bg-[#007abc]"
            to="/"
          >
            Go Home
          </NavLink>
        </section>
      </div>
    </div>
  );
}
AOS.init();
export default Thankyou;
