import React, { useState } from "react";
import { FaAirbnb, FaParking, FaSwimmingPool, FaWifi, FaWind, FaPlay } from "react-icons/fa";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "../style/dist/css/host.css"


const HostRegistrationAmenities = () => {
    const [submitValue, setSubmitValue] = useOutletContext()
    const navigate = useNavigate()
    const [facility, setFacility] = useState();

    function onClickHandler() {

        console.log("편의시설 before", submitValue)
        setSubmitValue(() => {
            return {...submitValue, "facilitiesList": [facility]}
        })
        console.log("편의시설 after", submitValue)
        navigate("/hostregistration/photos")
    }

    return (
        <main className="container">
            <div className="container__left">
                <div >
                    <Link to="/"><FaAirbnb className="logo"/></Link>
                </div>
                <div className="question">
                    <h1>숙소 편의시설 정보를 추가해 주세요</h1>
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
                    <div className="select-outer">
                        <div className="select-inner height-ad">
                            <div className="select-innner__title">
                                <h3>특별히 내세울만한 편의시설이 있나요?</h3>
                            </div>
                            <div className="amenites">
                                <button onClick={()=>{ setFacility("facilitiesParking")}}>
                                    <div>
                                        <FaParking />
                                    </div>
                                    <div>주차장</div>
                                </button>
                                <button onClick={()=>{ setFacility("facilitiesWifi")}}>
                                    <div>
                                        <FaWifi />
                                    </div>
                                    <div>와이파이</div>
                                </button>
                                <button onClick={()=>{ setFacility("facilitiesSwimmingpool")}}>
                                    <div>
                                        <FaSwimmingPool />
                                    </div>
                                    <div>수영장</div>
                                </button>
                                <button onClick={()=>{ setFacility("facilitiesAirconditioner")}}>
                                    <div>
                                        <FaWind />
                                    </div>
                                    <div>에어컨</div>
                                </button>
                                <button onClick={()=>{ setFacility("facilitiesTv")}}>
                                    <div>
                                        <FaPlay />
                                    </div>
                                    <div>TV</div>
                                </button>
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

export default HostRegistrationAmenities;

// <main className="regi-container">
// <div className="regi-left">
//     <div className="regi-logo">
//         <Link to="/"><FaAirbnb /></Link>
//     </div>
//     <div className="regi-title">
//         <h1>숙소 편의시설 정보를 추가해주세요.</h1>
//     </div>
// </div>
// <div className="regi-rightheader">
//     <div className="regi-rightheader-container">
//         <button>슈퍼호스트에게 물어보기</button>
//         <button>도움말</button>
//         <button>저장 및 나가기</button>
//     </div>
// </div>
// <div className="regi-rightcontent">
//     <div className="regi-rightcontentcontainer">
//         <div>
//             <h3>특별히 내세울만한 편의시설이 있나요?</h3>
//         </div>
//         <div>
//             <h3>다음 인기 편의시설이 있나요?</h3>
//         </div>
//         <div>
//             <h3>다음 안전 물품이 있나요?</h3>
//         </div>
//     </div>
//     <div>
//         <button onClick={onClickHandler}>다음</button>
//     </div>
// </div>
// </main>