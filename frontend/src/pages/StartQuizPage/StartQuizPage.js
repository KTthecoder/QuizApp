import React from 'react'
import '../StartQuizPage/StartQuizPage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'

const StartQuizPage = () => {
  return (
    <div className='QuizStartContainer'>
        <DrawerNav/>
        <div className="QuizStartBodyContainer">
            <div className='QuizStartBodyHeader'>
                <h1>Choose type of your game!</h1>
            </div>
            <div className='QuizStartBodyBtnsDiv'>
                <div className='QuizStartBodyBtn'>
                    <p>All Questions</p>
                </div>
                <div className='QuizStartBodyBtn'>
                    <p>Random Questions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartQuizPage