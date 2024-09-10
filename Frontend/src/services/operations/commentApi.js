// import { setComments } from "../../slices/issueSlice"
import { setCommentLoading, setComments } from "../../slices/commentSlice"
import { apiConnector } from "../apiConnector"
import { DELETE_COMMENT, GET_COMMENTS, POST_COMMENT } from "../apis"

export const getComments=(issueId,navigate)=>{
    return async(dispatch)=>{
        try {
            dispatch(setCommentLoading(true))
            const response=await apiConnector("GET",GET_COMMENTS+issueId)
            dispatch(setCommentLoading(false))
            dispatch(setComments(response.data.data))
        } catch (error) {
            dispatch(setCommentLoading(false));
            console.log(error)
            navigate("/error");
        }
    }
}

export const postComment=(bodyData,navigate)=>{
    return async (dispatch)=>{
        try {
            dispatch(setCommentLoading(true))
            const response=await apiConnector("POST",POST_COMMENT,bodyData)
            console.log(response.data.data);
            setCommentLoading(false);
            // dispatch(setComments(response.data.data))
        } catch (error) {
            setCommentLoading(false);
            console.log(error);
            navigate("/error");
        }
    }
}

export const deleteComment=(commentId,navigate)=>{
    return async (dispatch)=>{
        try {
            const response= await apiConnector("DELETE",DELETE_COMMENT,{commentId})
        } catch (error) {
            console.log(error);
            navigate("/error");
        }
    }
}






