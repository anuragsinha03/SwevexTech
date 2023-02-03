import React from "react";
import { useFormik } from "formik"
import { contactFormValidate } from "../../helper/Validation";
import { ContactFormAPI } from "../../api/endpointApi.jsx";
function ContactForm() {

  const intitialValue = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  }
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: intitialValue,
    validate: contactFormValidate,
    onSubmit: async (values) => {
      const responsePromise = ContactFormAPI(values);
      const response = await responsePromise;
      console.log(response);
    }
  })

  return (
    <div>
      <div className="flex justify-center my-4 ">
        <span className="services-border | relative font-medium text-2xl my-4">
          LET'S TALK!
        </span>
      </div>

      <div className="flex justify-center my-8 ">
        <form className="flex flex-col gap-2 w-[80%] md:w-[40%]" onSubmit={handleSubmit}>
          <p className="font-extralight">
            YOUR NAME <span className="text-[#FF0000]">*</span>
          </p>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.name}
            className=" h-[40px] bg-[#d9d9d9] p-2 hover:border-1 hover:border-black"
            type="text"
            name="name"
          />
          {errors.name && <div>{errors.name}</div>}
          <p className="font-extralight">
            YOUR EMAIL <span className="text-[#FF0000]">*</span>
          </p>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.email}
            className=" h-[40px] bg-[#d9d9d9] p-2 hover:border-1 border-black"
            type="email"
            name="email"
          />
          <p className="font-extralight">
            YOUR PHONE <span className="text-[#FF0000]">*</span>
          </p>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.phone}
            className=" h-[40px] bg-[#d9d9d9] p-2 hover:border-1 border-black"
            type="tel"
            name="phone"
          />
          <p className="font-extralight">
            YOUR SUBJECT <span className="text-[#FF0000]">*</span>
          </p>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.subject}
            type="text"
            className=" h-[40px] bg-[#d9d9d9] p-2 hover:border-1 border-black"
            name="subject"
          />
          <p className="font-extralight">
            YOUR MESSAGE <span className="text-[#FF0000]">*</span>
          </p>

          <textarea
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.message}
            className="h-[100px] bg-[#d9d9d9] p-2 mb-4 hover:border-1 border-black font-extralight hover:bg-[#007abc]"
            name="message"
          />
          <button
            type="submit"
            className="h-[60px] bg-[#0894DE] text-white text-[30px] font-extralight">
            CONTACT
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
