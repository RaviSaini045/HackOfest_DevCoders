import React, { useCallback, useEffect, useRef, useState } from "react";
import Issue_card from "../issue_card";
import Navbar from "../navbar";
import Comment from "../comment";
import bgImage from "../../assets/doodle_background.svg";
import PhoneNavbar from "../PhoneSizeNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getIssueById } from "../../services/operations/issueAPI";
import IssueDetails from "../IssueDetails";
import { getUpvotes, toggleUpvote } from "../../services/operations/upvoteAPI";
import ShimmerUi from "../ShimmerUi";
import { deleteComment, getComments, postComment } from "../../services/operations/commentApi";
import { debounce } from "../../../utils/debounce";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { issueId } = useParams();
  
  const isLoading1=useSelector((state)=>state.loader.isLoading)
  const user=useSelector((state)=>state.auth.userData)
  const issueData = useSelector((state) => state.issue?.issueData);
  const upvoteCount = useSelector((state) => state.issue?.upvoteCount);
  const upvotes = useSelector((state) => state.issue?.upvoteData);
  const {comments,commentLoading}=useSelector((state)=>state.comment);
  
  const [isUpvoted,setIsupvoted]=useState(false);


  useEffect(() => {
    dispatch(getIssueById(issueId, navigate));
    dispatch(getUpvotes(issueId,navigate));
    dispatch(getComments(issueId,navigate));
  }, [issueId, dispatch, navigate]);

  const findIsUpvoted = useCallback(() => {
    if (upvotes.length > 0) {
      const isFound = upvotes.find((upvote) => upvote.upvotedBy === user._id);
      setIsupvoted(!!isFound);
    } else {
      setIsupvoted(false);
    }
  }, [upvotes, user._id]);

  useEffect(() => {
    findIsUpvoted();
  }, [findIsUpvoted]);


  const commentRef=useRef(null);

  const addComment = useCallback(
    debounce(() => {
      const comment = commentRef.current.value;
      if (!comment) return;

      const bodyData = { content: comment, issueId };
      dispatch(postComment(bodyData,navigate));
      commentRef.current.value = ""; 

      setTimeout(()=>{
        dispatch(getComments(issueId,navigate));
      },1000)

    }, 1000),
    [dispatch, issueId]
  );

  const handleDeleteComment = useCallback(
    debounce((commentId) => {
      dispatch(deleteComment(commentId,navigate));

      setTimeout(()=>{
        dispatch(getComments(issueId,navigate));
      },1000)

    }, 1000),
    [dispatch, issueId]
  );
  

  const handleUpvote = useCallback(
    debounce((issueId) => {
      dispatch(toggleUpvote(issueId,navigate));

      setTimeout(() => {
        dispatch(getUpvotes(issueId,navigate));
      }, 200);

    }, 1000),
    [dispatch]
  );

  const commentCount = comments ? comments.length : 0; 

  return (
    <>
      <div className="flex " style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hidden sm:block">
          <Navbar />
        </div>
        <div className="sm:hidden">
          <PhoneNavbar />
        </div>
        {isLoading1 ? (<div>Loading...</div>):
        (<div className="flex flex-col w-full p-5">
          {issueData ? <IssueDetails issuedata={issueData} upvoteCount={upvoteCount} commentCount={commentCount} handleUpvote={handleUpvote} isUpvoted={isUpvoted} /> : <div>NO data</div> }
          <div className="px-4 my-2 flex w-full">
              <div className="w-full flex-1 mx-2">
                <input 
                  className="w-full p-3 border-slate-500 border-b-2 focus:border-slate-900 focus:border-b-2 outline-none" 
                  type="text" 
                  placeholder="Add Comments"
                  ref={commentRef}
                />
              </div>
              <button className="bg-black text-white p-3 rounded-2xl" onClick={addComment}>Comment</button>
          </div>
          <div className="flex flex-col justify-center w-full divide-y-2 divide-slate-500">

            {!commentLoading ?
            Array.isArray(comments) && comments.length > 0 ? (
              comments?.map((comment)=><Comment key={comment._id} commentdata={comment} handleDeleteComment={()=>handleDeleteComment(comment._id)}/>)
            ):<div className="p-4 text-base md:text-xl"> NO Comment to show</div>
            :<div className="p-4 text-base md:text-xl">Loading...</div>}

          </div>
        </div>)}
      </div>
    </>
  );
};

export default Post;
