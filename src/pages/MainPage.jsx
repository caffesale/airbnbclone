import React, { useEffect, useState } from "react";
import { apis } from "../api/api";
import { useAsync } from "../hooks/useAsync";
import PostCard from "../components/postcard/PostCard";
import { Link } from "react-router-dom";
import "../style/dist/css/main.css"
//
import Header from "../components/Header";
import SlideMenu from "../components/slidemenu/SlideMenu";
import { getToken } from "../utils/auth";



function MainPage() {
    const [currentIndex, setCurrentIndex] = useState("");
    const [dataList, setDataList] = useState([]);
    const [auth, setAuth] = useState(false);
    // const {loading, error, value: postCards } = useAsync(apis.getAllPostCard, [currentIndex]);
    
    // if(loading) return <div>...로딩 중...</div>
    // if(error) return <div>{error}</div>
    // const postCardList = postCards.data.data;

    useEffect(() => {
        const main = async () => {
            try{    
                const response = await apis.getAllPostCard();
                const postList = response.data.data;
                
                if(currentIndex == "") {
                    setDataList(postList)
                }
                else{
                    const filteredList = postList.filter((each) => {
                        return each.postCategory == currentIndex
                    })
                    setDataList(filteredList)
                }
            }catch (err){
                console.log(err)
            } 
        }
        main();
    }, [currentIndex])

    useEffect(() => {
        const token = getToken();
        if(token){
            setAuth(true)
        }
    }, [])

    
    return (
        <>
            <Header auth={auth} setAuth={setAuth}/>
            <SlideMenu currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
            <div className="flex-container">
                {dataList.map((each) => {
                    return (
                        <div className="flex-item">
                            <PostCard
                                key={each.postId}
                                postAddress={each.postAddress}
                                postFee={each.postFee}
                                postTitle={each.postTitle}
                                imageFiles={each.imageFiles}
                                reviewStar={each.reviewStar}
                                />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MainPage;