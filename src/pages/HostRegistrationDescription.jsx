import React from "react";
import { FaAirbnb } from "react-icons/fa"
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import useInput from "../hooks/useInput";
import registerpage from "../image/registerpage.png"

const HostRegistrationDescription = () => {
    const [submitValue, setSubmitValue] = useOutletContext();
    const title = useInput();
    const description = useInput();
    const navigate = useNavigate();

    function onClickHandler() {
        console.log( "묘사 before", submitValue);

        setSubmitValue({...submitValue, "postTitle": title.state, "postContent": description.state})
        console.log("묘사 after", submitValue)
        navigate("/hostregistration/price")
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
                        src="https://a0.muscache.com/v/33/20/3320c65c-5167-5999-ad8b-89c6c0c27b53/3320c65c51675999ad8b89c6c0c27b53_4000k_1.mp4"
                        type="video/mp4"
                        />
                </video>
                <div className="question--alt">
                    <h1>숙소 이름을 만들어 주세요</h1>
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
                        <div className="select-inner">
                            <div >
                                <form>
                                    <h2>숙소 이름을 정하기</h2>
                                    <textarea className="desc-textarea" {...title}/>
                                    <h2>숙소 설명하기</h2>
                                    <textarea 
                                        className="desc-textarea"
                                        type="textarea" 
                                        placeholder="편안함을 자랑하는 이곳에서 즐거운 시간을 보내실 수 있을 것입니다." 
                                        {...description}
                                        />
                                </form>
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

export default HostRegistrationDescription;


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
//                         <input type="text" placeholder="숙소 이름을 입력해주세요" />
//                         <label htmlFor="description"></label>
//                         <input 
//                             type="textarea" 
//                             placeholder="편안함을 자랑하는 이곳에서 즐거운 시간을 보내실 수 있을 것입니다." 
//                             id="description" />
//                     </form>
//                 </div>
//             </div>
//             <div>
//                 <button>다음</button>
//             </div>
//         </div>
//     </main>
// )