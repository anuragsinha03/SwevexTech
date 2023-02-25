import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../home/Navbar";
import ServicesHero from "./ServicesHero";
import ServicesPageData from "./ServicesPageData";

function ServiceTemplate() {
  const params = useParams();

  const ServicesPage = ServicesPageData.filter((value) => {
    return value.title == params.id;
  });

  return (
    <div>
      <Navbar page="services" />
      {ServicesPage.map((value) => {
        return (
          <div>
            <ServicesHero
              img1={value.img1}
              title={value.title}
              para1={value.para1}
              pointDes={value.pointDes}
              point1={value.point1}
              point2={value.point2}
              point3={value.point3}
              point4={value.point4}
              point5={value.point5}
              point6={value.point6}
              point7={value.point7}
              point8={value.point8}
              point9={value.point9}
              img2={value.img2}
              para2={value.para2}
              img3={value.img3}
              para3={value.para3}
              cardTitle1={value.cardTitle1}
              cardTitle2={value.cardTitle2}
              cardTitle3={value.cardTitle3}
              cardDes1={value.cardDes1}
              cardDes2={value.cardDes2}
              cardDes3={value.cardDes3}
              amazon={value.amazon}
              flipkart={value.flipkart}
              meesho={value.meesho}
              paytm={value.paytm}
              snapdeal={value.snapdeal}
              ebay={value.ebay}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ServiceTemplate;
