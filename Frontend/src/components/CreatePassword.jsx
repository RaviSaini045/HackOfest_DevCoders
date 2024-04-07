import { IoMdCloseCircle } from "react-icons/io";
import bgImg from '../assets/signup_doodle.svg'

const CreatePaaaword = ({close}) => {
   return (
    <>
       <div className="h-[300px] w-[400px] rounded-lg shadow-2xl bg-kaddu-200" style={{ backgroundImage: `url(${bgImg})` }} >
         <div><IoMdCloseCircle className="w-10 h-10 absolute top-0 right-0" onClick={()=> close()}/></div>
           <div className="font-bold text-3xl m-3 p-3"><h1>Forgot Password</h1></div>
          
            
            <div className="flex justify-center font-semibold">
               <label>
                  New Password :
               <input className="m-2 p-2 rounded-lg" type="password" placeholder="new password"></input>
               </label>
            </div>

            <div className="flex justify-center font-semibold">
               <label>
               Confirm Password :
                  <input className="m-2 p-2 rounded-lg" type="password" placeholder="confirm password"></input>
               </label>
            </div>
          
           
           <div className="flex justify-center m-3">
            <button className="bg-black text-white p-2 m-2 rounded-md" >Submit</button>
           </div>

       </div>
    </>
   );
};

export default CreatePaaaword;