import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  userData: null,
  userLocation: null,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
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
    },
});

export const {
    setSignupData,
    setUserData,
    setUserLocation,
    setToken,
} = authSlice.actions;

export default authSlice.reducer;