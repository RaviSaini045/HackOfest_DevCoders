import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { VscArrowCircleRight } from "react-icons/vsc";
import Doodle from "../assets/Doodle.svg";
import Search from "../assets/search_icon.svg";
import Logo from "../assets/LOGO.svg";

import Popup from "reactjs-popup";
import ReportIssue from "../components/ReportIssue.jsx";
import { useDispatch } from "react-redux";
import { logout } from "../services/operations/authAPI";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();

    console.log("inside handle logout");
    dispatch(logout(navigate));
  };
  return (
    <div
      className="h-screen w-[250px]  bg-kaddu-100 flex flex-col justify-between items-center shadow-2xl sticky top-0 "
      style={{ backgroundImage: `url(${Doodle})` }}
    >
      <div className="mx-10 sm:mx-20 text-lg md:text-2xl font-semibold flex-col content-evenly flex-grow flex justify-evenly">
        <div>
          <img src={Logo}></img>
        </div>
        <div className="flex items-center tex-sm">
          <input
            type="text"
            className="rounded-2xl text-lg font-normal pl-3 pr-10 bg-no-repeat bg-right w-36 sm:w-48 py-1 "
            style={{ backgroundImage: `url(${Search})` }}
            placeholder="Search"
          />
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/my-post">My Post</Link>
        </div>
        <div>
          <Link to="/my-likes">My Likes</Link>
        </div>
        <div>
          <Link to="/govt-projects">Govt Projects</Link>
        </div>
      </div>

      <div className="text-lg md:text-2xl font-semibold">
        <Popup trigger={
          <div className="m-3 p-2 flex justify-center">
            <button className="text-white bg-black rounded-full text-base p-2 px-4">
              ADD POST
            </button>
          </div>
        }modal nested>
          {(close)=><ReportIssue close={close}/>}
        </Popup>

        {/* <Popup trigger={
                         <div className="m-3 p-2 flex justify-center">
                         <button className="text-white bg-black rounded-full p-2">ADD POST</button>
                       </div>
                       }
                        modal nested>
                              {
                                    close => (
                                         <ReportIssue close = {close} />
                                    )}
             </Popup> */}

        <Link to="/profile">
          <div className="flex justify-center items-center flex-shrink">
            <button className="profile m-1.5">PROFILE</button>
            <VscAccount className="h-7 w-7 m-1.5" />
          </div>{" "}
        </Link>

        <div className="flex justify-center items-center flex-shrink">
          <button
            className="profile m-1.5"
            type="submit"
            onClick={handleLogOut}
          >
            LOGOUT
          </button>
          <VscArrowCircleRight className="h-9 w-9 m-[0.75px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
