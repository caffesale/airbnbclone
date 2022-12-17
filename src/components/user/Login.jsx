// import { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput'
import { apis } from '../../api/api';
import { saveToken } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TbBrandAirbnb } from 'react-icons/tb';
import { FaAirbnb } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();

    // 닉네임, 아이디, 비밀번호 확인
    const userId = useInput();
    const userPassword = useInput();

    // axios
    const onSubmithandler = async (e) => {
        e.preventDefault()
        // console.log(body)
        try{
            const response  = await apis.login(
                {
                    userUsername : userId.state,
                    userPassword : userPassword.state
                }
            )

            const Token = response.data.data.accessToken;
            console.log("액세스토큰", Token)
            if(Token) {
                saveToken(Token);
                navigate('/');
            };
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <Link to={'/'}><Logo><FaAirbnb/></Logo></Link>
            <Container>
                <LoginBox onSubmit={onSubmithandler}>
                    
                    <h5>로그인</h5>
                    
                    <div className='line'></div>
                    
                    <h4>에어비앤비에 오신 것을 환영합니다.</h4>
                    
                    
                    <input className='Id' type='text' placeholder='아이디를 입력해주세요' {...userId}></input>
                    <br />
                    
                    <input className='Pw'type='password' placeholder='비밀번호를 입력해주세요' {...userPassword}></input>
                    
                    <p>인증번호 발송시 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.</p>
                    <p className='text'>개인정보 처리방침</p>

                    <br />


                    <StButton>로그인</StButton>
                    <Link to={'/register'}><RegButton>회원가입</RegButton></Link>
                </LoginBox>
            </Container>
        </>
    );
}

export default Login;

const Logo = styled.div`
    display: flex;
    margin-top: 22px;
    margin-left: 2vw;
    padding-right: 10px;
    font-size: 40px;
    color: hsl(358, 100%, 68%);
    cursor: pointer;
`

const Container = styled.div`
    display: grid;
    width: 568px;
    height: 490px;
    margin: 5rem auto 0 auto;
    border: 1px solid #d6d6d6;
    border-radius: 15px;

    /* background-color: #5d9b00; */
`

const LoginBox = styled.form`
    width: 100%;
    height: 100%;
    
    border-radius: 1rem;
    > h5 {
        margin:20px 0 13px 0;
        text-align: center;
        padding-bottom: 7px;
        font-size: 17px;
    }
    .line { border-bottom: 1px solid #d6d6d6; }
    > h4 {
        margin:30px 0 25px 15px;
        font-size: 20px;
    }
    > input {
        margin:0 0 -1px 15px;
        width: 93%;
        height: 11%;
        border: 1px solid #9e9e9e;
        
    }
    .Id{
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .Pw{
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    > p {
        margin-left: 18px;
        margin-top: 5px;
        font-size: 12px;
    }
    .text{
        margin-top:-5px;
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;
    }

`

const StButton = styled.button`
    margin: 30px 0 5px 18px;
    border:none;
    background-color: hsl(358, 100%, 68%);
    color: #ffffff;
    border-radius: 8px;
    width: 93%;
    height: 11%;
    cursor: pointer;
`

const RegButton = styled.p`
    display:flex;
    justify-content: end;
    margin-right: 25px;
    cursor: pointer;
`