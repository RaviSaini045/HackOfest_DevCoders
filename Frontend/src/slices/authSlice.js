import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  userData: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")):null,
  userLocation: null,
  token:null,
    resetPasswordtoken:null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setSignupData(state,value) {
            state.signupData = value.payload;
        },
        setUserData(state,value) {
            state.userData = value.payload;
        },
        setUserLocation(state,value){
            console.log(value.payload);
            state.userLocation = value.payload;
        },
        setToken(state,value) {
            state.token = value.payload;
        },
        setResetpassWordtoken(state,value) {
            state.resetPasswordtoken = value.payload;
        },
    },
});

export const {
    setSignupData,
    setUserData,
    setUserLocation,
    setToken,
    setResetpassWordtoken
} = authSlice.actions;

export default authSlice.reducer;