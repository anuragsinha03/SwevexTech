import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { contactFormValidate } from "../../helper/Validation";
import { ContactFormAPI } from "../../api/endpointApi.jsx";
function ContactForm() {
  const navigate = useNavigate();
  const intitialValue = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: intitialValue,
    validate: contactFormValidate,
    onSubmit: async (values) => {
      const responsePromise = ContactFormAPI(values);
      const response = await responsePromise;
      console.log(response);
      response.data.success
        ? navigate("/thankyou")
        : alert("Something wrong happened! Please go back");
    },
  });

  return (
    <div>
      <div className="flex justify-center my-4 ">
        <span className="services-border | relative font-medium text-2xl my-4">
          LET'S TALK!
        </span>
      </div>

      <div className="flex justify-center my-8 ">
        <form
          className="flex flex-col gap-2 w-[80%] md:w-[40%]"
          onSubmit={handleSubmit}
        >
          <p className="font-extralight">
            YOUR NAME <span className="text-[#FF0000]">*</span>
          </p>
          <div className="relative">
            {" "}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.name}
              className={
                errors.name
                  ? " h-[40px] w-full bg-[#d9d9d9] p-2 border-[1px] border-[#ff0000] outline-[#ff0000]"
                  : " h-[40px] w-full bg-[#d9d9d9] p-2"
              }
              type="text"
              name="name"
              placeholder=""
              required
            />
            {errors.name && (
              <div className="text-[10px] text-red-600 absolute bottom-0 right-0 px-2 py-1">
                {errors.name}
              </div>
            )}
          </div>

          <p className="font-extralight">
            YOUR EMAIL <span className="text-[#FF0000]">*</span>
          </p>
          <div className="relative">
            {" "}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.email}
              className={
                errors.email
                  ? " h-[40px] w-full bg-[#d9d9d9] p-2 border-[1px] border-[#ff0000] outline-[#ff0000]"
                  : " h-[40px] w-full bg-[#d9d9d9] p-2"
              }
              type="email"
              name="email"
              required
            />
            {errors.email && (
              <div className="text-[10px] text-red-600 absolute bottom-0 right-0 px-2 py-1">
                {errors.email}
              </div>
            )}
          </div>

          <p className="font-extralight">
            YOUR PHONE <span className="text-[#FF0000]">*</span>
          </p>
          <div className="relative">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.phone}
              className={
                errors.phone
                  ? " h-[40px] w-full bg-[#d9d9d9] p-2 border-[1px] border-[#ff0000] outline-[#ff0000]"
                  : " h-[40px] w-full bg-[#d9d9d9] p-2"
              }
              type="tel"
              name="phone"
              required
            />
            {errors.phone && (
              <div className="text-[10px] text-red-600 absolute bottom-0 right-0 px-2 py-1">
                {errors.phone}
              </div>
            )}
          </div>

          <p className="font-extralight">
            YOUR SUBJECT <span className="text-[#FF0000]">*</span>
          </p>
          <div className="relative">
            {" "}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.subject}
              type="text"
              className={
                errors.subject
                  ? " h-[40px] w-full bg-[#d9d9d9] p-2 border-[1px] border-[#ff0000] outline-[#ff0000]"
                  : " h-[40px] w-full bg-[#d9d9d9] p-2"
              }
              name="subject"
              required
            />
            {errors.subject && (
              <div className="text-[10px] text-red-600 absolute bottom-0 right-0 px-2 py-1">
                {errors.subject}
              </div>
            )}
          </div>

          <p className="font-extralight">
            YOUR MESSAGE <span className="text-[#FF0000]">*</span>
          </p>
          <div className="relative">
            <textarea
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.message}
              className={
                errors.message
                  ? "  w-full bg-[#d9d9d9] p-2 border-[1px] border-[#ff0000] outline-[#ff0000]"
                  : "  w-full bg-[#d9d9d9] p-2"
              }
              name="message"
              required
            />
            {errors.message && (
              <div className="text-[10px] text-red-600 absolute bottom-0 right-0 px-2 py-1">
                {errors.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="h-[60px] bg-[#0894DE] text-white text-[30px] font-extralight hover:bg-[#007abc]"
          >
            CONTACT
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
