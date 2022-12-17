import React from "react";
import { RiPencilRuler2Line } from 'react-icons/ri'
import { BiNews, BiCalendarCheck } from 'react-icons/bi'
import styled from "styled-components";

function Detail(params) {
    return (
        //상세 페이지 정보
        <>
            <ContainerA>
                <h4>아우라 하우스 2비즈 에코 대나무  하우스, 수영장, 리버 뷰</h4>
                <ImgCon>
                        <ImgA>
                            <img className="img_ori" src='https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=960' alt=""/>
                        </ImgA>
                        <ImgB>
                            <img className="img_a" src='https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/f4f7b242-db33-46fc-9080-c3d6a6fd55ec.jpeg?im_w=480' alt=""/>
                        </ImgB>
                        <ImgC>
                            <img className="img_b" src='https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/372e7d6f-7fb9-4668-92f0-25bb9a346814.jpeg?im_w=480' alt=""/>
                        </ImgC>
                        <ImgD>
                            <img className="img_c" src='https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/4756e699-f474-4ca7-8b77-06b12715a6cb.jpeg?im_w=480' alt=""/>
                        </ImgD>
                        <ImgE>
                            <img className="img_d" src='https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/fca892a4-3481-4ad1-9f92-404feaa42e9f.jpeg?im_w=480' alt=""/>
                        </ImgE>
                </ImgCon>
            </ContainerA>
            <ContainerB>
                <Intro>
                    <div className="b">
                        <div className="name" style={{ marginBottom: "20px" }}>
                            <h5 style={{ fontWeight: "bold" }}>Wayan님이 호스팅하는 저택 전체</h5>
                            <span >최대 인원 4명침실 2개침대 2개욕실 2개</span>
                        </div>
                        <div style={{ borderTop: "1px solid #d6d6d6"}} />
                        <div className="c" style={{ marginTop:"30px" }}>
                            <RiPencilRuler2Line style={{ fontSize:"30px", fontWeight: "bold" }}/>
                            <span style={{ fontSize: "18px", marginLeft:"15px", fontWeight: "600" }}>디자이너:</span><br />
                            <span style={{ fontSize:"15px", marginLeft:"45px", fontWeight: "100" }}>Ibuku Bamboo Architecture and Design</span>
                        </div>
                        <div className="d" style={{ marginTop:"30px" }}>
                            <BiNews style={{ fontSize:"30px", fontWeight: "bold" }}/>
                            <span style={{ fontSize: "18px", marginLeft:"15px", fontWeight: "600" }}>언론소개:</span><br />
                            <span style={{ fontSize:"15px", marginLeft:"45px", fontWeight: "100" }}>Condé Nast Traveler, October 2019</span><br />
                            <span style={{ fontSize:"15px", marginLeft:"45px", fontWeight: "100" }}>Home Crux, August 2019</span>
                        </div>
                        <div className="e" style={{ marginTop:"30px" }}>
                            <BiCalendarCheck style={{ fontSize:"30px", fontWeight: "bold" }}/>
                            <span style={{ fontSize: "18px", marginLeft:"15px", fontWeight: "600" }}>6월 27일 전까지 무료로 취소하실 수 있습니다.</span><br />
                        </div>
                        <div style={{ borderTop: "1px solid #d6d6d6", margin: "30px 0 30px 0"}} />
                        <div>
                            <span>
                            아우라 하우스는 일출을 감상하기 위해 동쪽으로 향하는 아융강 서쪽 둑에 지어진 아름답고 독특한 생태 대나무 집입니다. 아우라 하우스는 우붓에서 25분, 캉구에서 35분 거리에 있습니다. 예약이 완료된 경우, 에어비앤비 프로필을 확인하여 아름다운 대나무 집 10채를 더 찾아보세요. 모두 같은 지역에 있습니다. <br/><br/>숙소 아우라 하우스는 아융 강 위에 자리잡고 있어 아름다운 전망을 자랑합니다. 욕실이 딸린 매우 낭만적인 침실 2개, 가구가 완비된 대형 거실, 작은 주방, 전망을 감상할 수 있는 전용 수영장이 갖춰져 있습니다.
                            </span>
                        </div>
                        <div style={{ borderTop: "1px solid #d6d6d6", margin: "30px 0 30px 0"}} />

                    </div >
                </Intro>
                <Reserve>
                    <Layout>
                        <div style={{}}>
                            <span style={{fontSize:"20px",fontWeight:"500"}}>₩482,666</span>
                            <span style={{fontSize:"15px"}}>/박</span>
                            <span style={{justifySelf:"end"}}>⭐4.87 ·후기 142개</span>
                        </div>
                        <button></button>
                    </Layout>

                </Reserve>
            </ContainerB>
        </>

    );
}

export default Detail;

const ContainerA = styled.div`
    margin: 20px 20% 40px 20%;
    h4 {
        font-weight: 600;
        margin-bottom: 20px;
    }
    
`

const ImgCon = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: 
        "a a b c" 
        "a a d e";
    gap: 10px;
    position: absolute;
    width: 100%;
    height: 40vh;
`
const ImgA = styled.div`
    grid-area : a;    
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    overflow: hidden;
    img {
        object-fit: cover;
        object-position: center;
    }
`
const ImgB = styled.div`
    grid-area : b;
    margin: 0px 10px;
    gap: 10px;
    overflow: hidden;

    img {
        width: auto;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    
`
const ImgC = styled.div`
    grid-area : c;
    margin: 0px 10px;
    gap: 10px;
    overflow: hidden;

    img {
        width: auto;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    
`
const ImgD = styled.div`
    grid-area : d;
    margin: 0px 10px;
    gap: 10px;
    overflow: hidden;

    img {
        width: auto;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    
`
const ImgE = styled.div`
    grid-area : e;
    margin: 0px 10px;
    gap: 10px;
    overflow: hidden;

    img {
        width: auto;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    
`

const ContainerB = styled.div`
    margin: 20px 20% 40px 20%;
    display: grid;
    grid-template-columns: repeat(1, 3fr 2fr);
`
const Intro = styled.div`
    
`
const Reserve = styled.form`
    justify-self: end;
    margin: 48px 0 0 20%;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    padding: 24px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
    height: 450px;
    width: 350px;
`

const Layout = styled.div`
    display: grid;
    grid-template-rows: repeat(10, 45px)
`