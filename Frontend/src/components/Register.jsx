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
import bgImg from "../assets/signup_doodle.svg"

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
    dispatch(setSignupData({formData,avatar}));
    setUseremail(formData.email);
    dispatch(sendOTP(formData.email,navigate));
    console.log("submitted...");
    setOpen(false); // Close the Register popup
    setOtpOpen(true); // Open the OTP Page popup
  };

  const closeOtpPage = () => {
    setOtpOpen(false); // Close the OTP Page popup
    setOpen(true); // Open the Register popup
  };
  const [avatar,setAvatar] = useState(null);
  const [open, setOpen] = useState(false); // State for Register popup
  const [otpOpen, setOtpOpen] = useState(false); // State for OTP Page popup
  const [useremail,setUseremail]=useState(null);
  return (
    <>
      <div
        className="bg-kaddu-200 w-screen md:w-[500px] h-[600px] rounded-lg shadow-2xl"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex justify-between p-2">
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
            required
            className="opacity-0"
            onChange={(e) => {
                setAvatar(e.target.files[0]);
            }}
          ></input>
        </div>

        <div className="flex justify-center">
          <input
            className="rounded-lg text-center m-1 p-1 w-[65%]"
            required
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
            required
            className="rounded-lg text-center m-1 p-1 w-[65%]"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex justify-center ">
          <input
            ref={nameRef}
            required
            className="rounded-lg text-center m-1 p-1 w-[65%]"
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex justify-center ">
          <input
            ref={aadharCardRef}
            required
            className="rounded-lg text-center m-1 p-1 w-[65%]"
            type="number"
            name="aadharCard"
            placeholder="Aadhar Card No"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex justify-center ">
          <input
            ref={passwordRef}
            required
            className="rounded-lg text-center m-1 p-1 w-[65%]"
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={handleChange}
          ></input>
        </div>

        <div className="w-full flex justify-center items-center p-2">
          <label className="font-semibold w-32">
            Select Your Role:
          </label>
            <select
              className="rounded-lg m-2 h-8 relative"
              ref={roleRef}
              name="role"
              onChange={handleChange}
            >
              <option value="citizen">Citizen</option>
              <option value="government_officials">Government Officials</option>
              <option value="administrator">Administrator</option>
            </select>
        </div>

        <div className="flex justify-center p-3">
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
          {(close) => <OtpPage close={close} useremail={useremail}/>}
        </Popup>

        <div className="flex justify-center items-center p-4 w-full">
          <label className="flex w-48">
            Already Have An Account ?
          </label>
          <button
            className="text-blue-600 mx-4 font-bold text-xl"
            onClick={close}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
