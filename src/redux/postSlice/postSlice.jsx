import { createSlice } from "@reduxjs/toolkit";


const initialState = {};


export const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers: {
        setsubmitValue(state, action){
            state.posts += action.payload
        }
    }
})

export const { setsubmitValue } = postsSlice.actions;

export default postsSlice.reducer
