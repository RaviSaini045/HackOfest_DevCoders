import React, { useEffect } from "react";
import Navbar from "../navbar";
import Issue_card from "../issue_card";
import { getIssues } from "../../services/operations/issueAPI.js";
import { useDispatch, useSelector } from "react-redux";
import PhoneNavbar from "../PhoneSizeNavbar.jsx";
import ShimmerUi from "../ShimmerUi.jsx";
import { useNavigate } from "react-router";
const Issues = ()=>{
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const userLocation = useSelector((state) => state.auth.userLocation);
  const isLoading=useSelector((state)=>state.loader.isLoading)


  useEffect(() => {
    if (userLocation) {
      const timer = setTimeout(() => {
        dispatch(getIssues({
          currentLatitude: userLocation.latitude,
          currentLongitude: userLocation.longitude,
        }),navigate);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [userLocation, dispatch,navigate]);


  const issuesdata=useSelector((state)=>state.issue.issueData)

    return (
     <>
      
       <div className="flex justify-between min-h-screen ">
          
          <div className="hidden sm:block">
            <Navbar/>
          </div>
          <div className="sm:hidden">
                <PhoneNavbar/>
          </div>
       
          <div className="flex flex-col mx-auto pt-4 pb-36 md:pb-20  justify-start items-center overflow-x-auto w-full">
              <div className="">
                {isLoading ? <ShimmerUi route={"issue"}/> : 
                issuesdata?.length>0 ? issuesdata.map((issue,index)=>(<Issue_card key={index} issuedata={issue}/>)) : (<div>No data in Your location</div>)} 
              </div>
          </div>

        </div>
        
    </>
    );
 };
 

export default Issues;