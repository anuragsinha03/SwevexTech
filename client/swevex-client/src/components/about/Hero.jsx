import React from "react";
import aboutHero from "../../images/about-hero.svg";
import mission from "../../images/mission.svg";
import Affiliate from "../home/Affiliate";
import vision from "../../images/vision.svg";
import Connect from "../home/Connect";
import Footer from "../home/Footer";

function Hero() {
  return (
    <div>
      <section>
        <img className="w-full" src={aboutHero} alt="" loading="lazy" />
        <div className="flex justify-center ">
          <span className="services-border | relative font-medium text-2xl mt-12">
            ABOUT US
          </span>
        </div>

        <div className="max-width-container my-6 text-[10px] border-l-[15px] border-[#0894DE] pl-2 leading-tight font-extralight md:text-[24px] md:border-l-[30px]">
          <p className="">
            SWEVEX TECH SOLUTION is an independent IT and Business Process
            Outsourcing company. Incorporated in 2020 and headquartered in
            Ranchi, India, we have grown from a small Business Process
            Outsourcing to a prominent player with an impressive client list
            spanning many industries. The Business Process Outsourcing and IT
            services we provide assist organizations in doing that. The IT
            solutions we provide and the partnerships we have in place allow us
            to provide an end-to-end service that will help our clients meet
            these challenges head-on. What sets aside is our focus, vision, and
            capability to deliver. We offer key products and services, including
            Web, Integration, Consultancy, and Support Services. We are highly
            accredited, come highly recommended, and invest heavily in both
            product development and our first-class consultants. SWEVEX TECH
            SOLUTION is inspired by global competition, offering unlimited
            potential to let businesses bloom. We have the potential to succeed
            and be organized as the best in the market. We believe in offering
            creative technologies that help to transform client's business
            practices through:
          </p>
        </div>

        <div className="max-width-container flex flex-col md:flex-row md:gap-8">
          <img className="md:w-[50%]" src={mission} alt="" loading="lazy" />
          <div>
            <div className=" | relative font-medium text-2xl mt-4 border-b-[2px] border-black">
              OUR MISSION
            </div>
            <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
              To combine international best practices with top talent from India
              and worldwide to serve as a seamless extension of our customer's
              IT organization. Our commitment to your success is built on a
              strong foundation of industry expertise, continued innovation, and
              a shared set of core values:
              <ul>
                <li>➡ Teamwork</li>
                <li>➡ Clients Satisfaction</li>
                <li>➡ Passion and commitment</li>
                <li>➡ Personal responsibility for results</li>
                <li>➡ A conviction that simpler is better</li>
                <li>➡ Integrity and honesty in all of our relationships</li>
              </ul>
            </p>
          </div>
        </div>

        <Affiliate />

        <div className="max-width-container flex flex-col md:flex-row-reverse md:gap-8">
          <img className="md:w-[50%]" src={vision} alt="" loading="lazy" />
          <div className="text-right">
            <div className=" | relative font-medium text-2xl mt-4 border-b-[2px] border-black">
              OUR VISION
            </div>
            <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
              SWEVEX TECH SOLUTION aims to be the highest quality Business
              Process Outsourcing Worldwide for high-quality service delivering
              superior value to Customers, Shareholders, and Associates. We
              intend to help every one of our customers streamline their
              business operations and become a best-in-class enterprise. We'll
              accomplish this by valuing passion, innovation, and determination
              and by offering our customers a superior experience. Focusing our
              development and go-to-market efforts in our target industries,
              attaining world-class performance in each of our functional
              disciplines. We all share the responsibility to create a positive
              culture and promote equity, inclusion, and respect. We demonstrate
              trust and mutual support across our teams and work together to
              provide holistic services to our clients
            </p>
          </div>
        </div>

        <Connect />
        <Footer />
      </section>
    </div>
  );
}

export default Hero;
