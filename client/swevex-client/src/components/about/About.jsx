import React from "react";
import Navbar from "../home/Navbar";
import Hero from "../about/Hero";
import ChatWithUs from "../home/ChatWithUs";

function About() {
  return (
    <div>
      <Navbar page="about" />
      <Hero />
      <ChatWithUs />
    </div>
  );
}

export default About;
