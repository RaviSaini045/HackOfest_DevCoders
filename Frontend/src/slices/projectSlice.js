import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectData:null,
    allProjects:null,
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setProjectData(state,action) {
            state.projectData = action.payload;
        },
        setAllProjects(state,action) {
            state.allProjects = action.payload;
        },
    },
});

export const {
    setProjectData,
    setAllProjects,
} = projectSlice.actions;

export default projectSlice.reducer;