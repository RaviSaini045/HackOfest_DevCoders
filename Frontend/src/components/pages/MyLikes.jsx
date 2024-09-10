import React, { useEffect } from "react";
import Navbar from "../navbar";
import PhoneNavbar from "../PhoneSizeNavbar";
import { getUserUpvotedIssues } from "../../services/operations/upvoteAPI";
import { useDispatch, useSelector } from "react-redux";
import Issue_card from "../issue_card";
import { useNavigate } from "react-router";

export default function MyLikes() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        dispatch(getUserUpvotedIssues(navigate))
    },[])
    const myLikedIssuesData=useSelector((state)=>state.issue?.myLikedIssues || []);
  return (
    <>
        <div className="flex justify-between min-h-screen ">
            <div className="hidden lg:block">
                <Navbar/>
            </div>
            <div className="lg:hidden">
                <PhoneNavbar/>
            </div>
            <div className='flex flex-col mx-auto pt-4 pb-36 md:pb-20  justify-start items-center overflow-x-auto w-full'>
                {Array.isArray(myLikedIssuesData) && myLikedIssuesData?.length > 0 ?(
                myLikedIssuesData?.map((myIssue)=><Issue_card key={myIssue.issue._id} issuedata={myIssue.issue}/>)
                ):<div className="p-4 text-base md:text-xl"> You have not liked any issues</div>}
            </div>
        </div>
    </>
  );
}
