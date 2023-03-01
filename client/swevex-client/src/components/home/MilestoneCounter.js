import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../../css/home-css/milestones.css";

const MilestoneCounter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="">
        <div className="flex justify-center ">
          <span className="services-border | relative font-medium text-2xl mt-8">
            MILESTONES ACHIEVED
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center my-4 gap-20 relative">
            <div className="flex justify-center items-center flex-col">
              <div className="font-medium text-[30px] md:text-[60px]">
                {counterOn && (
                  <CountUp start={0} end={1000} duration={2} delay={0} />
                )}
                +
              </div>
              <p className="font-extralight text-[18px] w-full md:text-[36px]">
                Clients
              </p>
            </div>
            <div className="milestoneContainer | ">
              <div className="font-medium text-[30px] md:text-[60px] ">
                {" "}
                {counterOn && (
                  <CountUp start={0} end={50} duration={2} delay={0} />
                )}
                +
              </div>
              <p className="font-extralight text-[18px] md:text-[36px]">
                Projects
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default MilestoneCounter;
