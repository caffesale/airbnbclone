import { configureStore } from "@reduxjs/toolkit";
import { reviewSlice } from "./reviewSlice/reviewSlice";

const store = configureStore({
    reducer: {
        reviews: reviewSlice
    }
})

export default store;