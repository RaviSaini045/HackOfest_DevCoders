import { IoMdCloseCircle } from "react-icons/io";
import bgImg from '../assets/signup_doodle.svg'
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { resetPassword } from "../services/operations/authAPI";

const CreatePaaaword = ({close}) => {

   const dispatch=useDispatch();
   const {resetPasswordtoken}=useSelector((state)=>state.auth)
   const navigate=useNavigate();

   const [formData, setFormData]=useState({
      password:"",
      cpassword:"",
   });

   const passwordRef = useRef(null);
   const cpasswordRef = useRef(null);

   const handelChange=(e)=>{
      setFormData((perv)=>({
         ...perv,
         [e.target.name]: e.target.value,
      }));
   }

   const handelClick=()=>{
      dispatch(resetPassword(formData,resetPasswordtoken,navigate));
   }
   return (
    <>
       <div className=" w-screen h-[400px] md:w-[500px] rounded-lg shadow-2xl bg-kaddu-200 p-8" style={{ backgroundImage: `url(${bgImg})` }} >
         <div><IoMdCloseCircle className="w-10 h-10 absolute top-2 right-2" onClick={()=> close()}/></div>
          <div className="flex flex-col justify-center items-center">
           <div className="font-bold text-2xl m-3 p-3 text-center"><h1>Forgot Password</h1></div>
            
            <div className="font-semibold mb-4">
               <label className="w-full block mb-2">
                  New Password :
               </label>
               <input 
                  className="p-2 rounded-lg" 
                  name="password"
                  type="password"
                  ref={passwordRef} 
                  placeholder="new password"
                  onChange={handelChange}
               ></input>
            </div>

            <div className="font-semibold mb-4">
               <label className="w-full block mb-2">
                  Confirm Password :
               </label>
               <input 
                  className="p-2 rounded-lg" 
                  type="password" 
                  name="cpassword"
                  onChange={handelChange}
                  ref={cpasswordRef}
                  placeholder="confirm password"
               ></input>
            </div>
          
           
           <div className="flex justify-center m-3">
            <button 
               className="bg-black text-white p-2 m-2 rounded-md" 
               onClick={handelClick}
            >Submit</button>
           </div>
          </div>

       </div>
    </>
   );
};

export default CreatePaaaword;