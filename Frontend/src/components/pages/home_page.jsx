import image from '../../assets/doodle_background.svg';
import Screen from "../../assets/ApnaPc.svg"
import logo from "../../assets/LOGO.svg"
import Popup from "reactjs-popup"
import Register from "../Register";
import ForgotPassword from "../forgot_passwordP1";
 

const Homepage = ()=>{
    return (
     <>
     <div className="w-full h-screen flex bg-kaddu-200" style={{backgroundImage: `url(${image})`}} >
           <div className="w-1/2 h-full place-content-around">
           <img className="h-100 w-100"  src={Screen}></img>
           </div>

           <div className="pt-14 pl-14 place-content-around ">
                  <div><img className="h-[150px] w-[150px]"  src={logo}></img></div>
                  
                  <div className="pt-1 pb-12 pl-40"><h1 className=" text-center font-bold text-3xl">LOGIN</h1></div>
                  
                  <div className="items-center pl-40"><input className=" m-2 p-2 w-full rounded text-center" type="text" placeholder="Username or Email"></input></div>
                  
                  <div className="mb-0 pl-40">
                        <input className=" m-2 p-2 w-full rounded text-center" type="password" placeholder="Password"></input>
                  </div>
                  
                  <Popup trigger={
                        <div>
                        <button className=" mt-0 mb-5 pl-40 font-bold">Forgot Password ?</button>
                        </div>}
                        modal nested>
                              {
                                    close => (
                                         <ForgotPassword close = {close} />
                                    )}
                        </Popup>
                  

                  <div className="flex">
                        <div className="m-2 pl-40" ><h1 className="font-bold text">New User ?</h1></div>
                        <Popup trigger={
                        <div className="m-2"><button className=" font-bold text text-blue-500">Create Account</button></div>}
                        modal nested>
                              {
                                    close => (
                                         <Register close = {close} />
                                    )}
                        </Popup>
                  </div>
           </div>
     </div>
    </>
    );
 };
 export default Homepage;