import React from "react";
import Navbar from "../home/Navbar";
import ithero from "../../images/it-service-hero.svg";
import img1 from "../../images/it-infrastructure-img1.svg";
import img2 from "../../images/it-infrastructure-img2.svg";
import Footer from "../home/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatWithUs from "../home/ChatWithUs";
function ItInfrastructure() {
  return (
    <main>
      <Navbar />
      <img
        data-aos="fade-down"
        data-aos-delay="150"
        className="w-full"
        src={ithero}
        alt=""
      />
      <div className="flex justify-center ">
        <span className="services-border | relative font-medium text-2xl mt-12">
          IT INFRASTRUCTURE
        </span>
      </div>
      <div className="max-width-container my-6 text-[10px] border-l-[15px] border-[#0894DE] pl-2 leading-tight font-extralight md:text-[24px] md:border-l-[30px]">
        <p className="">
          IT Infrastructure is essential in every single decision associated
          with your company. In todays fast paced digitally powered world, many
          would shudder to think of a day without technology. A world without
          technology would be a place without convenience, ease and comfort.
          Information Technology is the spine of the modern world and its
          various service solutions that leverage and integrate technology for
          enabling ease and swiftness to rendering solutions. The day is not far
          when technology will actually allow one to download food from the
          Internet and consume it.Highly efficient IT Infrastructure planning,
          management, and support are necessary to ensure that your IT & Enabled
          Applications & Services are working with high availability,
          scalability, and security.
        </p>
        <p className="font-medium">Our IT Infrastructure Services include -</p>
        <ul>
          <li>▶ Server Setup and Support</li>
          <li>▶ Server Management Services</li>
          <li>▶ IT Infrastructure Security Services</li>
          <li>▶ 24/7 Technical Support</li>
        </ul>
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
            Our various ingenious IT Solutions are designed specifically keeping
            mind the needs and requirements of the service and manufacturing
            industries based. Our unique IT Outsourcing Services allows us to
            act as the artificial intelligence partners for our prestigious
            clients, generating precious service features to automate and
            monitor work flow processes at affordable costs. However what makes
            Swevex Tech stand out in the face of competition is the ability
            complements our IT Services with value added services that not only
            deliver subsidiary processes to satisfaction but also make them grow
            as individual functional areas.
          </p>
        </div>
      </div>

      <div className="max-width-container flex flex-col md:flex-row-reverse md:gap-8">
        <img
          data-aos="zoom-out-up"
          data-aos-delay="100"
          className="md:w-[300px]"
          src={img2}
          alt=""
        />

        <div className="">
          <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
            Our analytics and development team is constantly reinventing our
            existing IT services and expanding the service line or refreshing
            them to offer the latest and upgraded features to our clients and
            partners. Equipped with the best of training facilities,
            infrastructure and latest technology, Swevex Tech is truly suited to
            ably support its various overseas partners by delivering nothing
            short of world class solutions at cost effective rates, continuously
            and consistently.
          </p>
        </div>
      </div>
      <ChatWithUs />
      <Footer />
    </main>
  );
}
AOS.init();
export default ItInfrastructure;
