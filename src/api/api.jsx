import axios from 'axios';
import { saveToken, getToken, removeToken } from '../utils/auth'

// 서버 연결시 해제 
const BASE_URL = process.env.REACT_APP_SERVER_URL;

// 인스턴스 생성
const api = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        accept: 'application/json',
    },
});

const apiMultiType = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
    // credentials: true,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
})

// 인터셉터 
api.interceptors.request.use((config) => {
    const accessToken = getToken();
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
    },
    (err) => {
        console.log(err);
    }
)

apiMultiType.interceptors.request.use((config) => {
    const accessToken = getToken();
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
    },
    (err) => {
        console.log(err);
    }
)

// apis
export const apis = {
    //로그인
    login: (userData) => api.post('/api/user/login', userData),
    // 회원가입 
    signup: (userData) => api.post('api/user/signup', userData),
    // 아이디 중복 검사 (추가요소)

    // 메인 페이지 조회
    getAllPostCard: () => api.get(`/api/posts`),

    //게시글 작성 - 수정 소요 있을 수 있음
    postPostCard: (postData) => apiMultiType.post('/api/posts', postData),
    //게시글 수정 - 수정 소요 있을 수 있음
    putPostCard: (postId, putData) => apiMultiType.put(`/api/posts/${postId}`, putData),
    //게시글 삭제 - api부터 만들어야 함
    deletePostCard: (postId) => api.delete(`/api/posts/${postId}`),

    //상세 페이지 조회 - 예시, 이것도 알아보기 쉽게 필요한 값으로 바꿔두기
    getPostDetail: (postId) => api.get(`/api/posts/${postId}`),

    // 이미지 파일 전송하기 삭제예정 ?
    // postImage: (formdata) => apiMultiType.post('api/image', { formdata }),

    // 후기 조회 
    getreviews: (postId) => api.get(`/api/posts/${postId}/reviews`),

    // 후기 작성 - 동적 라우팅 주소 확인하기
    postReview: (postId, reviewData) => api.post(`/api/posts/${postId}/reviews`, reviewData),

    // 후기 수정 - 동적 라우팅 주소 확인하기
    putReview: (postId, reviewId, putReviewData) => api.put(`/api/posts/${postId}/${reviewId}`, putReviewData),

    // 후기 삭제 
    deleteReview: (postId, reviewId) => api.delete(`/api/posts/${postId}/${reviewId}`)
}