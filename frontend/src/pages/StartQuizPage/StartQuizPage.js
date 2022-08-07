import React from 'react'
import '../StartQuizPage/StartQuizPage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import { useNavigate } from 'react-router-dom'

const StartQuizPage = () => {
    const navigate = useNavigate()

    return (
        <div className='QuizStartContainer'>
            <DrawerNav/>
            <div className="QuizStartBodyContainer">
                <div className='QuizStartBodyHeader'>
                    <h1>Choose type of your game!</h1>
                </div>
                <div className='QuizStartBodyBtnsDiv'>
                    <div className='QuizStartBodyBtn' onClick={() => navigate("/quiz/quiz-one/normal")}>
                        <p>Normal</p>
                    </div>
                    <div className='QuizStartBodyBtn' onClick={() => navigate("/quiz/quiz-one/random")}>
                        <p>Random Questions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartQuizPage