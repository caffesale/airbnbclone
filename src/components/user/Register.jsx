import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { apis } from '../../api/api';
import { Link } from 'react-router-dom';
import { FaAirbnb } from 'react-icons/fa';

const Register = () => {
    // 닉네임, 아이디, 비밀번호 확인
    const [nickName, setNickName] = useState('')
    const [id, setId] = useState('')
    const [pW, setPW] = useState('')
    const [pWConfirm, setPWConfirm] = useState('')

    // 오류 메시지 상태 저장
    const [nickNameMessege, setNickNameMessege] = useState('')
    const [idMessege, setIdMessege] = useState('')
    const [pWMessege, setPWMessege] = useState('')
    const [pWConfirmMessege, setpWConfirmMessege] = useState('')

    // 유효성 검사
    const [isNickName, setIsNickName] = useState(false)
    const [isId, setIsId] = useState(false)
    const [isPW, setIsPW] = useState(false)
    const [isPWConfirm, setIsPWConfirm] = useState(false)

    // 닉네임 조건 함수
    const onChangeNickName = useCallback((e) => {
        setNickName(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 5) {
            setNickNameMessege('2글자 이상 5글자 미만으로 입력해주세요')
            setIsNickName(false)
        } else {
            setNickNameMessege('올바른 닉네임 형식입니다 :)')
            setIsNickName(true)
        }
    }, [])

    // 아이디 조건 함수
    const onChangeId = useCallback((e) => {
        setId(e.target.value)
        if(e.target.value.length < 6 || e.target.value.length > 10) {
            setIdMessege('6글자 이상 10글자 미만으로 입력해주세요')
            setIsId(false)
        } else {
            setIdMessege('올바른 아이디 형식입니다 :)')
            setIsId(true)
        }
    }, [])

    // 비밀번호 조건 함수
    const onChangePW = useCallback((e) => {
        const pWRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
        const pWCurrent = e.target.value
        setPW(pWCurrent)
        if ( !pWRegex.test(pWCurrent) ) {
            setPWMessege('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
            setIsPW(false)
        } else {
            setPWMessege('안전한 비밀번호 형식입니다 :)')
            setIsPW(true)
        }
    }, [])

    // 비밀번호 확인 함수
    const onChangePWConfirm = useCallback((e) => {
        const pWConfirmCurrnt = e.target.value
        setPWConfirm(pWConfirmCurrnt)
    },[])
    // useState가 비동기 함수 임으로 1글자 씩 반응이 느린 부분 수정
    useEffect(() => {
        if (pWConfirm.length > 0){
        if ( pW === pWConfirm){
            setIsPWConfirm(true)
            setpWConfirmMessege('비밀번호를 똑같이 입력했어요 :)')
        } else {
            setIsPWConfirm(false)
            setpWConfirmMessege('비밀번호가 틀려요! 다시 확인해주세요ㅠㅠ')
        }}
    } , [pW, pWConfirm]);


    // axios 
    const onSubmithandler = async (e) => {
        e.preventDefault()
        if (pW === pWConfirm){
            try{
                const response = await apis.signup(
                    {
                        userUsername : id,
                        userNickname : nickName,
                        userPassword : pW,
                    }
                )
                console.log(response)
                
            } catch (error) {
                console.log(error)
            }
        } else {
            alert('비밀번호를 확인해주세요!')
        }
    }

    
    
    

    return (
        <>
        <Link to={'/'}><Logo><FaAirbnb/></Logo></Link>
        <Container>
            <SignInBox onSubmit={onSubmithandler}>
                <h5>회원가입</h5>
                <div className='line'></div>
                <h4>에어비앤비에 오신 것을 환영합니다.</h4>
                <p className='input_name'>닉네임</p>
                <input type="text" placeholder='닉네임 입력' onChange={onChangeNickName} />
                
                {nickName.length > 0 && isNickName ? 
                <span style={{color:"blue"}}>{nickNameMessege}</span>
                 : 
                <span style={{color:"red"}}>{nickNameMessege}</span>
                }

                <p className='input_name'>아이디</p>
                <input type="text" placeholder='아이디 입력' onChange={onChangeId} />
                
                {id.length > 0 && isId ? 
                <span style={{color:"blue"}}>{idMessege}</span>
                 : 
                <span style={{color:"red"}}>{idMessege}</span>
                }

                <p className='input_name'>비밀번호</p>
                <input type="text" placeholder='비밀번호 입력' onChange={onChangePW} />
                
                {pW.length > 0 && isPW ? 
                <span style={{color:"blue"}}>{pWMessege}</span>
                 : 
                <span style={{color:"red"}}>{pWMessege}</span>
                }

                <p className='input_name'>비밀번호 확인</p>
                <input type="text" placeholder='비밀번호 한번 더 입력' onChange={onChangePWConfirm} />
                
                {pWConfirm.length > 0 && isPWConfirm ? 
                <span style={{color:"blue"}}>{pWConfirmMessege}</span>
                 : 
                <span style={{color:"red"}}>{pWConfirmMessege}</span>
                }
                <br />
                <StButton>회원가입</StButton>
                <Link to={'/login'}><LoginPage>로그인</LoginPage></Link>
            </SignInBox>
        </Container>
        </>
    );
}

export default Register

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
    height: 690px;
    margin: 5rem auto 0 auto;
    border: 1px solid #d6d6d6;
    border-radius: 15px;
`

const SignInBox = styled.form`
    width: 100%;
    height: 100%;
    /* padding: 3rem; */
    border-radius: 1rem;

    > h5 {
        margin:20px 0 13px 0;
        text-align: center;
        padding-bottom: 7px;
        font-size: 17px;
    }

    .line{ border-bottom: 1px solid #d6d6d6; }

    > h4 {
        margin:30px 0 25px 15px;
        font-size: 20px;
    }

    > input {
        display: flex;
        margin:0 0 -1px 20px;
        width: 90%;
        height: 7.5%;
        border: 1px solid #9e9e9e;
        border-radius: 12px;
    }
    .input_name{
        margin-left: 20px;
        font-size: 17px;
        font-weight: 600;
    }
    > span {
        margin: 0 0 0 20px;
        font-size: 14px;
    }
`

const StButton = styled.button`
    margin: 30px 0 5px 18px;
    border:none;
    background-color: hsl(358, 100%, 68%);
    color: #ffffff;
    border-radius: 8px;
    width: 93%;
    height: 7.5%;
    cursor: pointer;
`

const LoginPage = styled.p`
    display:flex;
    justify-content: end;
    margin-right: 25px;
    cursor: pointer;
 `