import React, { useEffect, useState, useContext } from 'react'
import '../QuizDetails/QuizDetails.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import { useNavigate, useParams } from 'react-router-dom'
import playIcon from '../../assets/icons/play.png'
import starIcon from '../../assets/icons/star.png'
import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../contexts/AuthContext'
import GetCookie from '../../components/GetCookie';

const QuizDetails = () => {
    let { slug } = useParams()

    const [quizDetails] = useFetch(`http://127.0.0.1:8000/quiz/details/${slug}`)

    const [page, setPage] = useState("Questions")

    const navigate = useNavigate()

    const { authTokens, user } = useContext(AuthContext)

    const AddToFavorite = () => {
        const csrftoken = GetCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/quiz/add-to-favorite/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify({
                'user': user,
                'quiz': quizDetails
            })
        })
        .then(res => res.json())
        .then((data) => {
            alert("Added To Favorite: ", data)
        })
    }

    return (
        <div className='QuizDetailsContainer'>
            <DrawerNav/>
            <div className="QuizDetailsBodyContainer">
                <div className='QuizDetailsBanner'>
                    <div className='QuizDetailsBannerH1'>
                        <h1>{quizDetails && quizDetails.name}</h1>
                    </div>
                    <div className='QuizDetailsBannerInfoDiv'>
                        <div className='QuizDetailsBannerInfo'>
                            <p>{quizDetails && quizDetails.questionCount}</p>
                            <p>questions</p>                            
                        </div>
                        <div className='QuizDetailsBannerInfo'>
                            <p>{quizDetails && quizDetails.views}</p>
                            <p>views</p>                            
                        </div>
                    </div>
                    <div className='QuizDetailsBannerBtnsDiv'>
                        <div className='QuizDetailsBannerBtn' id='StartQuiz' onClick={() => navigate(`/quiz/${slug}/start`)}>
                            <img src={playIcon} className="QuizDetailsBannerBtnIcon" />
                            {/* <a href="https://www.flaticon.com/free-icons/start" title="start icons">Start icons created by Freepik - Flaticon</a> */}
                            <p>Start Quiz</p>
                        </div>
                        
                        <div className='QuizDetailsBannerBtn' id='AddToFavorite' onClick={() => AddToFavorite()}>
                            <img src={starIcon} className="QuizDetailsBannerBtnIcon" />
                            <p>Add To Favorite</p>
                        </div>

                        <div className='QuizDetailsBannerBtn'>
                            <p>Difficulty: {quizDetails && quizDetails.difficultyLvl}</p>
                            <span>{quizDetails && quizDetails.difficultyLvl}</span>
                        </div>
                    </div>
                </div>
                <div className='QuizDetailsBannerHeaders'>
                    <p style={page && page === "Questions" ? {color: 'rgb(39, 139, 119)', fontWeight: 'bold'} : {}} onClick={() => setPage("Questions")}>Questions</p>
                    <p style={page && page === "Answers" ? {color: 'rgb(39, 139, 119)', fontWeight: 'bold'} : {}} onClick={() => setPage("Answers")}>Answers</p>
                    <p style={page && page === "Comments" ? {color: 'rgb(39, 139, 119)', fontWeight: 'bold'} : {}} onClick={() => setPage("Comments")}></p>
                </div>
                {page && page === "Questions" 
                ? 
                    <div className='QuizDetailsQuestionsList'>
                        {quizDetails && quizDetails.questionmodel.length === 0 ? (
                            <div>
                                <h1 style={{color: 'white', padding: '30px 12px 0px 12px'}}>There is not any questions in this quiz</h1>
                            </div>
                        ) 
                        : quizDetails && quizDetails.questionmodel.map((item) => (
                                <div className='QuizDetailsQuestion' key={item.id}>
                                    <div className='QuizDetailsQuestionHeader'>
                                        <h1>{item.title}</h1>
                                    </div>
                                    <div className='QuizDetailsQuestionImg' style={{backgroundImage: `url(http://127.0.0.1:8000${item.questionImg})`}}></div>
                                    <div className='QuizDetailsQuestionQuestionsList'>
                                        <div className='QuizDetailsQuestionQuestionDiv'>
                                            <p>A. {item.ansA}</p>
                                        </div>
                                        <div className='QuizDetailsQuestionQuestionDiv'>
                                            <p>B. {item.ansB}</p>
                                        </div>
                                        <div className='QuizDetailsQuestionQuestionDiv'>
                                            <p>C. {item.ansC}</p>
                                        </div>
                                        <div className='QuizDetailsQuestionQuestionDiv'>
                                            <p>D. {item.ansD}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                : ""}
                {page && page === "Answers" 
                ? 
                    <div className='QuizDetailsQuestionsList'>
                        {quizDetails && quizDetails.questionmodel.length === 0 ? (
                            <div>
                                <h1 style={{color: 'white', padding: '30px 12px 0px 12px'}}>There is not any questions in this quiz</h1>
                            </div>
                        ) 
                        : quizDetails && quizDetails.questionmodel.map((item) => (
                                <div className='QuizDetailsQuestion' key={item.id}>
                                    <div className='QuizDetailsQuestionHeader'>
                                        <h1>{item.title}</h1>
                                    </div>
                                    <div className='QuizDetailsQuestionImg' style={{backgroundImage: `url(http://127.0.0.1:8000${item.questionImg})`}}></div>
                                    <div className='QuizDetailsQuestionQuestionsList'>
                                        <div className='QuizDetailsQuestionQuestionDiv' style={{backgroundColor: 'green'}}>
                                            <p>{item.correctAns}</p>
                                        </div>  
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                : ""}
                
            </div>
        </div>
    )
}

export default QuizDetails