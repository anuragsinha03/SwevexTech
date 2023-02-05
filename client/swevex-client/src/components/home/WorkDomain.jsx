import React from "react";
import "../../css/home-css/workdomain.css";
import WorkDomainSlider from "./WorkDomainSlider";

function WorkDomain() {
  return (
    <div>
      <section className=" bg-[#0894DE] pb-4 md:h-[350px]">
        <div className="max-width-container">
          <div className="flex justify-center ">
            <span className="workdomain-border | relative font-medium text-2xl my-8 text-white ">
              WORK DOMAINS
            </span>
          </div>
          <WorkDomainSlider />
        </div>
      </section>
    </div>
  );
}

export default WorkDomain;
