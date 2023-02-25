import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import amazon from "../../images/amazon-logo.svg";
import moneytap from "../../images/moneytap-logo.svg";
import alibaba from "../../images/alibaba-logo.svg";
import thekabadi from "../../images/thekabadi-logo.svg";
import taskmo from "../../images/taskmo.svg";
import roziroti from "../../images/roziroti.svg";

function Affiliate() {
  const { scrollX } = useScroll();
  const x = useTransform(scrollX, [0, -100], [0, 1]);
  return (
    <div className="max-width-container">
      <div className="flex justify-center ">
        <span className="services-border | relative font-medium text-2xl mt-8">
          AFFILIATE PARTNER
        </span>
      </div>
      <div className="affiliate-div | grid place-items-center grid-cols-2 mb-4 md:grid-cols-6 md:mb-8">
        <motion.div
          style={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <img className="affiliate-img" src={amazon} alt="" />
        </motion.div>
        <motion.div
          style={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img className="affiliate-img" src={moneytap} alt="" />
        </motion.div>

        <motion.div
          style={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img className="affiliate-img" src={alibaba} alt="" />
        </motion.div>
        <motion.div
          style={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <img className="affiliate-img" src={thekabadi} alt="" />
        </motion.div>

        <motion.div
          style={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <img className="affiliate-img w-[150px]" src={taskmo} alt="" />
        </motion.div>

        <motion.div
          style={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <img className="affiliate-img w-[150px]" src={roziroti} alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default Affiliate;
