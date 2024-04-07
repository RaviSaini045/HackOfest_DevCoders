import React from "react";
import Navbar from "../navbar";
import Issue_card from "../issue_card";
import Issue from "../pages/issues.jsx"
const Issues = ()=>{
    return (
     <>
      
       <div className="flex ">
          
          <div className="">
            <Navbar/>

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