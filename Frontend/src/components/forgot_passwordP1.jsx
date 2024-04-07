import CreatePaaaword from "./CreatePassword";
import Popup from "reactjs-popup"
import { IoMdCloseCircle } from "react-icons/io";
import bgImg from '../assets/signup_doodle.svg'

const ForgotPassword = ({close}) => {
   return (
    <>
       <div className="bg-kaddu-200 h-[300px] w-[400px] rounded-lg shadow-2xl"  style={{ backgroundImage: `url(${bgImg})` }}>
                <div className= ""><IoMdCloseCircle className="w-10 h-10 absolute top-0 right-0" onClick={()=> close()}/></div>
                <div className=" flex justify-center font-bold text-xl m-2 p-2">Forgot Password</div>
                <div className="font-semibold flex justify-center mt-12">Enter Your Register Email Id</div>
                <div className="flex justify-center mb-10">
                            <div>
                                <input className="rounded-lg m-2 p-2" type="email" placeholder="Email"></input>
                            </div>
                </div>

                <Popup trigger={
                         <div className="flex justify-center">
                         <button className="bg-black text-white rounded-lg m-2 p-2" >Next</button>
                     </div>}
                        modal nested>
                              {
                                    close => (
                                         <CreatePaaaword close = {close} />
                                    )}
                        </Popup>
       </div>
    </>
   );
};

export default ForgotPassword ;