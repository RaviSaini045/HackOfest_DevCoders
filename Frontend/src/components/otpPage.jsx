import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import Popup from "reactjs-popup";
import bgImg from "../assets/signup_doodle.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOTP, signUp } from "../services/operations/authAPI";

const OtpPage = ({ close, useremail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUp(
        {
          signup,
          otp,
          // avatar
        },
        navigate
      )
    );
  };

  const handelResend = () => {
    sendOTP();
    dispatch(sendOTP(useremail, navigate));
    setIsDisabled(true);
    setTimer(15);
  };
  const maskedEmail = (email) => {
    const [name, domain] = email.split("@");
    const masked =
      name.length > 8 ? name.slice(0, 3) + "*****" + name.slice(-3) : name;
    return `${masked}@${domain}`;
  };
  console.log("optpage", useremail);
  const [otp, setOtp] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((perv) => perv - 1);
      }, 1000);
    } else {
      setTimer(0);
      setIsDisabled(false);
    }
    return () => clearInterval(interval);
  }, [timer]);
  return (
    <>
      <div
        className="w-[90%] mx-auto md:w-[400px] h-[550px] bg-kaddu-200 shadow-2xl rounded-lg "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="font-bold text-3xl p-5 flex justify-center">
          Enter OTP
        </div>
        <div className="flex justify-center m-10">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={
              <span
                style={{
                  display: "none",
                }}
              >
                {" "}
              </span>
            }
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              fontSize: "20px",
              fontWeight: "bold",
              border: "1px solid black",
              width: "2.5rem",
              height: "2.5rem",
              marginLeft: "10px",
            }}
          />
        </div>

        {/* <div className="flex justify-center text-center m-5 p-5 font-bold">
            OTP has been sent to your Registered email Id 
                       saini*****045@gmail.com
            </div> */}
        <div className=" text-center m-5 p-5">
          <p>OTP has been sent to your Registered email Id</p>
          <p className="font-semibold mx-1">{maskedEmail(useremail)}</p>
        </div>
        <div className="m-4 flex justify-center items-center">
            <button
            onClick={handelResend}
            disabled={isDisabled}
            className={`text-blue-400 font-semibold  text-xl  flex justify-center outline-none ${isDisabled ? 'cursor-not-allowed' : 'hover:text-blue-700'}`}
            >
            Resend
            </button>

        </div>

        <form onSubmit={handleSubmit}>
          <div className="m-5 p-5 flex justify-center">
            <button
              className="bg-black text-white m-2 p-2 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OtpPage;
