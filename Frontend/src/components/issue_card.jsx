import complaint_pic from "../assets/complaint_pic.png";
import { VscAccount } from "react-icons/vsc";

import CommentIcon from "../assets/comment_Icon.svg";
import LikeIcon from "../assets/Like_Icon.svg";
import LocationIcon from "../assets/Map_Icon.svg";
import { memo, useCallback } from "react";
import { getIssueById } from "../services/operations/issueAPI";
import { useNavigate } from "react-router";

const Issue_card = memo(({ issuedata }) => {
  const name = issuedata?.reportedBy
    ? issuedata.reportedBy.fullName
    : "Anonymous";
  const username = issuedata?.reportedBy ? issuedata.reportedBy.username : "";

  const navigate = useNavigate();
  const issueId=issuedata._id
  const handelClick=useCallback(()=>{    
    navigate(`/issue/${issueId}`)
  },[])


  return (
    <>
      <div className="bg-kaddu-200 m-2 mx-auto p-2 md:p-5 w-[21rem] md:w-[32rem]  rounded-2xl" onClick={handelClick}>
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
          <p className=" text-justify text-sm md:text-lg line-clamp-4 md:line-clamp-6">
            {issuedata?.description}
          </p>
        </div>

        <div className="m-5 flex justify-center max-h-[400px] max-w-[800px] overflow-hidden">
        {issuedata?.media?.length > 0 ? (
            <img className="object-cover" alt="ISSUE" src={issuedata.media[0]} />
          ) : (
            // You can add dummy  Image
            <img className="object-cover" alt="ISSUE" src={complaint_pic} />
        )}
        </div>
        <div className="flex justify-between px-2">
          <div>
            <img
              src={LikeIcon}
              alt="upvote"
              className="h-8 w-8 md:h-10 md:w-10 m-1.5 "
            />
          </div>
          <div className="ml-10">
            <img
              src={CommentIcon}
              alt="comment"
              className="h-8 w-8 md:h-10 md:w-10 m-1.5 "
            />
          </div>
        </div>
      </div>
    </>
  );
});
Issue_card.displayName='Issue_card'
export default Issue_card;
