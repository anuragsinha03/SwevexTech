import React from "react";
import Footer from "../home/Footer";

function ServicesHero(props) {
  console.log(props);
  return (
    <div>
      <section>
        <img className="w-full" src={props.img1} alt="" />
        <div className="flex justify-center ">
          <span className="services-border | relative font-medium text-2xl mt-12">
            {props.title}
          </span>
        </div>

        <div className="max-width-container my-6 text-[10px] border-l-[15px] border-[#0894DE] pl-2 leading-tight font-extralight md:text-[24px] md:border-l-[30px]">
          <p className="">{props.para1}</p>
          <p className="font-medium">{props.pointDes}</p>
          <ul>
            <li> {props.point1}</li>
            <li> {props.point2}</li>
            <li> {props.point3}</li>
            <li> {props.point4}</li>
            <li> {props.point5}</li>
            <li> {props.point6}</li>
            <li> {props.point7}</li>
            <li> {props.point8}</li>
            <li> {props.point9}</li>
          </ul>
        </div>

        <div className="max-width-container flex flex-col md:flex-row md:gap-8">
          <img className="md:w-[300px]" src={props.img2} alt="" />
          <div>
            <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
              {props.para2}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 place-items-center">
          <img className="w-[150px]" src={props.amazon} alt="" />
          <img className="w-[150px]" src={props.flipkart} alt="" />
          <img className="w-[150px]" src={props.meesho} alt="" />
          <img className="w-[150px]" src={props.snapdeal} alt="" />
          <img className="w-[150px]" src={props.paytm} alt="" />
          <img className="w-[150px]" src={props.ebay} alt="" />
        </div>

        <div className="max-width-container flex flex-col md:flex-row-reverse md:gap-8">
          {/* <img className="md:w-[300px]" src={props.img3} alt="" /> */}

          <div className="">
            <p className=" my-4 text-[10px] leading-tight font-extralight md:text-[24px]">
              {props.para3}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center place-items-center">
                <div className="grid place-items-center  border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px]">
                  <img src={props.cardImg1} alt="" />
                  <p className="font-medium  ">{props.cardTitle1}</p>
                  <p>{props.cardDes1}</p>
                </div>
                <div className="grid place-items-center border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px]">
                  <img src={props.cardImg2} alt="" />
                  <p className="font-medium ">{props.cardTitle2}</p>
                  <p>{props.cardDes2}</p>
                </div>
                <div className="grid place-items-center border-[1px] border-black w-[60%] md:w-[100%]   rounded-lg md:h-[300px]">
                  <img src={props.cardImg3} alt="" />
                  <p className="font-medium ">{props.cardTitle3}</p>
                  <p>{props.cardDes3}</p>
                </div>
              </div>
            </p>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default ServicesHero;
