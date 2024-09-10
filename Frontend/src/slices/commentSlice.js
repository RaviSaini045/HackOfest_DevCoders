import { createSlice } from "@reduxjs/toolkit"


const initialState={
    comments:[],
    commentLoading:false
}

const commentSlice=createSlice({
    name:"comment",
    initialState,
    reducers:{
        setComments(state,action){
            state.comments=action.payload
        },
        setCommentLoading(state,action){
            state.commentLoading=action.payload
        }
    }
})

export const {setComments,setCommentLoading} =commentSlice.actions;
export default commentSlice.reducer

