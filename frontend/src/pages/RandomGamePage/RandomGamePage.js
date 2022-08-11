import React, { useState, useContext, useEffect } from 'react'
import '../RandomGamePage/RandomGamePage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import GetCookie from '../../components/GetCookie'

const RandomGamePage = () => {
    const { authTokens } = useContext(AuthContext)
    let { slug } = useParams()
    const [question, setQuestion] = useState()

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
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
        })
        .then(res => res.json())
        .then((data) => {
            setQuestion(data)
        })
        .catch(err => console.log(err))
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