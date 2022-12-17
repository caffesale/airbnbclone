import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../redux/postSlice/postSlice"
import reviewReducer from "../redux/reviewSlice/reviewSlice"
import postImageReducer from "../redux/postimageSlice/postImageSlice"

const store = configureStore({
    reducer: {
        postimage: postImageReducer,
        posts: postReducer,
        reviews: reviewReducer,
    }
})

export default store;