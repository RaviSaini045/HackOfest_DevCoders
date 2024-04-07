import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    issueData: null,
    myIssuesData: null,
};

const issueSlice = createSlice({
    name: "issue",
    initialState,
    reducers:{
        setIssueData(state,action) {
                state.issueData = action.payload;
        },
        setMyIssuesData(state,action) {
            state.myIssuesData = action.payload;
        }
    },
});

export const {
    setIssueData,
    setMyIssuesData,
} = issueSlice.actions;

export default issueSlice.reducer;