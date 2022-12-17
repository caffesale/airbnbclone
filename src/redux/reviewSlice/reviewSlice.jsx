import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../api/api";

//정규화된 상태를 제공하는 api
const reviewAdapter = createEntityAdapter({
    selectId: (entity) => entity.reviewId,
    sortComparer: (a, b) => {a.reviewId.localCompare(b.reviewId)}
});

//Thunk 비동기 통신용
export const fetchGetReviews = createAsyncThunk(
    'reviews/fetchGetReviews',
    async () => {
        const response = await apis.get("https://jsonplaceholder.typicode.com/comments");
        return response.data;
    }
)

export const fetchPostReview = createAsyncThunk(
    'reviews/fetchPostReview',
    async (postData) => {
        const response = await apis.postPostCard(postData);
        return response.data
    }
)

export const fetchPutReview = createAsyncThunk(
    'reviews/fetchPutReview',
    async (postId, reviewId, putReviewData) => {
        const response = await apis.putReview(postId, reviewId, putReviewData);

        return response.data
    }
)

const fetchRemoveReview = createAsyncThunk(
    'review/fetchRemoveReview',

    async (postId, reviewId) => {
        const response = await apis.deletePostCard(postId, reviewId);
        return response.data
    }
)

// 리듀서, 추가 리듀서
export const reviewSlice = createSlice({
    name: 'reviews',
    initialState: reviewAdapter.getInitialState({
        isLoading : 'idle'
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            // .addCase(fetchGetReviews.pending, (state) => {
            //     state.isLoading = 'pending';
            // })
            .addCase(fetchGetReviews.fulfilled, (state, action) => {
                // if(state.isLoading === 'pending'){
                    reviewAdapter.setAll(state, action.payload)
                    state.isLoading = 'idle';
            // }
            })
            // .addCase(fetchPostReview.fulfilled, (state, action) => {
            //     reviewAdapter.addOne(action.payload)
            // })
            // .addCase(fetchPutReview, (state, action) => {
            //     reviewAdapter.updateOne(action.payload)
            // })
            // .addCase(fetchRemoveReview, (state, action) => {
            //     reviewAdapter.removeOne(action.payload)
            // })
    }
})

export default reviewSlice.reducer

