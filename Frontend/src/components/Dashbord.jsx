import Profile from "../assets/profile_icon.svg";
import Plant from "../assets/Plant_2.svg";
import Doodle from "../assets/Doodle.svg";
import Navbar from "./navbar";
import PhoneNavbar from "./PhoneSizeNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { updateIssue } from "../services/operations/issueAPI";
import { updatePassword } from "../services/operations/authAPI";
import { useNavigate } from "react-router";

const Dashbord = () => {
  
  const { userData } = useSelector((state) => state.auth);

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [formData, setFormData]=useState({
    oldPassword:"",
    newPassword:"",
 });

 const oldPassword = useRef(null);
 const newPassword = useRef(null);

 const handelChange=(e)=>{
  setFormData((perv)=>({
     ...perv,
     [e.target.name]: e.target.value,
  }));
}
const handelClick=()=>{
  dispatch(updatePassword(formData,navigate));
}
console.log(formData);
  return (
    <>
      <div className="flex">
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="lg:hidden">
          <PhoneNavbar />
        </div>

        <div className="p-4 flex flex-col items-center w-full overflow-y-auto pb-6">
          <div className="bg-white">
          <div className="flex text-center justify-center items-center p-2">
            <div>
              <img className="w-20 h-20 md:w-40 md:h-40" src={Profile}></img>{" "}
            </div>
            <div className="pt-3 pb-3">
              {/* <div className="text-2xl md:text-5xl">Alexendra Dardio</div> */}
              <div className="text-2xl md:text-5xl line-clamp-1">{userData.fullName}</div>
              {/* <div className="text-xl text-gray-500 md:text-5xl">@husnpari</div> */}
              <div className="text-xl text-gray-500 md:text-5xl line-clamp-1">
                @{userData.username}
              </div>
            </div>
          </div>
          <div className="w-full py-6 grid md:grid-cols-2 gap-6">
            <div className="p-1">
              <div className="flex justify-between items-center space-x-4">
                <label className="w-28">Full Name</label>
                <input
                  className="bg-pink-200 rounded-lg text-3xl w-full"
                  type="text"
                ></input>
              </div>
            </div>
            <div className="p-1">
              <div className="flex justify-between items-center space-x-4">
                <label className="w-28">Email</label>
                <input
                  className="bg-pink-200 rounded-lg text-3xl w-full"
                  type="email"
                ></input>
              </div>
            </div>
            <div className="p-1">
              <div className="flex justify-between items-center space-x-4">
                <label className="w-28">User Name</label>
                <input
                  className="bg-pink-200 rounded-lg text-3xl w-full"
                  type="text"
                ></input>
              </div>
            </div>
            <div className="p-1">
              <div className="flex justify-between items-center space-x-4">
                <label className="w-28">Address</label>
                <input
                  className="bg-pink-200 rounded-lg text-3xl w-full"
                  type="text"
                ></input>
              </div>
            </div>
            <div className="p-1">
              <div className="flex justify-between items-center space-x-4">
                <label className="w-32">Old Password</label>
                <input
                  className="bg-pink-200 rounded-lg text-3xl w-full"
                  ref={oldPassword}
                  name="oldPassword"
                  type="password"
                  onChange={handelChange}
                ></input>
              </div>
            </div>
            <div className="p-1">
              <div className="flex justify-between items-center space-x-4">
                <label 
                className="w-36"

                >New Password</label>
                <input
                  className="bg-pink-200 rounded-lg text-3xl w-full"
                  ref={newPassword}
                  type="password"
                  name="newPassword"
                  onChange={handelChange}
                ></input>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button 
            className="bg-black rounded-full mx-2 px-8 py-2 text-white text-lg item-center"
            onClick={handelClick}
            >

              Save
            </button>
          </div>
          </div>
        </div>
        <div className="absolute -z-10 bottom-36 md:bottom-16 right-5">
          <img
            className="h-[100px] w-[100px] md:h-[140px] md:w-[140px]"
            src={Plant}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
