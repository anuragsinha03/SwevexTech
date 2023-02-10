import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidation } from "../../helper/Validation";
import { handleAuthVerification, handleLogin } from "../../api/endpointApi";

function Login() {

  const Navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    let token = localStorage.getItem("authToken");
    if (token) {
      handleAuthVerification(token).then((response) => {
        if (response.response.data.success === true) {
          Navigate("/admin-dashboard");
        }
      });
      localStorage.clear();
    }
  });

  const initialValue = {
    username: "",
    password: "",
  };

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValue,
    validateOnBlur: false,
    validateOnChange: false,
    validate: loginValidation,
    onSubmit: async (values) => {
      const response = await handleLogin(values);
      if (response === "Invalid Credentials") {
        window.localStorage.clear();
        alert(response);
      }
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        Navigate("/admin-dashboard");
      }
    },
  });

  return (
    <div className="Login | flex justify-center items-center h-[100vh] ">
      <form
        className="loginContainer | flex flex-col gap-4  w-[90%] md:w-[50%] justify-center items-center py-32 rounded-[45px]  "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-center">
          {" "}
          <h1 className="text-2xl font-bold">
            DBA LOGIN &lt;<span className="text-[#FF0000]">/</span>&gt;
          </h1>
          <p className="text-[12px] md:text-sm font-extralight text-[#707070]">
            Log in to the admin console by entering valid credentials
          </p>
        </div>
        {/* <h1 className="text-3xl text-center font-bold text-[#000]">
          DBA LOGIN &lt;<span className="text-[#FF0000]">/</span>&gt;
        </h1> */}
        <div className="login-username-input flex flex-col w-[80%] md:w-[60%]">
          <label htmlFor="username" className="font-medium text-sm uppercase ">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className=" h-[40px] border-[1px] border-[#707070] p-2 rounded"
            onChange={handleChange}
            values={values.username}
          />
        </div>
        <div className="login-password-input | flex flex-col w-[80%] md:w-[60%]">
          <label htmlFor="Password" className="font-medium text-sm uppercase ">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="h-[40px] border-[1px] border-[#707070] p-2 rounded "
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <button
          type="submit"
          className="bg-[#0894DE] hover:bg-[#007abc] w-[80%] md:w-[60%] py-4 h-[60px] | text-white uppercase "
        >
          {" "}
          Login
        </button>
        <Link to="/reset-password" className="uppercase  hover:underline">
          change password?
        </Link>
      </form>
    </div>
  );
}

export default Login;
