import React from "react";
import "../../../src/App.css";
import TestimonialSlider from "./TestimonialSlider";

function Testimonials() {
  return (
    <div>
      <section className="bg-[#0894DE] pb-4">
        <div className="max-width-container">
          <div className="flex justify-center ">
            <span className="workdomain-border | relative font-medium text-2xl my-8 text-white ">
              WHAT USERS SAY
            </span>
          </div>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
