import React from "react";
import Navbar from "../home/Navbar";
import webhero from "../../images/webdev-img1.svg";
import img1 from "../../images/webdev-img2.svg";
import success from "../../images/success.svg";
import Footer from "../home/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatWithUs from "../home/ChatWithUs";
function WebDevelopment() {
  return (
    <main>
      <Navbar />
      <img
        data-aos="fade-down"
        data-aos-delay="150"
        className="w-full"
        src={webhero}
        alt=""
      />
      <div className="flex justify-center ">
        <span className="services-border | relative font-medium text-2xl mt-12">
          WEB DEVELOPMENT
        </span>
      </div>
      <div className="max-width-container my-6 text-[10px] border-l-[15px] border-[#0894DE] pl-2 leading-tight font-extralight md:text-[24px] md:border-l-[30px]">
        <p className="">
          Swevex Tech offers a huge variety of web development services. We work
          closely with our customers to create high-performing and secure custom
          websites. Our expert developers have lots of experience understanding
          your project requirements and delivering a project that meets your
          needs. We will be happy to assist you in offering a strong online
          presence. We have been serving businesses with user-centric designs
          with a combination of minimalistic and alluring visuals. Our
          professional design team includes user-experience and conversion rate
          optimization specialists who can create awesome websites that look
          good and are simple to use for you and your website visitors.
        </p>
      </div>
      <div className="max-width-container flex flex-col md:flex-row md:gap-8">
        <img
          data-aos="zoom-out-up"
          data-aos-delay="100"
          className="md:w-[300px]"
          src={img1}
          alt=""
        />
        <div>
          <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
            Businesses are in the race of making their presence on Google and
            the new ones are getting started from an online business before
            getting a physical office to run it. Because at this speedy time
            people are bending towards the internet before facing the market,
            they search well on their smartphone. An online business needs a
            website that tells your brand name and what products or services you
            are offering. It reduces the time of introducing yourself to the
            customers they visit your website and check out the information on
            their own. Hence not only do we have the capacity to work across a
            large range of open source and custom designed website, mobile
            applications and software, but we also have great depths in creating
            and designing visual solutions.
          </p>
        </div>
      </div>

      <div className="max-width-container flex flex-col md:flex-row-reverse md:gap-8">
        {/* <img className="md:w-[300px]" src={img2} alt="" /> */}

        <div className="">
          <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center place-items-center">
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="grid place-items-center  border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px] py-6 px-2 md:py-12 md:px-4 hover:shadow-2xl border-l-[20px] border-l-[#0894DE]"
              >
                <div className="font-medium flex gap-4 ">
                  <img className="w-[10px] md:w-[25px]" src={success} alt="" />
                  <p>Better Quality</p>
                </div>
                <p>
                  Swevex Tech has the professionals that deliver high-end
                  quality work processes in less time, at a lower cost than
                  increase the meter of sales, and reduce the costs.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="grid place-items-center border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px] py-6 px-2 md:py-12 md:px-4 hover:shadow-2xl border-l-[20px] border-l-[#0894DE]"
              >
                <div className="font-medium flex gap-4 ">
                  <img className="w-[10px] md:w-[25px]" src={success} alt="" />
                  <p>Access to the Technology</p>
                </div>
                <p>
                  Our trained experts are capable of doing work with any
                  technology consuming less time to complete work without
                  compromising the quality.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="grid place-items-center border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px] py-6 px-2 md:py-12 md:px-4 hover:shadow-2xl border-l-[20px] border-l-[#0894DE]"
              >
                <div className="font-medium flex gap-4 ">
                  <img className="w-[10px] md:w-[25px]" src={success} alt="" />
                  <p>Risk Reduction Factor</p>
                </div>
                <p>
                  When you hire outsourcing services the risk factor reduces as
                  the off-shore partner has the professionals that have
                  experience of years in the same type of projects.
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>
      <ChatWithUs />
      <Footer />
    </main>
  );
}
AOS.init();
export default WebDevelopment;
