import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../images/facebook-logo.svg";
import linkedin from "../../images/linkedin-logo.svg";
import twitter from "../../images/twitter-logo.svg";
import whatsapp from "../../images/whatsapp-logo.svg";
import instagram from "../../images/instagram-logo.svg";
import email from "../../images/email.svg";
import phone from "../../images/phone.svg";

function Footer() {
  return (
    <div>
      <section className=" bg-[#0894DE] text-white py-12">
        <div className="max-width-container grid place-items-start grid-cols-1 gap-[2rem] md:gap-[14rem] md:grid-cols-3 ">
          <div>
            <p className="text-[18px] md:text-[24px] font-bold">QUICK LINKS</p>
            <Link to="/">
              <p className="hover:text-[#000]">▶ Home</p>
            </Link>
            <Link to="/about">
              <p className="hover:text-[#000]">▶ About Us</p>
            </Link>
            <Link to="">
              <p className="hover:text-[#000]">▶ Shipping Policy</p>
            </Link>
            <Link to="">
              <p className="hover:text-[#000]">▶ Refund Policy</p>
            </Link>
            <Link to="">
              <p className="hover:text-[#000]">▶ Terms and Conditions</p>
            </Link>
            <Link to="/contact">
              <p className="hover:text-[#000]">▶ Book Free Consultation</p>
            </Link>
          </div>

          <div>
            <p className="text-[18px] md:text-[24px] font-bold">SERVICES</p>
            <Link to="/services/itinfrastructure">
              <p className="hover:text-[#000]">▶ IT Infrastructure</p>
            </Link>
            <Link to="/services/dataprocessing">
              <p className="hover:text-[#000]">▶ Data Processing</p>
            </Link>
            <Link to="/services/webdevelopment">
              <p className="hover:text-[#000]">▶ Web Development</p>
            </Link>
            <Link to="/services/e-commerce">
              <p className="hover:text-[#000]">▶ E-Commerce</p>
            </Link>
            <Link to="/services/customersupport">
              <p className="hover:text-[#000]">▶ Customer Support</p>
            </Link>
            <Link to="/services/marketing">
              <p className="hover:text-[#000]">▶ Marketing</p>
            </Link>
          </div>
          <div className="grid place-items-start">
            <p className="text-[18px] md:text-[24px] font-bold">GET IN TOUCH</p>
            <div className="grid grid-cols-5 place-items-start gap-2 my-2 md:my-5">
              <div>
                <a
                  href="https://www.facebook.com/swevextech?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="hover:bg-[#4267B2] hover:rounded-2xl rounded md:w-[35px] md:rounded-md"
                    src={facebook}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/Swevextech?t=IZsxe0uSsIhp3Fy1cIz38Q&s=08"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="hover:bg-[#1DA1F2] hover:rounded-2xl rounded md:w-[35px] md:rounded-md"
                    src={twitter}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://instagram.com/swevextech?igshid=ZDdkNTZiNTM="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="hover:bg-[#E4405F] hover:rounded-2xl rounded md:w-[35px] md:rounded-md"
                    src={instagram}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/swevex-tech-solution/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="hover:bg-[#0A66C2] hover:rounded-2xl rounded md:w-[35px] md:rounded-md"
                    src={linkedin}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/9431567503"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="hover:bg-[#25D366] hover:rounded-2xl rounded md:w-[35px] md:rounded-md"
                    src={whatsapp}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <img className="" src={phone} alt="" />
              </div>
              <div>
                <p className="font-medium">+91 9431567503</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <img className="" src={email} alt="" />
              </div>
              <div>
                <p className="font-medium">
                  <a href="mailto: director@swevextech.com">
                    director@swevextech.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex justify-center items-center ">
        <div className="text-[8px] my-1 md:text-[24px]">
          © 2020 SWEVEX TECH SOLUTION (OPC) PRIVATE LIMITED. All Rights Reserved
        </div>
      </section>
    </div>
  );
}

export default Footer;
