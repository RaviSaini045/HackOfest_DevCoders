import React, { useState } from 'react'
import { VscAccount } from 'react-icons/vsc'
import LikeIcon from "../assets/Like_Icon.svg";
import LocationIcon from "../assets/Map_Icon.svg";
import CommentIcon from "../assets/comment_Icon.svg";
import { useSelector } from 'react-redux';
import { IoHeartSharp } from "react-icons/io5";

export default function IssueDetails({issuedata,upvoteCount,commentCount,handleUpvote,isUpvoted }) {
    const name = issuedata?.reportedBy
    ? issuedata?.reportedBy?.fullName
    : "Anonymous";
  const username = issuedata?.reportedBy ? issuedata?.reportedBy?.username : "";
  function formatUpvoteCount(count) {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'; 
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K'; 
    } else {
      return count?.toString(); 
    }
  }

  return (
    <>
    <div className="bg-kaddu-200 m-2 mx-auto p-2 md:p-5 w-full  rounded-2xl" >
        <div className="flex justify-between ">
          <div className="flex mt-2 items-center">
            <div>
            {name==="Anonymous"?<VscAccount className="h-10 w-10 md:h-14 md:w-14 m-1.5 " /> :<img className="h-10 w-10 md:h-14 md:w-14 m-1.5 rounded-full" src={issuedata?.reportedBy?.avatar}/> }
            </div>
            <div className="items-start">
              <h1 className="text-base md:text-xl">{name}</h1>
              <h3 className="text-gray-500 text-base md:text-xl">
                @{username}
              </h3>
            </div>
          </div>
          <div className={` mt-2 ${name==="Anonymous"?'hidden':'flex' }`}>
            <div>
              <img
                src={LocationIcon}
                alt="location"
                className="h-8 w-8 md:h-10 md:w-10 m-1.5 "
              />
            </div>
            <div className="text-sm md:text-xl">
              <h1 className="">Ashok Rajpath</h1>
              <h2 className="">800005</h2>
            </div>
          </div>
        </div>

        <div className="m-5">
          <p className=" text-justify text-sm md:text-lg  ">
            {issuedata?.description}
          </p>
        </div>

        <div className='w-full max-h-[400px] bg-slate-200 overflow-hidden'>
            <div className="mx-5 flex justify-center max-h-[400px] max-w-[100%] overflow-hidden">
                {issuedata ? (<img className="object-cover" alt="Issue image" src={issuedata?.media?.[0]}></img> ):(<div></div>)}
            </div>
        </div>
        <div className="flex justify-between px-2">
          <div className='flex  items-center'>
            <div>
                {/* <img
                src={LikeIcon}
                alt="upvote"
                className="h-8 w-8 md:h-10 md:w-10 m-1.5 "
                /> */} 
              <IoHeartSharp className={`h-8 w-8 md:h-10 md:w-10 m-1.5 ${isUpvoted ? 'text-purple-500' : 'text-gray-400'}`} onClick={()=>handleUpvote(issuedata._id)} />
            </div>
            <p className='text-center'>
                {formatUpvoteCount(upvoteCount)}</p>
          </div>
          <div className="ml-10">
            <div className='flex items-center'>
                <div>
                    <img
                    src={CommentIcon}
                    alt="comment"
                    className="h-8 w-8 md:h-10 md:w-10 m-1.5 "
                    />
                </div>
                <p className='text-center'>{formatUpvoteCount(commentCount)}</p>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}
