import styled from "styled-components";
import { FaArchway } from 'react-icons/fa'
import { MdPeopleOutline, MdOutlineCabin } from 'react-icons/md'
import { RiAncientGateLine, RiAncientPavilionLine } from 'react-icons/ri'



// BiChevronLeftCircle()
const SlideMenu = ({ currentIndex, setCurrentIndex }) => {

    return (
        <Category>
            <FlexBox>
                
                <StBtn onClick={() => {setCurrentIndex("통나무집"); console.log(currentIndex)}}>
                    <MdOutlineCabin className="icon"/><br />
                    통나무집
                </StBtn>
                <StBtn onClick={() => {setCurrentIndex("캐슬"); console.log(currentIndex)}}>
                    <FaArchway className="icon"/><br />
                    캐슬
                </StBtn>
                <StBtn onClick={() => {setCurrentIndex("한옥"); console.log(currentIndex)}}>
                    <RiAncientGateLine className="icon"/><br />
                    한옥
                </StBtn>
                <StBtn onClick={() => {setCurrentIndex("료칸"); console.log(currentIndex)}}>
                    <RiAncientPavilionLine className="icon" /><br />
                    료칸
                </StBtn>
                <StBtn onClick={() => {setCurrentIndex("쉐어하우스"); console.log(currentIndex)}}>
                    <MdPeopleOutline className="icon"/><br />
                    쉐어하우스
                </StBtn>
                
            </FlexBox>
        </Category>
    )
}

export default SlideMenu

const Category = styled.div`
    text-align: center;
        
`

const FlexBox = styled.div`
    /* text-align: center; */
`


const StBtn = styled.button`
    cursor: pointer;
    flex: none;
    border: none;
    background: #ffffff;
    color: #767676;
    font-size: 12px;
    margin: 10px 20px 0 20px;
    .icon {
        font-size: 25px;
        margin-bottom: 8px;
    }
    &:after{
        margin-top: 20px;
        display:block;
        content: '';
        border-bottom:solid 2px #767676;
        transform: scaleX(0);
        transition: transform;
    }
    &:hover{
        color: hsl(0, 0%, 13%);
    }
    &:hover:after{
        transform: scaleX(1);
    }

`

