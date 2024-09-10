import { setMyLikedIssues, setupvoteCount, setupvoteData } from "../../slices/issueSlice";
import { apiConnector } from "../apiConnector";
import { GET_UPVOTES, GET_USER_UPVOTES_ISSUES, TOGGLE_UPVOTE } from "../apis";

export const getUpvotes=(issueId,navigate)=>{
    return async (dispatch)=>{
        try {
            const response=await apiConnector("GET",GET_UPVOTES+issueId);
            dispatch(setupvoteData(response.data.data))
            dispatch(setupvoteCount(response.data.data.length))
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
}

export const toggleUpvote=(issueId,navigate)=>{
    return async (dispatch)=>{
        try {
            const response=await apiConnector("POST",TOGGLE_UPVOTE,{issueId})
        } catch (error) {
            console.log(error);
            navigate("/error");
        }
    }
}
export const getUserUpvotedIssues=(navigate)=>{
    return async (dispatch)=>{
        try {
            const response=await apiConnector("GET",GET_USER_UPVOTES_ISSUES)
            dispatch(setMyLikedIssues(response.data.data))
        } catch (error) {
            console.log(error);
            navigate("/error");
        }
    }
}