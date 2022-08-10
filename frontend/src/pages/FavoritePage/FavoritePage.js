import React, { useEffect, useState } from 'react'
import '../FavoritePage/FavoritePage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import QuizMain from '../../components/QuizMain/QuizMain'
import useFetch from '../../hooks/useFetch'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import GetCookie from '../../components/GetCookie'

const FavoritePage = () => {
    const { user, authTokens } = useContext(AuthContext)
    const [favorites] = useFetch(`http://127.0.0.1:8000/quiz/favorite/${user.username}`)
    const navigate = useNavigate()

    return (
        <div className='FavoritePageContainer'>
            <DrawerNav/>
            <div className="FavoritePageBodyContainer">
                <div className='FavoritePageBodyHeader'>
                    <h1>Favorite Quizes</h1>
                </div>
                <div className='FavoritePageQuizesList'>
                {favorites && favorites['response'] == "User does not have any quizes"
                ?   (<div>
                        <h1 style={{color: 'white', padding: '0px 12px 0px 12px'}}>User does not have any quizes</h1>
                    </div>)
                :  favorites && favorites.map((item) => (
                    <div className='FavoritePageQuizDiv' key={item.id} onClick={() => navigate(`/quiz/${item.quizSlug}`)}>
                        {/* <QuizMain title={item.quizName} questionCount={item.quizQuestionCount} description={item.quizDescription} lvl={item.quizDifficultyLvl} img={item.quizQuizImg} /> */}
                        <div className='FavoritePageQuizImg' style={{backgroundImage: `url(http://127.0.0.1:8000${item.quizQuizImg})`}}></div>
                        <div className='FavoritePageQuizInfo'>
                            <h1>{item.quizName}</h1>
                            <p>{item.quizDescription}</p>
                        </div>
                        <div className='FavoritePageQuizInfoBottom'>
                            <p className='FavoritePageQuizInfoBottomP'>{item.quizQuestionCount} questions 
                                <span style={item.quizDifficultyLvl === 'Easy' ? {color: 'green'} : item.quizDifficultyLvl === 'Medium' ? {color: 'yellow'} : item.quizDifficultyLvl === 'Hard' ?  {color: 'red'} : {color: 'white'}}>
                                    &#x2022; {item.quizDifficultyLvl}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default FavoritePage