import Profile from "../assets/profile_icon.svg";
import Delete from "../assets/delete_icon.svg";
import { useDispatch } from "react-redux";
import { deleteComment, getComments } from "../services/operations/commentApi";

const Comment = ({ commentdata , handleDeleteComment }) => {  
  return (
    <>
      <div className="mt-5 mx-5 p-5 ">
        <div className="flex justify-between ">
          <div className="flex items-center ">
            <div className="w-16 h-16 overflow-hidden rounded-full">
              <img className="w-16 h-16 object-cover" src={commentdata?.owner?.avatar}></img>{" "}
            </div>
            <div className="px-2 text-lg">
              <div>{commentdata?.owner?.fullName}</div>
              <div>@{commentdata?.owner?.username}</div>
            </div>
          </div>
          <div onClick={handleDeleteComment}>
            <img src={Delete} className="w-7 h-7"></img>
          </div>
        </div>

        <div className="m-2 ml-10 text-sm md:text-xl">{commentdata?.content}</div>
      </div>
    </>
  );
};

export default Comment;
