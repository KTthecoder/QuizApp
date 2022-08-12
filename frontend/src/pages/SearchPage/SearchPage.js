import React, { useEffect, useState } from 'react'
import '../FavoritePage/FavoritePage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import QuizMain from '../../components/QuizMain/QuizMain'
import { useNavigate, useParams } from 'react-router-dom'
import GetCookie from '../../components/GetCookie'

const SearchPage = () => {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState([])
    const { slug } = useParams()

    const SearchQuizes = () => {
        const csrftoken = GetCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/search/${slug}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
        .then(res => res.json())
        .then((data) => {
            setSearchValue(data)
        })
    }

    useEffect(() => {
        SearchQuizes()
    }, [slug])

    return (
        <div className='FavoritePageContainer'>
            <DrawerNav/>
            <div className="FavoritePageBodyContainer">
                <div className='FavoritePageBodyHeader'>
                    
                </div>
                <div className='FavoritePageQuizesList'>
                {searchValue && searchValue['response'] == "There is no quizes with that name"
                ?   (
                        <div>
                            <h1 style={{color: 'white', padding: '0px 12px 0px 12px'}}>There are no quizes with that name</h1>
                        </div>
                    )
                :   searchValue && searchValue.map((item) => (
                        <div className='FavoritePageQuizDiv' key={item.id} onClick={() => navigate(`/quiz/${item.slug}`)}>
                            <QuizMain title={item.name} questionCount={item.questionCount} description={item.description} lvl={item.difficultyLvl} img={item.QuizImg} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchPage