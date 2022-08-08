import React, { useState } from 'react'
import '../QuizDetails/QuizDetails.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import photo1 from '../../assets/images/photo1.jpg'
import { useNavigate } from 'react-router-dom'
import playIcon from '../../assets/icons/play.png'
import starIcon from '../../assets/icons/star.png'

const QuizDetails = () => {

    const details = {
        id: '1', name: 'Quiz One', slug: 'quiz-one', difficulty: 'Easy', questions: '334',
    }

    const [page, setPage] = useState("Questions")

    const navigate = useNavigate()

    return (
        <div className='QuizDetailsContainer'>
            <DrawerNav/>
            <div className="QuizDetailsBodyContainer">
                <div className='QuizDetailsBanner'>
                    <div className='QuizDetailsBannerH1'>
                        <h1>{details.name} fjodsij oijdsoif sodjf osdjif osjf oisdj</h1>
                    </div>
                    <div className='QuizDetailsBannerInfoDiv'>
                        <div className='QuizDetailsBannerInfo'>
                            <p>2</p>
                            <p>questions</p>                            
                        </div>
                        <div className='QuizDetailsBannerInfo'>
                            <p>32</p>
                            <p>views</p>                            
                        </div>
                    </div>
                    <div className='QuizDetailsBannerBtnsDiv'>
                        <div className='QuizDetailsBannerBtn' id='StartQuiz' onClick={() => navigate("/quiz/quiz-one/start")}>
                            <img src={playIcon} className="QuizDetailsBannerBtnIcon" />
                            {/* <a href="https://www.flaticon.com/free-icons/start" title="start icons">Start icons created by Freepik - Flaticon</a> */}
                            <p>Start Quiz</p>
                        </div>
                        <div className='QuizDetailsBannerBtn' id='AddToFavorite'>
                            <img src={starIcon} className="QuizDetailsBannerBtnIcon" />
                            <p>Add To Favorite</p>
                        </div>
                        <div className='QuizDetailsBannerBtn'>
                            <p>Difficulty: {details.difficulty}</p>
                            <span>{details.difficulty}</span>
                        </div>
                    </div>
                </div>
                <div className='QuizDetailsBannerHeaders'>
                    <p style={page && page === "Questions" ? {color: 'rgb(39, 139, 119)', fontWeight: 'bold'} : {}} onClick={() => setPage("Questions")}>Questions</p>
                    <p style={page && page === "Answers" ? {color: 'rgb(39, 139, 119)', fontWeight: 'bold'} : {}} onClick={() => setPage("Answers")}>Answers</p>
                    <p style={page && page === "Comments" ? {color: 'rgb(39, 139, 119)', fontWeight: 'bold'} : {}} onClick={() => setPage("Comments")}>Comments</p>
                </div>
                {page && page === "Questions" 
                ? 
                    <div className='QuizDetailsQuestionsList'>
                        <div className='QuizDetailsQuestion'>
                            <div className='QuizDetailsQuestionHeader'>
                                <h1>How many eggs do you have in the fridge?</h1>
                            </div>
                            <div className='QuizDetailsQuestionImg'></div>
                            <div className='QuizDetailsQuestionQuestionsList'>
                                <div className='QuizDetailsQuestionQuestionDiv'>
                                    <p>A. Eleven</p>
                                </div>
                                <div className='QuizDetailsQuestionQuestionDiv'>
                                    <p>B. Two</p>
                                </div>
                                <div className='QuizDetailsQuestionQuestionDiv'>
                                    <p>C. Seventy Seven</p>
                                </div>
                                <div className='QuizDetailsQuestionQuestionDiv'>
                                    <p>D. Eight</p>
                                </div>
                            </div>
                        </div>
                        <div className='QuizDetailsQuestion'>
                            <div className='QuizDetailsQuestionHeader'>
                                <h1>How many eggs?</h1>
                            </div>
                            <div className='QuizDetailsQuestionImg'></div>
                            <div className='QuizDetailsQuestionQuestionsList'>
                                <div className='QuizDetailsQuestionQuestionDiv'>
                                    <p>A. Eleven</p>
                                </div>
                                <div className='QuizDetailsQuestionQuestionDiv'>
                                    <p>B. Two</p>
                                </div>
                                <div className='QuizDetailsQuestionQuestionDiv'>
                                    <p>C. Seventy Seven</p>
                                </div>
                                <div className='QuizDetailsQuestionQuestionDiv'>
                                    <p>D. Eight</p>
                                </div>
                            </div>
                        </div>
                    </div>
                : ""}
                {page && page === "Answers" 
                ? 
                    <div className='QuizDetailsQuestionsList'>
                        <div className='QuizDetailsQuestion'>
                            <div className='QuizDetailsQuestionHeader'>
                                <h1>How many eggs do you have in the fridge?</h1>
                            </div>
                            <div className='QuizDetailsQuestionImg'></div>
                            <div className='QuizDetailsQuestionQuestionsList'>
                                <div className='QuizDetailsQuestionQuestionDiv' style={{backgroundColor: 'green'}}>
                                    <p>A. Eleven</p>
                                </div>
                            </div>
                        </div>
                        <div className='QuizDetailsQuestion'>
                            <div className='QuizDetailsQuestionHeader'>
                                <h1>How many eggs?</h1>
                            </div>
                            <div className='QuizDetailsQuestionImg'></div>
                            <div className='QuizDetailsQuestionQuestionsList'>
                                <div className='QuizDetailsQuestionQuestionDiv' style={{backgroundColor: 'green'}}>
                                    <p>C. Seventy Seven</p>
                                </div>
                            </div>
                        </div>
                    </div>
                : ""}
                
            </div>
        </div>
    )
}

export default QuizDetails