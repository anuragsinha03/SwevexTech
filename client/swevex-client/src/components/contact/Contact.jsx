import React from "react";
import Navbar from "../home/Navbar";
import contact from "../../images/contact-hero.svg";
import location from "../../images/location.svg";
import email from "../../images/email.svg";
import phone from "../../images/phone.svg";
import ContactForm from "./ContactForm";
import Footer from "../home/Footer";
function Contact() {
  return (
    <div>
      <section>
        <Navbar page="contact" />
        <div>
          <img className="w-full" src={contact} alt="" />
          <div className="flex justify-center ">
            <span className="services-border | relative font-medium text-2xl my-6">
              GET IN TOUCH!
            </span>
          </div>
        </div>
        <div className="max-width-container my-6 text-[10px] border-l-[15px] border-[#0894DE] pl-2 leading-tight font-extralight md:text-[24px] md:border-l-[30px]">
          <p className="">
            At SwevexTECH, our mission is to drive business and bridge the
            divide between offshore locations by creating opportunity for profit
            without compromising on quality or amount of deliverables.{" "}
          </p>
        </div>

        <div className="max-width-container flex flex-col gap-2 my-6 text-[10px] border-l-[15px] border-black pl-2 leading-tight bg-[#d9d9d9] p-4 font-extralight md:text-[24px] md:border-l-[30px]">
          <div className="flex gap-2">
            <div>
              <img className="" src={location} alt="" />
            </div>
            <div>
              <p className="font-medium">
                SWEVEX TECH SOLUTION (OPC) PRIVATE LIMITED
              </p>
              <p className="font-extralight">Office No. 603, 6th Floor,</p>
              <p className="font-extralight">Estate Plaza, Old H.B. Road,</p>
              <p className="font-extralight">Kantatoli Chowk, Ranchi,</p>
              <p className="font-extralight">Jharkhand 834001,</p>
              <p className="font-extralight">India</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <img className="" src={email} alt="" />
            </div>
            <div>
              <p className="font-medium">swevex.director@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <img className="" src={phone} alt="" />
            </div>
            <div>
              <p className="font-medium">+91 9431567503</p>
            </div>
          </div>
        </div>
        <div className="max-width-container ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.6605869875902!2d85.34385490615993!3d23.364308163690637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4157ac4ffb5e5%3A0xaa7906d2dcb8730e!2sSwevex%20Tech%20Solution%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1675015407805!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
            className="w-[100%] h-[200px] md:h-[350px]"
          />
        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
