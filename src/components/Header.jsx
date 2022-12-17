import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { TbBrandAirbnb } from 'react-icons/tb';
import { FaUserCircle } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { GrLogout } from 'react-icons/gr'
import { removeToken } from "../utils/auth";

function Header({auth, setAuth}) {

    const logout = () => {
        removeToken();
        setAuth(false);
    }

    return (
        <>
            <Container>
                <div></div>
                <Logo>
                    <TbBrandAirbnb className="icon" />
                    <span className="logo_name">airbnb</span>
                </Logo>
                <Btn>
                    <FirstButton>
                        어디든지
                    </FirstButton>
                    <SecoundButton>
                        언제든 일주일
                    </SecoundButton>
                    <ThirdButton>
                        게스트 추가
                        <FiSearch className="glass"/>
                    </ThirdButton>

                </Btn>
                <Posting>호스트 되기 </Posting>


                { auth == true
                ? <Icon onClick={logout}><GrLogout /></Icon>
                : <>
                    <Link to={'/register'}>
                    <Icon><MdLanguage /></Icon>
                    </Link>

                    <DropDown>
                        <Link to='/login'>
                        <HiMenu className="icon" />
                        <FaUserCircle onClick="menu" className="icon" />
                        </Link>
                    </DropDown>
                </>
                }
            </Container>

        </>
    )
}

export default Header;

const Container = styled.div`
    display: grid;
    height: 80px;
    grid-template-columns: repeat(6, 7.5% 30% 42% 90px 80px 80px);
    margin: 0 0 20px 0;
    cursor: pointer;
    border-bottom: 1px solid #f0f0f0;
`

const Logo = styled.div`
    display: flex;
    margin-top: 22px;
    padding-right: 10px;
    font-size: 40px;
    color: hsl(358, 100%, 68%);
    cursor: pointer;
    .logo_name{
        display: grid;
        grid-template-rows: repeat(3, 33% 33% 33%);
        font-size: 25px;
        font-weight: bold;
    }
`

const Btn = styled.div`
    margin-top: 16px; 
    
`

const FirstButton = styled.button`
    height: 48px;
    width: 110px;
    border-bottom-left-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    border-left: 1px solid #d6d6d6;
    border-right: none;
    background-color: #ffffff;
    font-size: 0.9rem;
    font-weight: 600;
    box-shadow: 1px 1px 3px 1px #d3d3d3;
    &:hover{
        box-shadow: 2px 2px 5px 2px #d3d3d3;
        transition: all 0.2s;
    }
`

const SecoundButton = styled.button`
    height: 48px;
    width: 140px;
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    border-left: 1px solid #d6d6d6;
    border-right: 1px solid #d6d6d6;
    background-color: #ffffff;
    font-size: 0.9rem;
    font-weight: 600;
    box-shadow: 1px 1px 3px 1px #d3d3d3;
    &:hover{
        box-shadow: 2px 2px 5px 2px #d3d3d3;
        transition: all 0.2s;
    }
`
const ThirdButton = styled.button`
    height: 48px;
    width: 150px;
    border-bottom-right-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    border-left: none;
    border-right: 1px solid #d6d6d6;
    background-color: #ffffff;
    font-size: 0.9rem;
    font-weight: 500;
    color: #797979;
    box-shadow: 1px 1px 3px 1px #d3d3d3;
    .glass{
        color: #ffffff;
        font-size: 16px;
        margin-left: 8px;
        border: 2px solid hsl(358, 100%, 68%);
        border-radius: 50%;
        background-color: hsl(358, 100%, 68%);
    }
    &:hover{
        box-shadow: 2px 2px 5px 2px #d3d3d3;
        transition: all 0.2s;
    }
`

const Posting = styled.button`
    align-items: center;
    height: 40px;
    width: 110px;
    margin-top: 22px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    background-color: #ffffff;
    cursor: pointer;
    &:hover{
        background-color: #f0f0f0;
        
    }
`

const Icon = styled.button`
    align-items: center;
    height: 40px;
    width: 40px;
    margin-top: 26px;
    margin-left: 20px;
    padding-bottom: 5px;
    font-size: 22px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    background-color: #ffffff;
    color: #8d8d8d;
    cursor: pointer;
    &:hover{
        background-color: #f0f0f0;
        
    }
`

const DropDown = styled.div`
    height: 40px;
    width: 80px;
    font-size: 25px;
    margin-top: 22px;
    text-align: center;
    border: solid;
    border-width: 2px;
    border-radius: 20px;
    border-color: #f0f0f0; 
    position: right;
    .icon{
        color: #767676;
        margin-left: 3px;
        margin-right: 3px;
        margin-top: -6px;
    }

    &:hover{
        box-shadow: 1px 1px 1px 1px #d3d3d3;
        transition: all 0.2s;
    }

`