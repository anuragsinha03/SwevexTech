import React from "react";
import Navbar from "../home/Navbar";
import custhero from "../../images/customer-support-img1.svg";
import img1 from "../../images/customer-support-img2.svg";
import img2 from "../../images/customer-support-img3.svg";
import Footer from "../home/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatWithUs from "../home/ChatWithUs";
function CustomerSupport() {
  return (
    <main>
      <Navbar />
      <img
        data-aos="fade-down"
        data-aos-delay="150"
        className="w-full"
        src={custhero}
        alt=""
      />
      <div className="flex justify-center ">
        <span className="services-border | relative font-medium text-2xl mt-12">
          CUSTOMER SUPPORT
        </span>
      </div>
      <div className="max-width-container my-6 text-[10px] border-l-[15px] border-[#0894DE] pl-2 leading-tight font-extralight md:text-[24px] md:border-l-[30px]">
        <p className="">
          Swevex tech is a leading customer support service provider that knows
          how to develop its customers and maintain a rich bond with them. It
          does not matter whether you need inbound customer service or outbound
          customer service, our skilled team will provide you with tailored
          solutions accordingly. The key to customer retention is good customer
          service. Regardless of whichever industry one is a part of, customer
          care is of utmost importance. An increasing number of organizations
          are realizing that consumers are being pulled in different directions
          with growing competition, new technological innovations, and
          constantly improving services and products. It is vital to ensure that
          customer loyalty programs are an integral part of an organization.
          Acquiring new customers is important, but holding on to existing
          customers is crucial. After all, if existing customers are satisfied,
          they will help acquire new ones by spreading the news of your
          outstanding customer service.
        </p>
        <p className="font-medium">Our BPO Services Includes -</p>
        <ul>
          <li>▶ 24*7*365 Live Chat & Email Support</li>
          <li>▶ Inbound Call Center Services</li>
          <li>▶ Outbound Call Center Services</li>
          <li>▶ Back Office Solutions</li>
          <li>▶ Financing & Accounting Services</li>
          <li>▶ Data Entry and Processing Service</li>
          <li>▶ Web Research services</li>
          <li>▶ Market Research & Analysis</li>
          <li>▶ Telemarketing Service</li>
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
            Swevex Tech offers a convincing case for ROI (return on investment)
            minus a lot of the risk inherent in setting up a complex operation
            that is not a core competency. Outsource your customer support to us
            and be assured that there will be professional and highly-qualified
            people handling your customers and providing good customer care
            service. For businesses, nothing can be more valuable than customer
            satisfaction. This is so because business longevity can be extended
            only by keeping customers happy with the quality of support services
            and products. Since customers need an instant response to their
            queries every time, thus joining forces with established inbound
            call centers is indispensable
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
export default CustomerSupport;
