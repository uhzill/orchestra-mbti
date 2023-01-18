import React from 'react';
// css-in-js
import styled from 'styled-components';
import MainImage from '../img/main_img.png';
import { useNavigate } from 'react-router-dom';

const Home = () =>{

    const navigate = useNavigate();

    const handleClickButton = () =>{
        navigate('/question');
    }

    return (
        <Wrapper>
            <Header> 오케스트라 <br/> MBTI TEST</Header>
            <Contents>
                <Title>나와 어울리는 악기는?</Title>
                <LogoImg>
                    <img src={MainImage} width={700} alt='메인 이미지' />
                </LogoImg>
                <Button onClick={handleClickButton}>테스트 시작하기</Button>
            </Contents>
        </Wrapper>
    )
}

export default Home;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    font-family: "jejudoldam";
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Header = styled.div`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 24px;
    margin-top: 10px;
    color: #E59721;
`
const LogoImg = styled.div`
    margin-top: 20px;
`

const Button = styled.div`
    width: 200px;
    height: 50px;
    margin-top: 30px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #E59721;
        transform: scale(1.1);
    }
`