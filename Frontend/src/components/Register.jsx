import { useState, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Popup from "reactjs-popup";
import Avtar from "../assets/add_dp_icon.svg";
import Logo from "../assets/LOGO.svg";
import OtpPage from "./otpPage";
import { sendOTP } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignupData } from "../slices/authSlice";

const Register = ({ close }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    aadharCard: 0,
    password: "",
    phoneNumber: "",
    otp: "",
  });

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const aadharCardRef = useRef(null);
  const passwordRef = useRef(null);
  const roleRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSignupData(formData));
    dispatch(sendOTP(formData.email,navigate));
    console.log("submitted...");
    setOpen(false); // Close the Register popup
    setOtpOpen(true); // Open the OTP Page popup
  };

  const closeOtpPage = () => {
    setOtpOpen(false); // Close the OTP Page popup
    setOpen(true); // Open the Register popup
  };

  const [open, setOpen] = useState(false); // State for Register popup
  const [otpOpen, setOtpOpen] = useState(false); // State for OTP Page popup

  return (
    <>
      <div className="bg-pink-50 w-[500px] h-[550px] rounded-lg shadow-lg">
        <div className="flex justify-between">
          <div>
            <img className="h-[75px] w-[75px] pl-5" src={Logo} alt="Logo"></img>
          </div>
          <div>
            <IoMdCloseCircle className="w-8 h-8" onClick={close} />
          </div>
        </div>
        <div className="m-1 p-1 flex justify-center ">
          <img className="h-16 w-16 fixed pb-7 " src={Avtar} alt="Avatar" />
          <input
            type="file"
            className="opacity-0"
            onChange={handleChange}
          ></input>
        </div>

        <div className="flex justify-center ">
          <input
            className="rounded-lg text-center m-1 p-1 "
            ref={usernameRef}
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex justify-center ">
          <input
            ref={emailRef}
            className="rounded-lg text-center m-1 p-1"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex justify-center ">
          <input
            ref={nameRef}
            className="rounded-lg text-center m-1 p-1"
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex justify-center ">
          <input
            ref={aadharCardRef}
            className="rounded-lg text-center m-1 p-1"
            type="number"
            name="aadharCard"
            placeholder="Aadhar Card No"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex justify-center ">
          <input
            ref={passwordRef}
            className="rounded-lg text-center m-1 p-1"
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={handleChange}
          ></input>
        </div>

        <div className="flex justify-center m-2">
          <label className="font-semibold">
            Select Your Role:
            <select
              className="rounded-lg m-1 p-1"
              ref={roleRef}
              name="role"
              onChange={handleChange}
            >
              <option value="citizen">Citizen</option>
              <option value="government_officials">Government Officials</option>
              <option value="administrator">Administrator</option>
            </select>
          </label>
        </div>

        <div className="flex justify-center ">
          <form onSubmit={handleSubmit}>
            <button
              className="rounded-lg bg-black text-white m-2 p-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <Popup open={otpOpen} onClose={closeOtpPage} modal nested>
          {(close) => <OtpPage close={close} />}
        </Popup>

        <div className="flex justify-center ">
          <label>
            Already Have An Account ?
            <button
              className="text-blue-600 p-1 m-1 font-bold text-3xl"
              onClick={close}
            >
              Login
            </button>
          </label>
        </div>
      </div>
    </>
  );
};

export default Register;
