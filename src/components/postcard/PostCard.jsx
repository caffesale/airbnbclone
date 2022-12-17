import React from "react";
import "./postCard.css"
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai"

function PostCard({postAddress, postFee, postTitle, imageFiles, reviewStar}) {
    const image = imageFiles;
    console.log(image);
    return (
        <div className="card">
            <div className="card__image">
                <button className="heart_cont">
                    <AiOutlineHeart className="heart_icon" />
                </button>
                <div className="image_container">
                        <img src={image[0]} alt="임시 이미지"/>
                </div>
            </div>
            <div className="card__description">
                <div className="description-container">
                    <div>
                        <div className="star-container">
                            <div>
                                <span className="card_id">Abiansemal, 인도네시아</span>
                            </div>
                            <div className="name_star">
                                <FaStar />
                                <span >{reviewStar}</span>
                            </div>
                        </div>
                        <div>
                            <span className="etc">5,275km</span>
                        </div>
                        <div>
                            <span className="etc">7월 2일~8일</span>
                        </div>
                        <div>
                            <span className="won">{postFee}원</span>
                        </div>
                        <div>
                            <span>{postAddress}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostCard;