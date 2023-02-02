import React from "react";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import ApplyForm from "./ApplyForm";

function Apply() {
  return (
    <div>
      <section>
        <Navbar page="careers" />
        <div className="flex justify-center ">
          <span className="services-border | relative font-medium text-2xl mt-4">
            JOIN US
          </span>
        </div>

        <ApplyForm />
        <Footer />
      </section>
    </div>
  );
}

export default Apply;
