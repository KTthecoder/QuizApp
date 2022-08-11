import React, { useEffect, useState, useContext } from 'react'
import '../FavoritePage/FavoritePage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import QuizMain from '../../components/QuizMain/QuizMain'
import { useNavigate, useParams } from 'react-router-dom'
import GetCookie from '../../components/GetCookie'
import { AuthContext } from '../../contexts/AuthContext'

const MyQuizesPage = () => {
    const navigate = useNavigate()
    const [quizes, setQuizes] = useState([])
    const { slug } = useParams()
    const { authTokens } = useContext(AuthContext)

    const MyQuizes = () => {
        const csrftoken = GetCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/user/quizes/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        .then(res => res.json())
        .then((data) => {
            setQuizes(data)
        })
    }

    useEffect(() => {
        MyQuizes()
    }, [])

    return (
        <div className='FavoritePageContainer'>
            <DrawerNav/>
            <div className="FavoritePageBodyContainer">
                <div className='FavoritePageBodyHeader'>
                    <h1>My Quizes</h1>
                </div>
                <div className='FavoritePageQuizesList'>
                {quizes && quizes['response'] == "There is not any quizes in this category"
                ?   (
                        <div>
                            <h1 style={{color: 'white', padding: '0px 12px 0px 12px'}}>There's not any quizes in this category</h1>
                        </div>
                    )
                :   quizes && quizes.map((item) => (
                        <div className='FavoritePageQuizDiv' key={item.id} onClick={() => navigate(`/quiz/${item.slug}`)}>
                            <QuizMain title={item.name} questionCount={item.questionCount} description={item.description} lvl={item.difficultyLvl} img={item.QuizImg} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyQuizesPage