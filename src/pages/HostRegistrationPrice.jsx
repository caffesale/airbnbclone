import React, { useRef } from "react";
import { FaAirbnb } from "react-icons/fa"
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import useInput from "../hooks/useInput"
import { apis } from "../api/api"
import axios from "axios";
import { useSelector } from "react-redux";
import { getToken } from "../utils/auth";

// const BASE_URL = process.env.REACT_APP_SERVER_URL;

const HostRegistrationPrice = () => {
    const [submitValue, setSubmitValue] = useOutletContext();
    const {state:data, onChange} = useInput();
    const navigate = useNavigate();
    const imageLs = useSelector(state => state.postimage);

    const onClickHandler = () => {

        const allData = {...submitValue, "postFee": data }
        
        const formdata = new FormData();

        formdata.append("requestDto", new Blob([JSON.stringify(allData)], {type: "application/json"}));
        formdata.append("postImage", imageLs.postimage[0][0])
        formdata.append("postImage", imageLs.postimage[0][1])
        formdata.append("postImage", imageLs.postimage[0][2])
        formdata.append("postImage", imageLs.postimage[0][3])
        formdata.append("postImage", imageLs.postimage[0][4])
        
        try {
            const fetch = async (formdata) => {
                const accessToken = getToken();
                const response = axios.post("http://54.180.220.222:8080/api/posts", formdata, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "content-type": "multipart/form-data"
                    }
                })
            }
            fetch(formdata);
        }
        catch (error){
            console.log("에러!", error)
        }
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
                        src="https://a0.muscache.com/v/9c/d4/9cd47434-c6bd-58ec-90b7-b50aa7dba461/9cd47434c6bd58ec90b7b50aa7dba461_4000k_1.mp4"
                        type="video/mp4"
                        />
                </video>
                <div className="question--alt">
                    <h1>이제 요금을 설정하실 차례입니다.</h1>
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

                <div className="select-outer">
                    <div className="select-inner">
                        <div className="select-btn-wrapper">
                            <div className="price-wrapper">
                                <input className="price__input" onChange={onChange} type="text" placeholder="$00" id="price"/>
                                <div className="price__inputdiv">/박</div>
                            </div>
                            
                            <div className="price__inputdiv">
                                <h3>이와 비슷한 숙소의 요금은 보통 <br></br> 65359 ~ 87125원 사이입니다.</h3>
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

export default HostRegistrationPrice;



// return (
//     <main className="regi-container">
//         <div className="regi-left">
//             <div className="regi-logo">
//                 <Link to="/"><FaAirbnb /></Link>
//             </div>
//             <div className="regi-title">
//                 <h1>숙소 위치는 어디인가요?</h1>
//             </div>
//         </div>
//         <div className="regi-rightheader">
//             <div className="regi-rightheader-container">
//                 <button>슈퍼호스트에게 물어보기</button>
//                 <button>도움말</button>
//                 <button>저장 및 나가기</button>
//             </div>
//         </div>
//         <div className="regi-rightcontent">
//             <div className="regi-rightcontentcontainer">
//                 <div className="regi-rightbtncontainer">
//                     <form>
//                         <label htmlFor="price"></label>
//                         <input onChange={onChange} type="text" placeholder="가격을 정해주세요" id="price"/>
//                     </form>
//                 </div>
//             </div>
//             <div>
//                 <button onClick={onClickHandler}>다음</button>
//             </div>
//         </div>
//     </main>
// )