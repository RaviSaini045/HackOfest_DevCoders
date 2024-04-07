import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    proectData:null,
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setProjectData(state,action) {
            state.proectData = action.payload;
        },
    },
});

export const {
    setProjectData,
} = projectSlice.actions;

export default projectSlice.reducer;