import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Popup from "reactjs-popup"
import bgImg from '../assets/signup_doodle.svg'

const OtpPage = ({close}) => {
    
  const [otp, setOtp] = useState('');
   return (
    <>
        <div className=" w-[400px] h-[550px] bg-kaddu-200 shadow-2xl rounded-lg " style={{ backgroundImage: `url(${bgImg})` }} >
           <div className='font-bold text-3xl p-5 flex justify-center'>Enter OTP</div>
           <div className='flex justify-center m-10'>
                <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span> - </span>}
                        renderInput={(props) => <input {...props} />}
                    />
           </div>

            <div className="flex justify-center text-center m-5 p-5 font-bold">
            OTP has been sent to your Registered email Id 
                       saini*****045@gmail.com
            </div>

            <div className="text-blue-600 font-bold text-2xl  flex justify-center" onClick={()=>setOtp('')} >Resend</div>
            
            
            <div className='m-5 p-5 flex justify-center'><button className='bg-black text-white m-2 p-2 rounded-lg '>Submit</button></div>
        </div>
    </>
   );
};

export default OtpPage;