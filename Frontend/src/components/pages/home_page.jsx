import image from '../../assets/doodle_background.svg';
import Screen from "../../assets/ApnaPc.svg"
import logo from "../../assets/LOGO.svg"
import Popup from "reactjs-popup"
import Register from "../Register";
import ForgotPassword from "../forgot_passwordP1";
import { useRef, useState } from 'react';
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { logIn } from '../../services/operations/authAPI';

const Homepage = ()=>  {
      const [formData,setFormData] = useState({
            email: '',
            password: '',
      });
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const emailRef = useRef(null);
      const passwordRef = useRef(null);
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name,"hello");
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]:e.target.value,
        }));
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(logIn(formData,navigate));
      }
    return (
      <>
        <div
          className="w-full h-screen flex justify-around bg-kaddu-200"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className=" h-full w-1/2 place-content-around hidden md:flex">
            <img className="h-100 w-100" src={Screen}></img>
          </div>

          <div className="p-2 my-auto w-full md:w-[50%] lg:w-[40%] flex-col  md:px-12 md:place-content-around ">
            <div className='pl-2'>
              {/* <img className="h-[150px] w-[150px]" src={logo}></img> */}
              <img className="h-28 w-28" src={logo}></img>
            </div>

            <div className="pt-1">
              <h1 className=" text-center font-bold text-3xl">LOGIN</h1>
            </div>

            <div className="items-center p-4">
              <input
                className=" p-2 w-full rounded-full text-center"
                type="email"
                name= "email"
                ref={emailRef}
                onChange={handleChange}
                placeholder="Email"
              ></input>
            </div>

            <div className="pt-4 px-4">
              <input
                className="mt-4 p-2 w-full rounded-full text-center"
                type="password"
                placeholder="Password"
                name="password"
                ref={passwordRef}
                onChange={handleChange}
              ></input>
            </div>
            <Popup
              trigger={
                <div className="px-6 w-full flex justify-end">
                  <button 
                    className=" my-2 font-bold text-blue-500"
                  >
                    Forgot Password ?
                  </button>
                </div>
              }
              modal
              nested
            >
              {(close) => <ForgotPassword close={close} />}
            </Popup>
            <form onSubmit={handleSubmit}>
              <div className="flex w-full justify-center">
                <button
                  className="my-4 p-2 px-6 rounded-3xl bg-kaddu-400 text-white font-bold"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="px-4 flex w-full justify-between">
              <div className="m-2 ">
                <h1 className="font-bold text">New User ?</h1>
              </div>
              <Popup
                trigger={
                  <div className="m-2">
                    <button className=" font-bold text text-blue-500">
                      Create Account
                    </button>
                  </div>
                }
                modal
                nested
              >
                {(close) => <Register close={close} />}
              </Popup>
            </div>
          </div>
        </div>
      </>
    );
 };
 export default Homepage;