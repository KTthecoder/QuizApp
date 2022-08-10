import React, { useEffect, useState } from 'react'
import plusIcon from '../../assets/icons/plus.png'
import '../HomePage/HomePage.css'
import ReactLogo from '../../assets/images/react-logo.png'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import GetCookie from '../../components/GetCookie'

const HomePage = () => {
    const slides = [
        {id: '1', img: ReactLogo, title: 'First Slide', lvl: 'Hard'},
        {id: '2', img: ReactLogo, title: 'Second Slide', lvl: 'Medium'},
        {id: '3', img: ReactLogo, title: 'Third Slide', lvl: 'Easy'},
        {id: '4', img: ReactLogo, title: 'Fourth Slide', lvl: 'Hard'},
        {id: '5', img: ReactLogo, title: 'Fivth Slide', lvl: 'Hard'},
        {id: '6', img: ReactLogo, title: 'Sixth Slide', lvl: 'Easy'},
        {id: '7', img: ReactLogo, title: 'Seventh Slide', lvl: 'Medium'},
        {id: '8', img: ReactLogo, title: 'Eight Slide', lvl: 'Easy'},
        {id: '9', img: ReactLogo, title: 'Nineth Slide', lvl: 'Easy'},
    ]

    const slides1 = [
        {id: '1', img: ReactLogo, title: 'First Slide', lvl: 'Hard'},
        {id: '2', img: ReactLogo, title: 'Second Slide', lvl: 'Medium'},
        {id: '3', img: ReactLogo, title: 'Third Slide', lvl: 'Easy'},
        {id: '4', img: ReactLogo, title: 'Fourth Slide', lvl: 'Hard'},
        {id: '5', img: ReactLogo, title: 'Fivth Slide', lvl: 'Hard'},
        {id: '6', img: ReactLogo, title: 'Sixth Slide', lvl: 'Easy'},
    ]

    useEffect(() => {
        AllQuizes()
    }, [])

    const [quizes, setQuizes] = useState([])

    const navigate = useNavigate()

    const AllQuizes = async () => {
        const csrftoken = GetCookie('csrftoken');
        let response = await fetch('http://127.0.0.1:8000/quiz/all', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
        let data = await response.json()
        if(response.status == 200){
            setQuizes(data)
        }
        else{
            console.log("Error while getting quizes from database")
        }
    }

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
                        {slides1 && slides1.map((item) => (
                            <div className='HomeBlocksDiv' key={item.id} onClick={() => navigate("/quiz/quiz-one")}>
                                <div className='HomeBlocksImg' alt='React Logo' />
                                <div className='HomeBlockslInfo'>
                                    <h1>{item.title}</h1>
                                    <p className='HomeHorizontalInfoTopP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor tincidunt.</p>
                                    <div>
                                        <p className='HomeHorizontalInfoBtmP'>&#x2022; 2240 questions 
                                            <span style={item.lvl === 'Easy' ? {color: 'green'} : item.lvl === 'Medium' ? {color: 'yellow'} : item.lvl === 'Hard' ?  {color: 'red'} : {color: 'white'}}>
                                                &#x2022; {item.lvl}
                                            </span>
                                        </p>
                                    </div>
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
                    <div className='HomeBlocksContainer2'>
                        {quizes && quizes.map((item) => (
                            <div className='HomeBlocksDiv' key={item.id} onClick={() => navigate(`/quiz/${item.slug}`)}>
                                <div className='HomeBlocksImg' alt='React Logo' />
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
                    <div className='HomeBlocksContainer2'>
                        {slides && slides.map((item) => (
                            <div className='HomeBlocksDiv' key={item.id} onClick={() => navigate("/quiz/quiz-one")}>
                                <div className='HomeBlocksImg' alt='React Logo' />
                                <div className='HomeBlockslInfo'>
                                    <h1>{item.title}</h1>
                                    <p className='HomeHorizontalInfoTopP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor tincidunt.</p>
                                    <p className='HomeHorizontalInfoBtmP'>&#x2022; 20 questions 
                                        <span style={item.lvl === 'Easy' ? {color: 'green'} : item.lvl === 'Medium' ? {color: 'yellow'} : item.lvl === 'Hard' ?  {color: 'red'} : {color: 'white'}}>
                                            &#x2022; {item.lvl}
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
                        {slides1 && slides1.map((item) => (
                            <div className='HomeBlocksDiv' key={item.id} onClick={() => navigate("/quiz/quiz-one")}>
                                <div className='HomeBlocksImg' alt='React Logo' />
                                <div className='HomeBlockslInfo'>
                                    <h1>{item.title}</h1>
                                    <p className='HomeHorizontalInfoTopP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor tincidunt.</p>
                                    <p className='HomeHorizontalInfoBtmP'>&#x2022; 20 questions 
                                        <span style={item.lvl === 'Easy' ? {color: 'green'} : item.lvl === 'Medium' ? {color: 'yellow'} : item.lvl === 'Hard' ?  {color: 'red'} : {color: 'white'}}>
                                            &#x2022; {item.lvl}
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