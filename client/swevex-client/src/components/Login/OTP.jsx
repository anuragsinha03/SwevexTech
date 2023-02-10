import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import forgotpassword from "../../images/forgotpassword.png";
import back from "../../images/back.svg";
import { validateOTP } from "../../api/endpointApi";


async function handleOTP(e, otp, navigate) {
  e.preventDefault();
  try {
    const response = await validateOTP(otp)
    localStorage.setItem("changePasswordToken", response.data.sendToken)
    navigate("change-password")
  } catch (error) {
    console.log(error)
  }
}

function OTP() {
  const [otp, setOtp] = useState();
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <section className="  flex flex-col justify-center items-center gap-5 px-4 py-8 rounded-lg">
        <img className="w-[50px] md:w-[70px]" src={forgotpassword} alt="" />
        <div className="flex flex-col justify-center items-center">
          {" "}
          <h1 className="text-2xl font-bold">VERIFY OTP</h1>
          <p className="text-sm font-extralight text-[#707070]">
            We've sent an OTP to the entered authorised email!
          </p>
        </div>

        <form className="flex flex-col w-full gap-2" onSubmit={(e) => handleOTP(e, otp, navigate)}>
          <label htmlFor="otp" className="font-medium text-sm">
            OTP
          </label>
          <input
            className=" text-sm border-[1px] border-[#707070] p-2 rounded"
            type="text"
            placeholder="Enter One-Time Passsword"
            onChange={(e) => { setOtp(e.target.value) }}
          />
          <button className="w-full h-[40px] bg-[#0894DE] hover:bg-[#007abc] text-white flex justify-center items-center">
            Verify OTP
          </button>
        </form>
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

export default OTP;
