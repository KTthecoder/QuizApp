import React, { useState, useContext, useEffect } from 'react'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import '../NormalGamePage/NormalGamePage.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import GetCookie from '../../components/GetCookie'

const NormalGamePage = () => {
    const [questions, setQuestions] = useState([])
    let { slug } = useParams()
    const { authTokens } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const AllQuestions = () => {
        const csrftoken = GetCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/quiz/${slug}/normal-game`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
        })
        .then(res => res.json())
        .then((data) => {
            setQuestions(data)
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        AllQuestions()
    }, [])
    

    return (
        <div className='NormalGameContainer'>
            <DrawerNav/>
            <div className="NormalGameBodyContainer">
                {questions && questions.length === 0
                ?  (
                    <div>
                        <h1 style={{color: 'white', padding: '0px 12px 0px 12px', marginTop: '-20px', marginBottom: '50px'}}>There is no questions</h1>
                    </div>
                ) 
                : questions.map((item) => (
                    <div key={item.id} className="NormalGameBodyContainer1">
                        <div className='NormalGameQuestionHeader'>
                            <h1>{item.title}</h1>
                        </div>
                        <div className='NormalGameQuestionImg'></div>
                        <div className='NormalGameQuestionsBtnsDiv'>
                            <div className='NormalGameQuestionBtn'>
                                <p>A. {item.ansA}</p>
                            </div>
                            <div className='NormalGameQuestionBtn'>
                                <p>B. {item.ansB}</p>
                            </div>
                            <div className='NormalGameQuestionBtn'>
                                <p>C. {item.ansC}</p>
                            </div>
                            <div className='NormalGameQuestionBtn'>
                                <p>D. {item.ansD}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {questions && questions.length === 0
                ?  (
                    <div className='NormalGameBodyFinishDiv'>
                        <div className='NormalGameBodyFinishBtn' onClick={() => navigate("/")}>
                            <p>Find New Quiz</p>
                        </div>
                    </div>
                ) 
                : 
                    <div className='NormalGameBodyFinishDiv'>
                        <div className='NormalGameBodyFinishBtn'>
                            <p>Check Answers</p>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default NormalGamePage