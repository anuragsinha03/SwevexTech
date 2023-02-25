import React from "react";
import Navbar from "../home/Navbar";
import ecommhero from "../../images/ecomm-img1.svg";
import img1 from "../../images/ecomm-img2.svg";
import img2 from "../../images/ecomm-img3.svg";
import amazon from "../../images/amazon-logo.svg";
import flipkart from "../../images/flipkart.svg";
import snapdeal from "../../images/snapdeal.svg";
import meesho from "../../images/meesho.svg";
import paytm from "../../images/paytm.svg";
import ebay from "../../images/ebay.svg";
import success from "../../images/success.svg";
import Footer from "../home/Footer";

function Ecommerce() {
  return (
    <main>
      <Navbar />
      <img className="w-full" src={ecommhero} alt="" />
      <div className="flex justify-center ">
        <span className="services-border | relative font-medium text-2xl mt-12">
          E-COMMERCE
        </span>
      </div>
      <div className="max-width-container my-6 text-[10px] border-l-[15px] border-[#0894DE] pl-2 leading-tight font-extralight md:text-[24px] md:border-l-[30px]">
        <p className="">
          Swevex Tech is here to help you fly in the world of online retail with
          its managed catalog service for e-commerce like; Amazon, Flipkart,
          Etsy ,Meesho, Snapdeal, PayTM , Shopclues, Voonik, Craftsvilla,
          Limeroad, Pepperfry, Ebay, all online marketplaces in India. As the
          leading provider of catalogue service in India and Global. We have the
          expertise, experience and knowledge of how marketplaces work and a
          deep understanding of what online buyers require of online product
          sellers
        </p>
      </div>
      <div className="max-width-container flex flex-col md:flex-row md:gap-8">
        <img className="md:w-[300px]" src={img1} alt="" />
        <div>
          <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
            If you join these or some of these marketplaces as a seller, will
            see a huge boost in your business revenues. Among other things you
            would need to have a superb, user friendly and appealingly striking
            e-catalogues. This is where Swevex Tech proves to be your friend. We
            set you off to a running start with superb online customized
            catalogues. Focus on selling while we take care of the presentation
            and online selling e-commerce account management service
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 place-items-center">
        <img className="w-[150px]" src={amazon} alt="" />
        <img className="w-[150px]" src={flipkart} alt="" />
        <img className="w-[150px]" src={meesho} alt="" />
        <img className="w-[150px]" src={snapdeal} alt="" />
        <img className="w-[150px]" src={paytm} alt="" />
        <img className="w-[150px]" src={ebay} alt="" />
      </div>

      <div className="max-width-container flex flex-col md:flex-row-reverse md:gap-8">
        {/* <img className="md:w-[300px]" src={img2} alt="" /> */}

        <div className="">
          <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center place-items-center">
              <div className="grid place-items-center  border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px] py-6 px-2 md:py-12 md:px-4 hover:shadow-2xl border-l-[20px] border-l-[#0894DE]">
                <div className="font-medium flex gap-4 ">
                  <img className="w-[10px] md:w-[25px]" src={success} alt="" />
                  <p>Ecommerce Consulting</p>
                </div>
                <p>
                  Increase your ROI by taking your business online with a full
                  proof success blueprint by our experts team.
                </p>
              </div>
              <div className="grid place-items-center border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px] py-6 px-2 md:py-12 md:px-4 hover:shadow-2xl border-l-[20px] border-l-[#0894DE]">
                <div className="font-medium flex gap-4 ">
                  <img className="w-[10px] md:w-[25px]" src={success} alt="" />
                  <p>Account Management</p>
                </div>
                <p>
                  We effectively manage your seller account (Amazon, Flipart,
                  Meesho & Many More Ecommerce platforms)
                </p>
              </div>
              <div className="grid place-items-center border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px] py-6 px-2 md:py-12 md:px-4 hover:shadow-2xl border-l-[20px] border-l-[#0894DE]">
                <div className="font-medium flex gap-4 ">
                  <img className="w-[10px] md:w-[25px]" src={success} alt="" />
                  <p>Cataloging & Product Listing</p>
                </div>
                <p>
                  Organize catalogs and list products with variations, relevant
                  content, and targeted keyword advertising on Ecommerce
                  platforms
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Ecommerce;
