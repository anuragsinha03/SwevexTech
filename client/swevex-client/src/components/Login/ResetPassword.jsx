import React from "react";
import { Link } from "react-router-dom";
import forgotpassword from "../../images/forgotpassword.png";
import back from "../../images/back.svg";

function ResetPassword() {
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <section className="  flex flex-col justify-center items-center gap-5 px-4 py-8 rounded-lg">
        <img className="w-[50px] md:w-[70px]" src={forgotpassword} alt="" />
        <div className="flex flex-col justify-center items-center">
          {" "}
          <h1 className="text-2xl font-bold">
            FORGOT PASSWORD<span className="text-[#ff0000]">?</span>{" "}
          </h1>
          <p className="text-sm font-extralight text-[#707070]">
            No worries, We'll send you reset instructions
          </p>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="font-medium">
            EMAIL
          </label>
          <input
            className="text-sm border-[1px] border-[#707070] p-2 rounded"
            type="email"
            placeholder="Enter authorised email ID"
          />
        </div>
        <Link
          to="/resetpassword/otp"
          className="w-full h-[40px] bg-[#0894DE] hover:bg-[#007abc] text-white flex justify-center items-center"
        >
          Request OTP
        </Link>
        <Link to="/admin-login">
          <div className="flex gap-2">
            {" "}
            <img className="w-[15px]" src={back} alt="" />
            <p>Back to Login</p>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default ResetPassword;
