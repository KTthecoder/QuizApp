import React, { useState } from 'react'
import '../RandomGamePage/RandomGamePage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import { useNavigate } from 'react-router-dom'

const RandomGamePage = () => {

    const question = {
        id: '1', title: 'How many eggs do you have in the fridge?', 
        ansA: 'Eleven', ansB: 'Two', ansC: 'Seventy Seven', ansD: 'Eight', 
        correct: 'Eleven'
    }

    return (
        <div className='RandomGameContainer'>
            <DrawerNav/>
            <div className="RandomGameBodyContainer">
                {question && 
                    <div key={question.id} className="RandomGameBodyContainer1">
                        <div className='RandomGameQuestionHeader'>
                            <h1>{question.title}</h1>
                        </div>
                        <div className='RandomGameQuestionImg'></div>
                        <div className='RandomGameQuestionsBtnsDiv'>
                            <div className='RandomGameQuestionBtn'>
                                <p>A. {question.ansA}</p>
                            </div>
                            <div className='RandomGameQuestionBtn'>
                                <p>B. {question.ansB}</p>
                            </div>
                            <div className='RandomGameQuestionBtn'>
                                <p>C. {question.ansC}</p>
                            </div>
                            <div className='RandomGameQuestionBtn'>
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