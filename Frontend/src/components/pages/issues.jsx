import React, { useEffect } from "react";
import Navbar from "../navbar";
import Issue_card from "../issue_card";
import Issue from "../pages/issues.jsx"
import { getIssues } from "../../services/operations/issueAPI.js";
import { useDispatch, useSelector } from "react-redux";
import PhoneNavbar from "../PhoneSizeNavbar.jsx";
const Issues = ()=>{
  const dispatch = useDispatch();
  const userLocation = useSelector((state) => state.auth.userLocation);
  useEffect(() =>{
    dispatch(getIssues({
      currentLatitude: userLocation?.latitude,
      currentLongitude: userLocation?.longitude,
    }))
  },[]);
    return (
     <>
      
       <div className="flex ">
          
            <div className="hidden sm:block">
            <Navbar/>
          </div>
          <div className="sm:hidden">
                <PhoneNavbar/>
          </div>
       
        <div className="flex flex-wrap justify-center">
            <Issue_card />
            <Issue_card/>
            <Issue_card/>
            <Issue_card/>
        </div>

        </div>
        
    </>
    );
 };
 

export default Issues;