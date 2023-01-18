import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData } from '../data/questionData';

const Question = () => {

    const [ questionNum, setQuestionNum ] = React.useState(0);
    const [ totalScore, setTotalScore ] = React.useState([
        { id: 'EI', score: 0 },
        { id: 'SN', score: 0 },
        { id: 'TF', score: 0 },
        { id: 'JP', score: 0 }
    ])

    const navigate = useNavigate();
    const handleClickButton = (num, type) => {

        const newScore = totalScore.map((s) => 
            s.id === type ? { id: s.id, score: s.score + num } : s
        );

        setTotalScore(newScore);
        // 다음 문제로 문제수 증가
        if(QuestionData.length !== questionNum + 1 ){
            setQuestionNum(questionNum + 1);
        } else {
            // MBTI 도출
            const mbti = newScore.reduce(
                (acc, curr) =>
                acc + (curr.score >= 2 ? curr.id.substring(0,1): curr.id.substring(1,2)),
                ""
            );

            // 결과 페이지
            navigate({
                pathname: '/result',
                search: `?${createSearchParams({
                    mbti: mbti,
                })}`
            });
        }

        // if( type === "EI"){
        //     // 기존 스코어에 더할 값을 계산 (기존의 값 + 배점)
        //     const addScore = totalScore[0].score + num;
        //     // 새로운 객체
        //     const newObject = { id: 'EI', score: addScore };
        //     // splice 통해 새로운 객체를 해당객체 자리에 넣어줌
        //     totalScore.splice(0, 1, newObject);

        // } else if ( type === "SN") {
        //     const addScore = totalScore[1].score + num;
        //     const newObject = { id: 'SN', score: addScore };
        //     totalScore.splice(1, 1, newObject);

        // } else if ( type === "TF") {
        //     const addScore = totalScore[2].score + num;
        //     const newObject = { id: 'TF', score: addScore };
        //     totalScore.splice(2, 1, newObject);

        // } else {
        //     const addScore = totalScore[3].score + num;
        //     const newObject = { id: 'JP', score: addScore };
        //     totalScore.splice(3, 1, newObject);

        // }
        setQuestionNum( questionNum + 1);

    }

    return (
        <Wrapper>
            <ProgressBar variant="warning" now={(questionNum / QuestionData.length) * 100} />
            <Wrap>
                <Title>{ QuestionData[questionNum].title }</Title>
                <ButtonGroup>
                    <Button onClick = {() => handleClickButton(1, QuestionData[questionNum].type)} 
                    style={{ width: '100%', minHeight: '80px', fontSize: '20px'}}>
                        { QuestionData[questionNum].answerA }</Button>
                    <Button onClick = {() => handleClickButton(0, QuestionData[questionNum].type)} 
                    style={{ width: '100%', minHeight: '80px', fontSize: '20px', marginTop: '20px'}}>
                        { QuestionData[questionNum].answerB }</Button>
                </ButtonGroup>
            </Wrap>
        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: "jejudoldam";
`
const Wrap = styled.div`
    height: calc(100vh - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 30px;
    text-align: center;
    margin-top:  50px;
`
const ButtonGroup = styled.div`
    width: 60vw;
    margin-top:  50px;
`