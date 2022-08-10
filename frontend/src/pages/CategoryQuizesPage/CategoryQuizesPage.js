import React, { useEffect, useState } from 'react'
import '../FavoritePage/FavoritePage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import QuizMain from '../../components/QuizMain/QuizMain'
import { useNavigate, useParams } from 'react-router-dom'
import GetCookie from '../../components/GetCookie'

const CategoryQuizesPage = () => {
    const navigate = useNavigate()
    const [quizes, setQuizes] = useState([])
    const { slug } = useParams()
    const [category, setCategory] = useState('')

    const FavoriteQuizes = () => {
        const csrftoken = GetCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/categories/${slug}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
        .then(res => res.json())
        .then((data) => {
            setQuizes(data)
        })
    }

    const CategoryName = () => {
        const csrftoken = GetCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/category/${slug}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
        .then(res => res.json())
        .then((data) => {
            setCategory(data)
        })
    }

    useEffect(() => {
        FavoriteQuizes()
        CategoryName()
    }, [])

    return (
        <div className='FavoritePageContainer'>
            <DrawerNav/>
            <div className="FavoritePageBodyContainer">
                <div className='FavoritePageBodyHeader'>
                    <h1>{category['name'] && category['name']}</h1>
                </div>
                <div className='FavoritePageQuizesList'>
                {quizes && quizes['response'] == "There is not any quizes in this category"
                ?   (
                        <div>
                            <h1 style={{color: 'white', padding: '0px 12px 0px 12px'}}>There's not any quizes in this category</h1>
                        </div>
                    )
                :   quizes && quizes.map((item) => (
                        <div className='FavoritePageQuizDiv' key={item.id} onClick={() => navigate(`/quiz/${item.quizSlug}`)}>
                            <QuizMain title={item.name} questionCount={item.questionCount} description={item.description} lvl={item.difficultyLvl} img={item.QuizImg} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryQuizesPage