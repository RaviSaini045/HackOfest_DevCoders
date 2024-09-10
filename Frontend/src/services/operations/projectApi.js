import {
    POST_PROJECT,
    GET_PROJECTS,
    GET_PROJECTS_BY_FILTER,
    GET_PROJECT_BY_ID,
    UPDATE_PROJECT
} from "../apis.js";
import { apiConnector } from "../apiConnector.js";
import { setAllProjects, setProjectData } from "../../slices/projectSlice.js";
import { setIsLoading } from "../../slices/LoaderSlice.js";


export const postProject = (pojectData,navigate) => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST",POST_PROJECT,
                pojectData,
            {
                "Content-Type":"multipart/form-data",
                Authorization:document.cookie,
            });
            if(!response.data.success)
                throw new Error("Something went wrong while posting the Projects");
            navigate(`/govt-projects`); 
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
};


export const getProjects = (locationData,navigate) => {

    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true));
            const response = await apiConnector("POST",GET_PROJECTS,
            locationData,{
                Authorization: document.cookie,
            });
            if(!response.data.success)
                throw new Error("Something went wrong while fetching the Projects");
            
            dispatch(setIsLoading(false));
            dispatch(setAllProjects(response.data.data));
        } catch (error) {
            dispatch(setIsLoading(false));
            console.log(error.message);
            navigate("/error");
        }
    }
};

export const getPojectByFilter = (locationData,navigate) => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("GET",GET_PROJECTS_BY_FILTER,{
                locationData
            });
            if(!response.data.success)
                throw new Error(
                  "Something went wrong while fetching the Projects"
                );
            dispatch(setProjectData(response.data));
        } catch (error) {
            console.log(error.message);

        }
    }
};


export const getProjectById = (idData,navigate) => {
    // console.log(document.cookie)
    return async (dispatch) => {
        try {
            const response = await apiConnector("GET",`${GET_PROJECT_BY_ID}/${idData}`,{},{
                Authorization: document.cookie,
            }
            );
            if(!response.data.success)
                throw new Error(
                  "Something went wrong while fetching the Projects"
                ); 
            dispatch(setProjectData(response.data.data));
            
        } catch (error) {
            console.log(error.message);
            navigate("/error")
        }
    }
};

export const updateProjectStatus = (idData,projectStatusData,navigate) => {
    console.log("ProjectApi",projectStatusData);

    
    return async (dispatch) => {
        try {
            const response = await apiConnector("PATCH",`${UPDATE_PROJECT}/${idData}`,{
                status:projectStatusData,
            },{
                Authorization:document.cookie,
            });
            if(!response.data.success)
                throw new Error("Something went wrong while updating the Project Stauts");
            navigate(window.location.pathname);
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
};
