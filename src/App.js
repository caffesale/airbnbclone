import logo from "./logo.svg";
import "./App.css";
//
import React from "react";
import { Routes, Route } from "react-router-dom";
// 페이지
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage.jsx"
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import SlideMenu from "./components/slidemenu/SlideMenu";
// 테스트용 임시
import FetchTest from "./components/fetchtest";

function App() {
    return (
        <>
        <FetchTest />
            <div>
                <div>로고</div>
                <div>검색 창</div>
                <div>호스트 되기</div>
                <div>드롭다운(로그인)</div>
            </div>
            <SlideMenu />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
				{/* 여기서부터는 api명세와 컴포넌트명 확인하고 이름 고치기 */}
                <Route path="/detail">
					<Route path=":postid" element={<DetailPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
