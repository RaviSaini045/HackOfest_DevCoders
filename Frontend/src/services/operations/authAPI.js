import {
    SEND_OTP,
    REGISTER,
    LOGIN,
    LOGOUT,
    UPDATE_PASSWORD,
    RESET_PASSWORD_TOKEN,
    RESET_PASSWORD

} from "../apis.js";
import { apiConnector } from "../apiConnector.js";
import { setResetpassWordtoken, setToken, setUserData } from "../../slices/authSlice.js";

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

            console.log(response.data.user);
            dispatch(setToken(response.data.data.accessToken));
            
            dispatch(setUserData(response.data.data.user));
            localStorage.setItem("token",JSON.stringify(response.data.data.accessToken));
            localStorage.setItem("user",JSON.stringify(response.data.data.user));

            // document.cookie = `Bearer ${response.data.data.accessToken}; SameSite=Lax; Secure`;
            navigate("/issue");
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
};

export const logIn = (loginData,navigate) => {
    return async (dispatch) => {
        try {
        const response = await apiConnector("POST",LOGIN,{
            email: loginData.email,
            password: loginData.password,
        });
        if(!response.data.success)
            throw new Error("Something went wrong while login the user");
        dispatch(setUserData(response.data.data.user));
        dispatch(setToken(response.data.data.accessToken));
        localStorage.setItem("token",JSON.stringify(response.data.data.accessToken));
        localStorage.setItem("user",JSON.stringify(response.data.data.user));
        // document.cookie = `accessToken=${response.data.data.accessToken}; SameSite=Lax; Secure`;
        // document.cookie = `Bearer ${response.data.data.accessToken}; SameSite=Lax; Secure`;
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
            Authorization: document.cookie, 
        });
        if(!response.data.success)
            throw new Error("Something Went wrong while logging out the user");
        dispatch(setToken(null));
        dispatch(setUserData(null));
        localStorage.clear();
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
            const response = await apiConnector("PATCH",UPDATE_PASSWORD,
            updatePasswordData,
            {
                Authorization: document.cookie,
            }
            );
            if(!response.data.success)
                throw new Error("Something went wrong while updating the password");    
            navigate("/login");
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }
}


export const generateResetPasswordToken=(email,navigate)=>{
    return async (dispatch)=>{
        try {
            const response=await apiConnector("PATCH",RESET_PASSWORD_TOKEN,{email});
            if(!response.data.success){
                throw new Error("Something Went Worng while generate token")
            }
            
            
            console.log("ganerated",response.data)
            dispatch(setResetpassWordtoken(response.data.data.resetPasswordToken));
            return (response.data);

        } catch (error) {
            console.log(error);
            navigate("/error");
        }
    }
};

export const resetPassword=(passwordData,token,navigate)=>{
    if(!token){
        alert("token is missing")
        return 
    }
    if(passwordData.password!==passwordData.cpassword){
        alert("Password is not match")
        return 
    }
    return async (dispatch) => {
        try {
            const response = await apiConnector("PATCH",`${RESET_PASSWORD}/${token}`,
            passwordData);
            console.log("resetPassword",response.data);
            if(!response.data.success)
                throw new Error("Something went wrong while updating the password");    
            // navigate("/");
            window.location.reload();
        } catch (error) {
            console.log(error.message);
            navigate("/error");
        }
    }


}