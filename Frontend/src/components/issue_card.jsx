import complaint_pic from "../assets/complaint_pic.png"
import { VscAccount } from "react-icons/vsc";

import CommentIcon from "../assets/comment_Icon.svg";
import LikeIcon from "../assets/Like_Icon.svg"
import LocationIcon from "../assets/Map_Icon.svg"



const Issue_card = ()=>{
    return (
     <>
     <div className="bg-kaddu-200 m-5 p-5 w-4/5 rounded-2xl">


     <div className="flex justify-between ">
       <div className="flex mt-2 items-center">
        <div>
         <VscAccount className="h-14 w-14 m-1.5 "/>
    
         </div>
        <div className="items-start text-xl">
        <h1 className="">Ravi Saini</h1>
        <h3 className="text-gray-500">@rohit045</h3>
        </div>
       </div>
       <div className="flex mt-2">
        <div>
        <img src={LocationIcon} alt="location" className="h-10 w-10 m-1.5 "/>
         </div>
         <div>
         <h1 className="">Ashok Rajpath</h1>
         <h2 className="">800005</h2>
         </div>
      </div>
     </div>

      <div className="m-5">
        <p className=" text-justify text-lg">
        ParagraphParagraphs are the group of sentences combined together, about a certain topic. It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc. We can say that a well-structured paragraph is the essence of good writing. 
        </p>
      </div>
      

      <div className="m-5 flex justify-center">
      <img className="" alt="ISSUE" src={complaint_pic}></img>
     
      </div>
       <div className="flex pl-10 ">
        <div >
        <img src={LikeIcon} alt="upvote" className="h-10 w-10 m-1.5 "/>
        </div>
        <div className="ml-10">
        
        <img src={CommentIcon} alt="comment" className="h-10 w-10 m-1.5 "/>
        </div>
      </div>

     </div>
    </>
    );
 };

export default Issue_card;