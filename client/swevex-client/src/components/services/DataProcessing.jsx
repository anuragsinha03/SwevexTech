import React from "react";
import Navbar from "../home/Navbar";
import datahero from "../../images/data-processing-img1.svg";
import img1 from "../../images/data-processing-img2.svg";
import img2 from "../../images/data-processing-img3.svg";
import Footer from "../home/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatWithUs from "../home/ChatWithUs";

function DataProcessing() {
  return (
    <main>
      <Navbar />
      <img
        data-aos="fade-down"
        data-aos-delay="150"
        className="w-full"
        src={datahero}
        alt=""
      />
      <div className="flex justify-center ">
        <span className="services-border | relative font-medium text-2xl mt-12">
          DATA PROCESSING
        </span>
      </div>
      <div className="max-width-container my-6 text-[10px] border-l-[15px] border-[#0894DE] pl-2 leading-tight font-extralight md:text-[24px] md:border-l-[30px]">
        <p className="">
          Swevex Tech helps you with a variety of form-processing solutions. We
          are an India-based outsourcing company providing services to customers
          worldwide. Accuracy, security, confidentiality, and competitive
          pricing are our specialties. Data Processing Services helps you manage
          your information more efficiently, from which you can make strategic
          and important decisions. Data processing, which includes form
          processing, order processing, mailing list compilation, and other
          processing of business and organizational information, is a necessary
          but non-core aspect of business processes. Swevex Tech is a data
          processing domain specialist with the expertise to provide
          best-in-class data processing services.
        </p>
        <p className="font-medium">Data processing involves -</p>
        <ul>
          <li>▶ Selecting specific information from the source.</li>
          <li>▶ Processing it.</li>
          <li>▶ Presenting it in an easily accessible digital format.</li>
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
            It has a great advantage for many organizations because it allows a
            more effective method to retrieve information while protecting the
            data from loss or damage. At Swevex Tech, we have a resourceful,
            highly skilled, and dedicated team of workers. With their deep
            knowledge and unquestioned technical skills, we provide quality
            form-processing solutions designed to meet the individual needs of
            all our clients. Our state-of-the-art technology can handle both
            structured and non-structured versions of form processing. For
            businesses, nothing can be more valuable than customer satisfaction.
            This is so because business longevity can be extended only by
            keeping customers happy with the quality of support services and
            products. Since customers need instant responses to their queries
            every time, thus joining forces with established inbound call
            centers is indispensable.
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
            Swevex Tech offers a convincing case for ROI (return on investment),
            minus a lot of the risk inherent in setting up a complex operation
            that is not a core competency. Outsource your customer support to us
            and be assured that there will be professional and highly-qualified
            people handling your customers and providing good customer care
            service. For businesses, nothing can be more valuable than customer
            satisfaction. This is so because business longevity can be extended
            only by keeping customers happy with the quality of support services
            and products. Since customers' need instant response to their
            queries every time, thus joining forces with established inbound
            call centers is indispensable.
          </p>
        </div>
      </div>
      <ChatWithUs />
      <Footer />
    </main>
  );
}
AOS.init();
export default DataProcessing;
