import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import facebook from "../../images/facebook-logo.svg";
import linkedin from "../../images/linkedin-logo.svg";
import whatsapp from "../../images/whatsapp-logo.svg";
import instagram from "../../images/instagram-logo.svg";
import twitter from "../../images/twitter-logo.svg";

function Connect() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, -100], [0, 1]);
  return (
    <div>
      <section className="">
        <div className="flex justify-center ">
          <span className="services-border | relative font-medium text-2xl my-4 text-black ">
            CONNECT WITH US
          </span>
        </div>
        <div className="flex justify-center items-center gap-2 mb-4">
          <motion.div
            style={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://www.facebook.com/swevextech?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="hover:bg-[#4267B2] rounded md:w-[50px] md:rounded-md"
                src={facebook}
                alt=""
              />
            </a>
          </motion.div>
          <motion.div
            style={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <a
              href="https://twitter.com/Swevextech?t=IZsxe0uSsIhp3Fy1cIz38Q&s=08"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="hover:bg-[#1DA1F2] rounded md:w-[50px] md:rounded-md"
                src={twitter}
                alt=""
              />
            </a>
          </motion.div>
          <motion.div
            style={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <a
              href="https://instagram.com/swevextech?igshid=ZDdkNTZiNTM="
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="hover:bg-[#E4405F] rounded md:w-[50px] md:rounded-md"
                src={instagram}
                alt=""
              />
            </a>
          </motion.div>
          <motion.div
            style={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <a
              href="https://www.linkedin.com/company/swevex-tech-solution/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="hover:bg-[#0A66C2] rounded md:w-[50px] md:rounded-md"
                src={linkedin}
                alt=""
              />
            </a>
          </motion.div>
          <motion.div
            style={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <a href="https://wa.me/9431567503" target="_blank" rel="noreferrer">
              <img
                className="hover:bg-[#25D366] rounded md:w-[50px] md:rounded-md"
                src={whatsapp}
                alt=""
              />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Connect;
