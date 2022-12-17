import React, { useState } from "react";
import { FaAirbnb } from "react-icons/fa"
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import registerpage from "../image/registerpage.png"
import "../style/dist/css/host.css"

const HostRegistrationPropertyTypeGroup = () => {
    const navigate = useNavigate()
    const [submitValue, setSubmitValue] = useOutletContext();
    const [homeType, setHomeType] = useState();

    function onClickHandler() {
        console.log("숙소 before", submitValue)

        setSubmitValue({...submitValue, "postCategory": homeType});

        console.log("숙소 after", submitValue);

        navigate("/hostregistration/address")
    }

    return (
        <main className="container">
            
            <div className="container__left">
                <div>
                    <Link to="/"><FaAirbnb className="logo"/></Link>
                </div>
                <div className="question">
                    <h1>호스팅할 숙소 유형을 알려주세요</h1>
                </div>
            </div>

            <div className="container__right">
                <div>
                    <div className="help">
                        <div className="help__btn">
                            <div>도움말</div>
                        </div>
                        <div className="help__btn">
                            <div>저장 및 나가기</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="select-outer">
                        <div className="select-inner">
                            <div className="select-btn-wrapper">
                                <div className="select-btn">
                                    <button onClick={() => {setHomeType("통나무집")}} >통나무집</button>
                                </div>
                                <div className="select-btn">
                                    <button onClick={() => {setHomeType("한옥")}} >한옥</button>
                                </div>
                                <div className="select-btn">
                                    <button onClick={() => {setHomeType("료칸")}} >료칸</button>
                                </div>
                                <div className="select-btn">
                                    <button onClick={() => {setHomeType("쉐어하우스")}} >쉐어하우스</button>
                                </div>
                                <div className="select-btn">
                                    <button onClick={() => {setHomeType("캐슬")}} >캐슬</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="host-footer">
                    <button onClick={onClickHandler}>다음</button>
                </div>
            </div>
        </main>
    )
};

export default HostRegistrationPropertyTypeGroup;

