import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../api/api";

// 정규화된 상태를 제공하는 api
const reviewAdapter = createEntityAdapter({
    selectId: (review) => review.reviewId,
    sortComparer: (a,b) => a.reviewId.localeCompare(b.reviewId)
})

//Thunk 비동기 통신용
const fetchGetReviews = createAsyncThunk(
    'reviews/fetchGetReviews',
    async () => {
        const response = await apis.getAllPostCard()
        return response.data
    }
)

const fetchPostReview = createAsyncThunk(
    'review/fetchPostReview',
    async (postData) => {
        const response = await apis.postPostCard(postData)
        return response.data
    }
)

const fetchRemoveReview = createAsyncThunk(
    'review/fetchRemoveReview',
    async (postId) => {
        const response = await apis.deletePostCard(postId)
        return response.data
    }
)

// 리듀서, 추가 리듀서
export const reviewSlice = createSlice({
    name: 'reviews',
    initialState: reviewAdapter.getInitialState({
        loading : 'idle',
    }),
    reducers: {
        addReview: reviewAdapter.addOne,
        updateReview: reviewAdapter.updateOne,
        deleteReview: reviewAdapter.removeOne,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetReviews.fulfilled, (state, action) => {
                reviewAdapter.setAll(action.payload)
            })
            .addCase(fetchPostReview.fulfilled, (state, action) => {
                reviewAdapter.upsertOne(action.payload)
            })
            .addCase(fetchRemoveReview.fulfilled, (state, action) => {
                reviewAdapter.removeOne(action.payload)
            })
    }
})

export const { addReview, updateReview, deleteReview } = reviewSlice.actions

export default reviewSlice.reducer

