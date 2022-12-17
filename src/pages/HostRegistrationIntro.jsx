import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa"
import "../style/dist/css/host.css"

const HostRegistrationIntro = () => {
    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate("/hostregistration/propertytype")
    }

    return (
        <main className="container">
            <div className="container__left--alt">
                <div >
                    <Link to="/"><FaAirbnb className="logo"/></Link>
                </div>
                <video
                    className="video"
                    autoPlay="autoplay" 
                    muted="muted"
                    >
                    <source 
                        className="video"
                        src="https://a0.muscache.com/v/8b/04/8b0456c7-13f8-54bc-889a-7cf549f144a3/8b0456c713f854bc889a7cf549f144a3_4000k_1.mp4"
                        type="video/mp4"
                        />
                </video>
            </div>
            
            <div className="container__right--alt">
                <div className="help">
                    <Link to="/">
                        <button className="intro-button">나가기</button>
                    </Link>
                </div>

                <div className="intro-text">
                    <div className="intro-texttitle">간단하게 호스팅 시작하기</div>
                    <br />
                    <div>에어비앤비 호스트가 되어보세요. 에어비앤비에서 모든 과정을 도와드립니다.</div>
                </div>
                <div className="host-footer--alt">
                    <button onClick={onClickHandler} className="intro-startbtn">시작하기</button>
                </div>
            </div>
        </main>
    );
};

export default HostRegistrationIntro;



// <main className="intro-container">
// <div className="intro-movie">
//     <Link to="/">
//         <div className="intro-logo">
//             <FaAirbnb />
//         </div>
//     </Link>
//     <video
//         className="video"
//         autoPlay="autoplay" 
//         muted="muted"
//         >
//         <source 
//             src="https://a0.muscache.com/v/8b/04/8b0456c7-13f8-54bc-889a-7cf549f144a3/8b0456c713f854bc889a7cf549f144a3_4000k_1.mp4"
//             type="video/mp4"
//             />
//     </video>
// </div>

// <div className="intro-content">
//     <div className="intro-rightheader">
//             <Link to="/">
//                 <button className="intro-button">나가기</button>
//             </Link>
//     </div>
//     <div className="intro-text">
//         <div className="intro-texttitle">간단하게 호스팅 시작하기</div>
//         <br />
//         <div>에어비앤비 호스트가 되어보세요. 에어비앤비에서 모든 과정을 도와드립니다.</div>
//     </div>
//     <div className="intro-rightfooter">
//         <button onClick={onClickHandler} className="intro-button">시작하기</button>
//     </div>
// </div>
// </main>