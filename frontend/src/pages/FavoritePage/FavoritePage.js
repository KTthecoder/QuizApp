import React from 'react'
import '../FavoritePage/FavoritePage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import QuizMain from '../../components/QuizMain/QuizMain'
import useFetch from '../../hooks/useFetch'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const FavoritePage = () => {
    const { user } = useContext(AuthContext)
    const [favorites] = useFetch(`http://127.0.0.1:8000/quiz/favorite/1`)
    const navigate = useNavigate()

    return (
        <div className='FavoritePageContainer'>
            <DrawerNav/>
            <div className="FavoritePageBodyContainer">
                <div className='FavoritePageBodyHeader'>
                    <h1>Favorite Quizes</h1>
                </div>
                <div className='FavoritePageQuizesList'>
                {favorites && favorites.map((item) => (
                    <div className='FavoritePageQuizDiv' key={item.id} onClick={() => navigate(`/quiz/${item.quizSlug}`)}>
                        <QuizMain title={item.quizName} questionCount={item.quizQuestionCount} description={item.quizDescription} lvl={item.quizDifficultyLvl} img={item.quizQuizImg} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default FavoritePage