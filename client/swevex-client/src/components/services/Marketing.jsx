import React from "react";
import Navbar from "../home/Navbar";
import marketinghero from "../../images/marketing-img1.svg";
import img1 from "../../images/marketing-img2.svg";
import img2 from "../../images/marketing-img3.svg";
import Footer from "../home/Footer";

function Marketing() {
  return (
    <main>
      <Navbar />
      <img className="w-full" src={marketinghero} alt="" />
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
      <div className="max-width-container flex flex-col md:flex-row md:gap-8">
        <img className="md:w-[300px]" src={img1} alt="" />
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
      </div>

      <div className="max-width-container flex flex-col md:flex-row-reverse md:gap-8">
        <img className="md:w-[300px]" src={img2} alt="" />

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
      </div>
      <Footer />
    </main>
  );
}

export default Marketing;
