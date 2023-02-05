import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

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
        <div className="flex justify-center items-center my-4 gap-8">
          <div className="w-[50px] md:w-[100px] md:mr-6">
            <div className="font-medium text-[30px] md:text-[60px]">
              {counterOn && (
                <CountUp start={0} end={50} duration={2} delay={0} />
              )}
              +
            </div>
            <p className="font-extralight text-[18px] md:text-[36px]">
              Projects
            </p>
          </div>
          <div className="w-[100px] border-l-[1px] pl-8 border-black">
            <div className="font-medium text-[30px] md:text-[60px]">
              {" "}
              {counterOn && (
                <CountUp start={0} end={100} duration={2} delay={0} />
              )}
              +
            </div>
            <p className="font-extralight text-[18px] md:text-[36px]">
              Clients
            </p>
          </div>{" "}
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default MilestoneCounter;
