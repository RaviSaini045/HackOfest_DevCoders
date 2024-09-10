import CreatePaaaword from "./CreatePassword";
import Popup from "reactjs-popup"
import { IoMdCloseCircle } from "react-icons/io";
import bgImg from '../assets/signup_doodle.svg'
import { useEffect, useRef, useState } from "react";
import { generateResetPasswordToken } from "../services/operations/authAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const ForgotPassword = ({close}) => {

   

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      email: "",
   });
   

   const emailRef = useRef(null);

   const handleChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    };

   const handelForgetPassword=()=>{
      dispatch(generateResetPasswordToken(formData.email,navigate));
   }

   return (
    <>
       <div className="bg-kaddu-200 w-screen h-[400px] md:w-[500px] rounded-xl shadow-2xl p-8"  style={{ backgroundImage: `url(${bgImg})` }}>
               <div className= ""><IoMdCloseCircle className="w-10 h-10 absolute top-2 right-2" onClick={()=> close()}/></div>
                <div className="flex-col justify-center items-center">
                  <div className=" flex justify-center font-bold text-2xl m-2 p-2">Forgot Password</div>
                  <div className="font-semibold flex justify-center mt-12">Enter Your Register Email Id</div>
                  <div className="flex justify-center items-center mb-10">
                     <input 
                        className="rounded-lg m-2 p-2 place-content-center"
                        ref={emailRef}
                        required 
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                     ></input>
                  </div>
                  <Popup trigger={
                           <div className="flex justify-center">
                           <button 
                              className="bg-black text-white rounded-lg m-2 p-2" 
                              onClick={handelForgetPassword}
                           >
                              Next
                           </button>
                        </div>}
                           modal nested>
                                 {
                                       close => (
                                          <CreatePaaaword close = {close} />
                                       )}
                  </Popup>
                </div>

       </div>
    </>
   );
};

export default ForgotPassword ;