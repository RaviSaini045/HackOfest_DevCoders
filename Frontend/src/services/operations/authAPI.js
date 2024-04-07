import {
    SEND_OTP,
    REGISTER,
    LOGIN,
    LOGOUT,
    UPDATE_PASSWORD,
} from "../apis.js";
import { apiConnector } from "../apiConnector.js";

export const sendOTP = (email,navigate) => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST",SEND_OTP,{
                email,
            });
            console.log(response);
            if(!response.data.success)
                throw new Error("Something Went wrong while Sending OTP");
            navigate("");
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
};

export const signUp = async (signUpData,navigate) => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST",REGISTER,{
                FormData,
            })
        } catch (error) {
            
        }
    }
}