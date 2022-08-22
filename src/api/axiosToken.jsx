// import axios from "axios";

// // baseURL 환경변수로 넣어주기
// // const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// const instance = axios.create({SERVER_URL})

// instance.interceptors.request.use((config) => {
//     // 토큰 첨부하기 위한 헤더
//     // config.headers['X-AUTH-TOKEN'] = `${}`
//     config.headers.withCredentials = true;
//     return config;
// })

// export default {
//     GET: (endpoint) => {
//         instance.get(`${endpoint}`);
//     },
//     POST: (endpoint, body) => {
//         instance.post(endpoint, body);
//     },
//     DELETE: (endpoint, url) => {
//         instance.delete(`${endpoint}/${url}`);
//     }
// }