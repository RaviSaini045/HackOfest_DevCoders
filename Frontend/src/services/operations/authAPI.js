import {
    SEND_OTP,
    REGISTER,
    LOGIN,
    LOGOUT,
    UPDATE_PASSWORD,
} from "../apis.js";
import { apiConnector } from "../apiConnector.js";
import { setToken, setUserData } from "../../slices/authSlice.js";

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

export const signUp = (signUpData,navigate) => {
    console.log(signUpData.signup.signupData);
    return async (dispatch) => {
        try {
            const response = await apiConnector(
              "POST",
              REGISTER,
              {
                fullName: signUpData.signup.signupData.formData.name,
                email: signUpData.signup.signupData.formData.email,
                username: signUpData.signup.signupData.formData.username,
                password: signUpData.signup.signupData.formData.password,
                aadharCard: signUpData.signup.signupData.formData.aadharCard,
                otp: signUpData.otp,
                avatar: signUpData.signup.signupData.avatar,
              },
              {
                "Content-Type": "multipart/form-data",
              }
            );
            if(!response.data.success)
                throw new Error("Something Went wrong while Verifying the User");
            dispatch(setToken(response.data.accessToken));
            dispatch(setUserData(response.data));
            navigate("/issue");
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
};

export const logIn = (loginData,navigate) => {
    console.log("inside login api",loginData);
    return async (dispatch) => {
        try {
        const response = await apiConnector("POST",LOGIN,{
            email: loginData.email,
            password: loginData.password,
        });
        if(!response.data.success)
            throw new Error("Something went wrong while login the user");
        dispatch(setToken(response.data.accessToken));
        dispatch(setUserData(response.data));
        dispatch(setToken(response.data.data.accessToken));
        document.cookie = `accessToken=${response.data.data.accessToken}; SameSite=Lax; Secure`;
        navigate("/issue");
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
}

export const logout = (navigate)  => {
    console.log("inside logout");
    return async (dispatch) => {
        try {
        const response = await apiConnector("POST",LOGOUT,{},{
            Cookie: document.cookie,
        });
        if(!response.data.success)
            throw new Error("Something Went wrong while logging out the user");
        dispatch(setToken(null));
        dispatch(setUserData(null));
        navigate("/");
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
}


export const updatePassword = (updatePasswordData,navigate)  => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST",UPDATE_PASSWORD,{
            updatePasswordData
            });
            if(!response.data.success)
                throw new Error("Something went wrong while updating the password");    
            navigate("/login");
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
}