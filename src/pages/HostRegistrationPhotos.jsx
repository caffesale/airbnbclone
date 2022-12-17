import React, { useRef, useState } from "react";
import { FaAirbnb } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "../style/dist/css/host.css"
import { addfiles } from "../redux/postimageSlice/postImageSlice";


const HostRegistrationPhotos= () => {
    const navigate = useNavigate();
    const imageRef = useRef();
    const postimages = useSelector(state => state.postimage);
    const dispatch = useDispatch();

    function onSubmitHandler() {
        const imageList = [];
        const enteredimage = imageRef.current.files;
        imageList.push(enteredimage);

        dispatch(addfiles(imageList));
        navigate("/hostregistration/description")
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
                        src="https://a0.muscache.com/v/d6/12/d6120feb-75fc-52dd-b5bb-5755913fb756/d6120feb75fc52ddb5bb5755913fb756_4000k_1.mp4"
                        type="video/mp4"
                        />
                </video>
                <div className="question--alt">
                    <h1>이제 숙소 사진을 올릴 차례입니다</h1>
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
                            <form >
                                <div className="div-photo">
                                    <h2>사진을 선택해 올려주세요</h2>
                                </div>
                                <input ref={imageRef} type="file" multiple accept="image/*" id="photo" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="host-footer">
                        <button onClick={onSubmitHandler}>다음</button>
                </div>
            </div>
        </main>
    )
};

export default HostRegistrationPhotos;
