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
    const { user, accessToken } = useContext(AuthContext)
    const navigate = useNavigate()
    const [favorites, setFavorites] = useState([])

    const FavoriteQuizes = () => {
        const csrftoken = GetCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/quiz/favorite/${user.username}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then(res => res.json())
        .then((data) => {
            setFavorites(data)
        })
    }

    useEffect(() => {
        FavoriteQuizes()
    }, [])

    return (
        <div className='FavoritePageContainer'>
            <DrawerNav/>
            <div className="FavoritePageBodyContainer">
                <div className='FavoritePageBodyHeader'>
                    <h1>Favorite Quizes</h1>
                </div>
                <div className='FavoritePageQuizesList'>
                {favorites && favorites['response'] == "User does not have any quizes"
                ?   (
                        <div>
                            <h1 style={{color: 'white', padding: '0px 12px 0px 12px'}}>No Favorite Quizes</h1>
                        </div>
                    )
                :   favorites && favorites.map((item) => (
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