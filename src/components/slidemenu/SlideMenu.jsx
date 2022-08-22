import styled from "styled-components";
import { BsStar } from 'react-icons/bs';

const SlideMenu = () => {


    return (
        <Category>
            <StBtn>
                <BsStar className="icon"/><br />
                기상천외한 숙소
            </StBtn>
            <StBtn>
                국립공원
            </StBtn>
            <StBtn>
                통나무집
            </StBtn>
            <StBtn>
                섬
            </StBtn>
            <StBtn>
                해변 근처
            </StBtn>
            <StBtn>
                초소형 주택
            </StBtn>
        </Category>
    )
}

export default SlideMenu

const Category = styled.div`
    text-align: center;
    
`

const StBtn = styled.button`
    cursor: pointer;
    border: none;
    background: #f3f3e6;
    font-size: 13px;
    margin: 10px;
    .icon {
        font-size: 35px;
        margin-bottom: 8px;
    }
`

