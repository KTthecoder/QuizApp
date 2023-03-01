import React, { useState, useContext, useEffect } from 'react'
import '../RandomGamePage/RandomGamePage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import GetCookie from '../../components/GetCookie'

const RandomGamePage = () => {
    const { accessToken } = useContext(AuthContext)
    let { slug } = useParams()
    const [question, setQuestion] = useState()
    const [answerA, setAnswerA] = useState(null)
    const [answerB, setAnswerB] = useState(null)
    const [answerC, setAnswerC] = useState(null)
    const [answerD, setAnswerD] = useState(null)

    const [answerAClicked, setAnswerAClicked] = useState(null)
    const [answerBClicked, setAnswerBClicked] = useState(null)
    const [answerCClicked, setAnswerCClicked] = useState(null)
    const [answerDClicked, setAnswerDClicked] = useState(null)

    useEffect(() => {
        RandomQuestion()
    }, [])

    const RandomQuestion = () => {
        const csrftoken = GetCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/quiz/${slug}/random-game`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': 'Bearer ' + accessToken
            },
        })
        .then(res => res.json())
        .then((data) => {
            setQuestion(data)
            setAnswerA(null)
            setAnswerB(null)
            setAnswerC(null)
            setAnswerD(null)
            setAnswerAClicked(null)
            setAnswerBClicked(null)
            setAnswerCClicked(null)
            setAnswerDClicked(null)
        })
        .catch(err => console.log(err))
    }

    const CheckAnswer = () => {
        if(question.correctAns === question.ansA){
            setAnswerA(true)
            setAnswerB(false)
            setAnswerC(false)
            setAnswerD(false)
            setAnswerAClicked(true)
        }

        if(question.correctAns === question.ansB){
            setAnswerA(false)
            setAnswerB(true)
            setAnswerC(false)
            setAnswerD(false)
            setAnswerBClicked(true)
        }

        if(question.correctAns === question.ansC){
            setAnswerA(false)
            setAnswerB(false)
            setAnswerC(true)
            setAnswerD(false)
            setAnswerCClicked(true)
        }

        if(question.correctAns === question.ansD){
            setAnswerA(false)
            setAnswerB(false)
            setAnswerC(false)
            setAnswerD(true)
            setAnswerDClicked(true)
        }
        
    }

    return (
        <div className='RandomGameContainer'>
            <DrawerNav/>
            <div className="RandomGameBodyContainer">
                <div className='RandomGameBodyNextBtnDiv' onClick={() => RandomQuestion()}> 
                    <p>Random Question</p>
                </div>
                {question && 
                    <div key={question.id} className="RandomGameBodyContainer1">
                        <div className='RandomGameQuestionHeader'>
                            <h1>{question.title}</h1>
                        </div>
                        <div className='RandomGameQuestionImg' style={{backgroundImage: `url(http://127.0.0.1:8000${question.questionImg})`}}></div>
                        <div className='RandomGameQuestionsBtnsDiv'>
                            <div className='RandomGameQuestionBtn' style={answerA == true  ? {backgroundColor: 'green'} : answerA == false ? {backgroundColor: 'red'}: {}} onClick={() => CheckAnswer()}>
                                <p>A. {question.ansA}</p>
                            </div>
                            <div className='RandomGameQuestionBtn' style={answerB == true  ? {backgroundColor: 'green'} : answerB == false ? {backgroundColor: 'red'} : {}} onClick={() => CheckAnswer()}>
                                <p>B. {question.ansB}</p>
                            </div>
                            <div className='RandomGameQuestionBtn' style={answerC == true  ? {backgroundColor: 'green'} : answerC == false ? {backgroundColor: 'red'} : {}} onClick={() => CheckAnswer()}>
                                <p>C. {question.ansC}</p>
                            </div>
                            <div className='RandomGameQuestionBtn' style={answerD == true  ? {backgroundColor: 'green'} : answerD == false ? {backgroundColor: 'red'} : {}} onClick={() => CheckAnswer()}>
                                <p>D. {question.ansD}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default RandomGamePage