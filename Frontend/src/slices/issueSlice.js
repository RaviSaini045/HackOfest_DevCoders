import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    issueData: null,
    myIssuesData: [],
    upvoteData:[],
    upvoteCount:0,
    myLikedIssues:[]
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
        },
        setupvoteData(state,action) {
            state.upvoteData = action.payload;
        },
        setupvoteCount(state,action) {
            state.upvoteCount = action.payload;
        },
        setMyLikedIssues(state,action) {
            state.myLikedIssues = action.payload;
        },
    },
});

export const {
    setIssueData,
    setMyIssuesData,
    setupvoteData,
    setupvoteCount,
    setMyLikedIssues
} = issueSlice.actions;

export default issueSlice.reducer;