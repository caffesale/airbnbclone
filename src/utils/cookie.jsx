import Cookies from "universal-cookie";

const cookie = new Cookies();

export const setCookie = (name, value) => {
    return cookie.set(name, value, {
        path:'/',
    })
}

// 쿠키 저장 안되면 이걸로 해볼 것
// export const setCookie = (name, value, exp) => {
//     let date = new Date();
//     date.setTime(exp);
//     document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
// }

export const getCookie = (name) => {
    return cookie.get(name);
}

export const removeCookie = (name) => {
    return cookie.remove(name);
}