import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";

function ApplyForm() {
  let params = useParams()
  const intialValue = {
    name: '',
    email: '',
    phone: '',
    jobRole: '',
    resume: '',
  }

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    handleBlur: false,
    handleChange: false,
    initialValues: intialValue,
    // validate: registerValidate,
    onSubmit: (values) => {
      console.log(values)


    }
  })
  return (
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
        {intialValue.resume}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          values={values.phone}
          className=" h-[40px] bg-[#d9d9d9] p-2 hover:border-1 border-black"
          type="tel"
          name="phone"
        />
        <p className="font-extralight">
          JOB ROLE <span className="text-[#FF0000]">*</span>
        </p>
        <select
          onChange={handleChange}
          onBlur={handleBlur}
          values={values.jobRole}
          className=" h-[40px] bg-[#d9d9d9] p-2 hover:border-1 border-black"
          name="jobRole">
          <option value="" selected disabled hidden>{params.id}</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Technical">Technical</option>
        </select>
        <p className="font-extralight">
          UPLOAD YOUR RESUME <span className="text-[#FF0000]">*</span>
        </p>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          values={values.resume}
          className="mb-4"
          type="file"
          name="resume" />
        <button type="submit"
          className="h-[60px] bg-[#0894DE] text-white text-[30px] font-extralight">
          APPLY
        </button>
      </form>
    </div>
  );
}

export default ApplyForm;
{
  /* <div className="max-width-container flex flex-col gap-4 py-8 md:w-[60%] ">
      <div className="md:flex md:justify-between">
        <div className="flex flex-col">
          <p>YOUR NAME:</p>
          <input className="bg-[#D9D9D9] h-[40px] p-2" type="text" />
        </div>
        <div className="flex flex-col">
          <p>YOUR EMAIL:</p>
          <input className="bg-[#D9D9D9] h-[40px] p-2" type="email" />
        </div>
      </div>
      <div className="md:flex md:justify-between">
        <div className="flex flex-col">
          <p>YOUR PHONE:</p>
          <input className="bg-[#D9D9D9] h-[40px] p-2" type="tel" />
        </div>
        <div className="flex flex-col">
          <p>JOB ROLE:</p>
          <select className="bg-[#d9d9d9] h-[40px] px-2 ">
            <option value="">SALES</option>
            <option value="">MARKETING</option>
            <option value="">TECHNICAL</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <p>UPLOAD YOUR RESUME:</p>
        <input className="bg-[#D9D9D9] h-[45px] p-2" type="file" />
      </div>
      <button
        className="bg-[#0894DE] p-2 text-white text-2xl font-extralight "
        type="submit"
      >
        APPLY
      </button>
    </div> */
}
