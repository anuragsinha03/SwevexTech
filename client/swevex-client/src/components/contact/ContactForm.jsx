import React from "react";

function ContactForm() {
  return (
    <div>
      <div className="flex justify-center my-4 ">
        <span className="services-border | relative font-medium text-2xl my-4">
          LET'S TALK!
        </span>
      </div>
      <div className="flex justify-center my-8 ">
        <section className="flex flex-col gap-2 w-[80%] md:w-[40%]">
          <p className="font-extralight">
            YOUR NAME <span className="text-[#FF0000]">*</span>
          </p>
          <input
            className=" h-[40px] bg-[#d9d9d9] p-2 hover:border-1 hover:border-black"
            type="text"
          />
          <p className="font-extralight">
            YOUR EMAIL <span className="text-[#FF0000]">*</span>
          </p>
          <input
            className=" h-[40px] bg-[#d9d9d9] p-2 hover:border-1 border-black"
            type="email"
          />
          <p className="font-extralight">
            YOUR PHONE <span className="text-[#FF0000]">*</span>
          </p>
          <input
            className=" h-[40px] bg-[#d9d9d9] p-2 hover:border-1 border-black"
            type="tel"
          />
          <p className="font-extralight">
            YOUR SUBJECT <span className="text-[#FF0000]">*</span>
          </p>
          <input
            type="text"
            className=" h-[40px] bg-[#d9d9d9] p-2 hover:border-1 border-black"
          />
          <p className="font-extralight">
            YOUR MESSAGE <span className="text-[#FF0000]">*</span>
          </p>
          <textarea className="h-[100px] bg-[#d9d9d9] p-2 mb-4 hover:border-1 border-black" />
          <button className="h-[60px] bg-[#0894DE] text-white text-[30px] font-extralight">
            CONTACT
          </button>
        </section>
      </div>
    </div>
  );
}

export default ContactForm;
