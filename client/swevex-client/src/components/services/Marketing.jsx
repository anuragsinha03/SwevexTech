import React from "react";
import Navbar from "../home/Navbar";
import marketinghero from "../../images/marketing-img1.svg";
import img1 from "../../images/marketing-img2.svg";
import img2 from "../../images/marketing-img3.svg";
import success from "../../images/success.svg";
import Footer from "../home/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatWithUs from "../home/ChatWithUs";
function Marketing() {
  return (
    <main>
      <Navbar />
      <img
        data-aos="fade-down"
        data-aos-delay="150"
        className="w-full"
        src={marketinghero}
        alt=""
      />
      <div className="flex justify-center ">
        <span className="services-border | relative font-medium text-2xl mt-12">
          MARKETING
        </span>
      </div>
      <div className="max-width-container my-6 text-[10px] border-l-[15px] border-[#0894DE] pl-2 leading-tight font-extralight md:text-[24px] md:border-l-[30px]">
        <p className="">
          Swevex is a full-service of SEO (Search Engine Optimization), SMM
          (Social Media Marketing), SEM (Search Engine Marketing), and DM
          (Digital Marketing); all these four are based on expanding the
          business digitally and will be available to people who seek company
          services. Most modern-era companies need to be ready with all of
          these, which enhance and enable the company's website to be visible to
          more audiences, eventually turning into a business. Digital marketing,
          also called online marketing, promotes brands to connect with
          potential customers using the internet and other forms of digital
          communication. This includes not only email, social media, and
          web-based advertising but also text and multimedia messages as a
          marketing channel provided by Swevex Tech.
        </p>
      </div>
      {/* <div className="max-width-container flex flex-col md:flex-row md:gap-8">
        <img
          data-aos="zoom-out-up"
          data-aos-delay="100"
          className="md:w-[300px]"
          src={img1}
          alt=""
        />
        <div>
          <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
            Swevex Tech helps businesses build their brand and increase their
            visibility among potential customers. By developing a comprehensive
            marketing plan and executing it effectively, we can help a business
            to generate leads, drive traffic to their website, and ultimately
            increase sales. By leveraging these services, businesses can gain a
            deeper understanding of their customers and optimize their marketing
            efforts for maximum impact.Online marketing has many benefits,
            including the ability to reach a wider audience, target specific
            demographics, measure results in real-time, and increase brand
            awareness and sales. With the rise of e-commerce and the increasing
            importance of online presence, online marketing has become an
            essential part of any business's overall marketing strategy.
          </p>
        </div>
      </div> */}

      {/* <div className="max-width-container flex flex-col md:flex-row-reverse md:gap-8">
        <img
          data-aos="zoom-out-up"
          data-aos-delay="100"
          className="md:w-[300px]"
          src={img2}
          alt=""
        />

        <div className="">
          <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
            Marketing strategies can be tailored to your specific needs, goals,
            and budget.For example, a company might conduct market research and
            develop a targeted advertising campaign. Alternatively, they may
            seek assistance with creating and implementing a social media
            strategy, or producing high-quality content such as blog posts,
            videos, or infographics. We can also help in market research,
            branding, advertising, public relations, social media, email
            marketing, search engine optimization, and content creation. With
            the right guidance of Swevex Tech Solutions, businesses can benefit
            from expert guidance, cutting-edge technologies, and a customized
            approach that can help them stand out in a crowded marketplace.
          </p>
        </div>
      </div> */}
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
                  <p>Search Engine Optimization</p>
                </div>
                <p>
                  Looking to get more traffic on your website? Get started with
                  SEO services to skyrocket your visibility in Search Engine
                  where more than 90% traffic comes from. Get found on the web
                  with SEO.​
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="grid place-items-center border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px] py-6 px-2 md:py-12 md:px-4 hover:shadow-2xl border-l-[20px] border-l-[#0894DE]"
              >
                <div className="font-medium flex gap-4 ">
                  <img className="w-[10px] md:w-[25px]" src={success} alt="" />
                  <p>Search Engine Marketing</p>
                </div>
                <p>
                  97% of online experiences begin with a search engine, but 41%
                  of clicks go to the top three paid ads on the search results
                  page. Drive instant traffic to your website​
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="grid place-items-center border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px] py-6 px-2 md:py-12 md:px-4 hover:shadow-2xl border-l-[20px] border-l-[#0894DE]"
              >
                <div className="font-medium flex gap-4 ">
                  <img className="w-[10px] md:w-[25px]" src={success} alt="" />
                  <p>Social Media Marketing</p>
                </div>
                <p>
                  An average user spends more than 2 hours a day on the Social
                  Media Platforms like Facebook and Instagram. Make your
                  presence felt on Social Media and make the best of it. ​
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="grid place-items-center border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px] py-6 px-2 md:py-12 md:px-4 hover:shadow-2xl border-l-[20px] border-l-[#0894DE]"
              >
                <div className="font-medium flex gap-4 ">
                  <img className="w-[10px] md:w-[25px]" src={success} alt="" />
                  <p>Email Marketing​</p>
                </div>
                <p>
                  Execute on Every Possible Email Communication. Deliver Smart
                  Content. Start Now! Leverage Customer Data. Target Your
                  Audience. 1-to-1 Customer Journeys. Streamline & Send Emails.
                  Personalised Content.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="grid place-items-center border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px] py-6 px-2 md:py-12 md:px-4 hover:shadow-2xl border-l-[20px] border-l-[#0894DE]"
              >
                <div className="font-medium flex gap-4 ">
                  <img className="w-[10px] md:w-[25px]" src={success} alt="" />
                  <p>Content Marketing</p>
                </div>
                <p>
                  Content is the King! Create visually engaging, immersive
                  content to capture your audience’s attention. Blog in the
                  right format. Drive leads with your content with Content
                  Marketing Services.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="grid place-items-center border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px] py-6 px-2 md:py-12 md:px-4 hover:shadow-2xl border-l-[20px] border-l-[#0894DE]"
              >
                <div className="font-medium flex gap-4 ">
                  <img className="w-[10px] md:w-[25px]" src={success} alt="" />
                  <p>Digital Strategy</p>
                </div>
                <p>
                  Taking the digital route is the best way to make your business
                  stand out in the competitive. We create innovative digital
                  strategies that take your business to the next level.
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
export default Marketing;
