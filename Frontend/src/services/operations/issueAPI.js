import {
    POST_ISSUE,
    GET_ISSUES,
    GET_ISSUE_BY_FILTER,
    GET_ISSUE_BY_ID,
    UPDATE_ISSUE,
    GET_ISSUES_OF_USER,
} from "../apis.js";
import { apiConnector } from "../apiConnector.js";
import { setIssueData, setMyIssuesData } from "../../slices/issueSlice.js";
import { setIsLoading } from "../../slices/LoaderSlice.js";

export const postIssue = (postData,navigate) => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST",POST_ISSUE,
                postData,
                {
                    "Content-Type": "multipart/form-data",
                }
            );
            if(!response.data.success)
                throw new Error("Something went wrong while posting the issue");
            navigate(`/issue/${response.data.data._id}`);
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
};

export const getIssues = (locationData,navigate) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true));
            const response = await apiConnector("POST",GET_ISSUES,locationData);
            if(!response.data.success)
                throw new Error("Something went wrong while fetching the issues");
            dispatch(setIsLoading(false))
            dispatch(setIssueData(response.data.data));
        } catch (error) {
            console.log(error.message);
            dispatch(setIsLoading(false));
            navigate("/error");
        }
    }
};

export const getIssuesByFilter = (locationData,navigate) => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("GET",GET_ISSUE_BY_FILTER,{
                locationData
            });
            if(!response.data.success)
                throw new Error(
                  "Something went wrong while fetching the issues"
                );
            dispatch(setIssueData(response.data));
        } catch (error) {
            console.log(error.message);

        }
    }
};

export const getIssueById = (idData,navigate) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true));
            const response = await apiConnector("GET",
                GET_ISSUE_BY_ID+idData
            );

            if(!response.data.success)
                throw new Error(
                  "Something went wrong while fetching the issues"
            ); 
            dispatch(setIsLoading(false));
            dispatch(setIssueData(response.data.data));
        } catch (error) {
            dispatch(setIsLoading(false))
            console.log(error.message);
            navigate("/error")
        }
    }
};

export const updateIssue = (issueData,navigate) => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("PATCH",UPDATE_ISSUE,{
                issueData,
            });
            if(!response.data.success)
                throw new Error("Something went wrong while updating the issue");
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
};
export const getUsersIssues = (navigate) => {
    return async (dispatch) => {
        try {
            const response=await apiConnector("GET",GET_ISSUES_OF_USER);
            dispatch(setMyIssuesData(response.data.data))
        } catch (error) {
            console.log(error);
            navigate("/error");
        }
    }
};