import React, { useRef } from "react";
import { FaAirbnb } from "react-icons/fa"
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import useInput from "../hooks/useInput";
import "../style/dist/css/host.css"

const HostRegistrationLocation = () => {
    const [submitValue, setSubmitValue] = useOutletContext();
    const navigate = useNavigate();
    const { state, onChange } = useInput();

    function onClickHandler(e) {
        e.preventDefault();
        console.log("before", submitValue)
        setSubmitValue(() => {
            return {...submitValue, "postAddress":state }
        })
        console.log("after", submitValue)
        navigate("/hostregistration/amenites")
    }
    
    return (
        <main className="container">
            <div className="container__left">
                <div >
                    <Link to="/"><FaAirbnb className="logo"/></Link>
                </div>
                <div className="question">
                    <h1>숙소 위치는 어디인가요?</h1>
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
                <div >
                    <div>
                        <div className="address-outer">
                            <input onChange={onChange} type="text" placeholder="주소를 입력하세요" />
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

export default HostRegistrationLocation;