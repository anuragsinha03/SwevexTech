import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidation } from "../../helper/Validation";
import { handleAuthVerification, handleLogin } from "../../api/endpointApi";

function Login() {
  const Navigate = useNavigate();
  useEffect(() => {
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
    <div className="Login | flex justify-center items-center h-[100vh] bg-[#909090]">
      <form
        className="loginContainer | flex flex-col gap-4 bg-[#575757] w-[90%] md:w-[50%] justify-center items-center py-32 rounded-[45px] shadow-[10px_10px_0px_rgba(27,27,27,0.3)] "
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-center font-bold text-[#d9d9d9]">
          DBA LOGIN &lt;<span className="text-[#FF0000]">/</span>&gt;
        </h1>
        <div className="login-username-input flex flex-col w-[80%] md:w-[60%]">
          <label htmlFor="username" className="uppercase text-white">
            Username
          </label>
          <input
            type="text"
            name="username"
            className=" h-[40px] bg-[#d9d9d9] p-2 hover:border-1 hover:border-black"
            onChange={handleChange}
            values={values.username}
          />
        </div>
        <div className="login-password-input | flex flex-col w-[80%] md:w-[60%]">
          <label htmlFor="Password" className="uppercase text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="h-[40px] bg-[#d9d9d9] p-2 hover:border-1 hover:border-black "
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <button
          type="submit"
          className="bg-[#404040] w-[80%] md:w-[60%] py-4 h-[60px] | text-white uppercase hover:bg-[#000]"
        >
          {" "}
          Login
        </button>
        <Link to="#" className="uppercase text-white hover:underline">
          change password?
        </Link>
      </form>
    </div>
  );
}

export default Login;
