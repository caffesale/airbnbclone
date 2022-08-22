// import react from 'react';
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

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
        if(e.target.value.length < 4 || e.target.value.length > 8) {
            setIdMessege('4글자 이상 8글자 미만으로 입력해주세요')
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


    

    
    
    

    return (
        <Container>
            <LoginBox>
                <h5>회원가입</h5>
                <h4>에어비앤비에 오신 것을 환영합니다.</h4>
                <p>닉네임</p>
                <input type="text" placeholder='닉네임 입력' onChange={onChangeNickName} />
                <br />
                {nickName.length > 0 && isNickName ? 
                <span>{nickNameMessege}</span>
                 : 
                <span>{nickNameMessege}</span>
                }

                <p>아이디</p>
                <input type="text" placeholder='아이디 입력' onChange={onChangeId} />
                <br />
                {id.length > 0 && isId ? 
                <span>{idMessege}</span>
                 : 
                <span>{idMessege}</span>
                }

                <p>비밀번호</p>
                <input type="text" placeholder='비밀번호 입력' onChange={onChangePW} />
                <br />
                {pW.length > 0 && isPW ? 
                <span>{pWMessege}</span>
                 : 
                <span>{pWMessege}</span>
                }

                <p>비밀번호 확인</p>
                <input type="text" placeholder='비밀번호 한번 더 입력' onChange={onChangePWConfirm} />
                <br />
                {pWConfirm.length > 0 && isPWConfirm ? 
                <span>{pWConfirmMessege}</span>
                 : 
                <span>{pWConfirmMessege}</span>
                }
                <br />
                <StButton>회원가입</StButton>
            </LoginBox>
        </Container>
    );
}

export default Register

const Container = styled.div`
    display: grid;
    justify-content: center;
    text-align : center;
    min-height: 100vh;
`

const LoginBox = styled.form`
    height : 300px;
    width : 500px;
    padding: 3rem;
    border-radius: 1rem;
`

const StButton = styled.button`
    margin-top : 20px;
`