import { createSlice } from "@reduxjs/toolkit"; 


const postImageSlice = createSlice({
    name: 'image',
    initialState: {},
    reducers: {
        addfiles: (state, { payload }) => {
            state.postimage = payload;
        }
    }
})

export const { addfiles } = postImageSlice.actions;

export default postImageSlice.reducer;