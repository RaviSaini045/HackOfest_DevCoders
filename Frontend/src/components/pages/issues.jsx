import React from "react";
import Navbar from "../navbar";
import Issue_card from "../issue_card";
import Issue from "../pages/issues.jsx"
import PhoneNavbar from "../PhoneSizeNavbar.jsx";


const Issues = ()=>{
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