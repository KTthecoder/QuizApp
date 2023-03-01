import React, { useEffect, useState, useContext } from 'react'
import plusIcon from '../../assets/icons/plus.png'
import '../HomePage/HomePage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import GetCookie from '../../components/GetCookie'
import { AuthContext } from '../../contexts/AuthContext'

const HomePage = () => {
    const navigate = useNavigate()

    const [allQuizes] = useFetch("http://127.0.0.1:8000/quiz/all")
    // const [myQuizes] = useFetch(`http://127.0.0.1:8000/quiz/${'my-quizes'}`)
    const [englishQuizes] = useFetch(`http://127.0.0.1:8000/quiz/${'english-quizes'}`)
    const [itQuizes] = useFetch(`http://127.0.0.1:8000/quiz/${'it-quizes'}`)

    const { accessToken } = useContext(AuthContext)
    const [myQuizes, setMyQuizes] = useState([])

    const MyQuizes = () => {
        const csrftoken = GetCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/user/quizes/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then(res => res.json())
        .then((data) => {
            setMyQuizes(data)
        })
    }

    useEffect(() => {
        MyQuizes()
    }, [])

    return (
        <div className='HomeContainer'>
            <DrawerNav/>
            <div className="HomeHorizontalContainer">
                <div className='HomeContainer1'>
                    <div className='HomeHeader'>
                        <h1>My Quizes</h1>
                        <div className='HomeHeaderCreateDiv'>
                            <img src={plusIcon} className='HomeHeaderCreateBtn' />
                            {/* <a href="https://www.flaticon.com/free-icons/add" title="add icons">Add icons created by Pixel perfect - Flaticon</a> */}
                            <p>New Quiz</p>
                        </div>
                    </div>
                    <div className='HomeBlocksContainer1'>
                        {myQuizes && myQuizes['response'] == "There is not any quizes in database" ? 
                        (
                            <div>
                                <h1 style={{color: 'white', padding: '0px 12px 0px 12px'}}>There is not any quizes in database</h1>
                            </div>
                        )
                        : myQuizes && myQuizes.map((item) =>(
                            <div className='HomeBlocksDiv' key={item.id} onClick={() => navigate(`/quiz/${item.slug}`)}>
                                <div className='HomeBlocksImg' style={{backgroundImage: `url(http://127.0.0.1:8000${item.QuizImg})`}} alt='React Logo' />
                                <div className='HomeBlockslInfo'>
                                    <h1>{item.name}</h1>
                                    <p className='HomeHorizontalInfoTopP'>{item.description}</p>
                                    <p className='HomeHorizontalInfoBtmP'>{item.questionCount} questions
                                        <span style={item.difficultyLvl === 'Easy' ? {color: 'green'} : item.difficultyLvl === 'Medium' ? {color: 'yellow'} : item.difficultyLvl === 'Hard' ?  {color: 'red'} : {color: 'white'}}>
                                            &#x2022; {item.difficultyLvl}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}     
                    </div>
                </div> 
                <div className='HomeContainer2'>
                    <div className='HomeHeader'>
                        <h1>Newest Quizes</h1>
                        <div className='HomeHeaderCreateDiv1'>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className='HomeBlocksContainer1'>
                        {allQuizes && allQuizes['response'] == "There is not any quizes in database" ? 
                        (
                            <div>
                                <h1 style={{color: 'white', padding: '0px 12px 0px 12px'}}>There is not any quizes in database</h1>
                            </div>
                        )
                        : allQuizes && allQuizes.map((item) =>(
                            <div className='HomeBlocksDiv' key={item.id} onClick={() => navigate(`/quiz/${item.slug}`)}>
                                <div className='HomeBlocksImg' style={{backgroundImage: `url(http://127.0.0.1:8000${item.QuizImg})`}} alt='React Logo' />
                                <div className='HomeBlockslInfo'>
                                    <h1>{item.name}</h1>
                                    <p className='HomeHorizontalInfoTopP'>{item.description}</p>
                                    <p className='HomeHorizontalInfoBtmP'>{item.questionCount} questions
                                        <span style={item.difficultyLvl === 'Easy' ? {color: 'green'} : item.difficultyLvl === 'Medium' ? {color: 'yellow'} : item.difficultyLvl === 'Hard' ?  {color: 'red'} : {color: 'white'}}>
                                            &#x2022; {item.difficultyLvl}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='HomeContainer2'>
                    <div className='HomeHeader'>
                        <h1>English Quizes</h1>
                        <div className='HomeHeaderCreateDiv1'>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className='HomeBlocksContainer1'>
                        {englishQuizes && englishQuizes['response'] == "There is not any quizes in database" ? 
                        (
                            <div>
                                <h1 style={{color: 'white', padding: '0px 12px 0px 12px'}}>There is not any quizes in database</h1>
                            </div>
                        )
                        : englishQuizes && englishQuizes.map((item) =>(
                            <div className='HomeBlocksDiv' key={item.id} onClick={() => navigate(`/quiz/${item.slug}`)}>
                                <div className='HomeBlocksImg' style={{backgroundImage: `url(http://127.0.0.1:8000${item.QuizImg})`}} alt='React Logo' />
                                <div className='HomeBlockslInfo'>
                                    <h1>{item.name}</h1>
                                    <p className='HomeHorizontalInfoTopP'>{item.description}</p>
                                    <p className='HomeHorizontalInfoBtmP'>{item.questionCount} questions
                                        <span style={item.difficultyLvl === 'Easy' ? {color: 'green'} : item.difficultyLvl === 'Medium' ? {color: 'yellow'} : item.difficultyLvl === 'Hard' ?  {color: 'red'} : {color: 'white'}}>
                                            &#x2022; {item.difficultyLvl}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}  
                    </div>
                </div>
                <div className='HomeContainer2'>
                    <div className='HomeHeader'>
                        <h1>IT Quizes</h1>
                        <div className='HomeHeaderCreateDiv1'>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className='HomeBlocksContainer1'>
                        {itQuizes && itQuizes['response'] == "There is not any quizes in database" ? 
                        (
                            <div>
                                <h1 style={{color: 'white', padding: '0px 12px 0px 12px'}}>There is not any quizes in database</h1>
                            </div>
                        )
                        : itQuizes && itQuizes.map((item) =>(
                            <div className='HomeBlocksDiv' key={item.id} onClick={() => navigate(`/quiz/${item.slug}`)}>
                                <div className='HomeBlocksImg' style={{backgroundImage: `url(http://127.0.0.1:8000${item.QuizImg})`}} alt='React Logo' />
                                <div className='HomeBlockslInfo'>
                                    <h1>{item.name}</h1>
                                    <p className='HomeHorizontalInfoTopP'>{item.description}</p>
                                    <p className='HomeHorizontalInfoBtmP'>{item.questionCount} questions
                                        <span style={item.difficultyLvl === 'Easy' ? {color: 'green'} : item.difficultyLvl === 'Medium' ? {color: 'yellow'} : item.difficultyLvl === 'Hard' ?  {color: 'red'} : {color: 'white'}}>
                                            &#x2022; {item.difficultyLvl}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}  
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default HomePage