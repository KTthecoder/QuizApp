import React from 'react'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import '../HistoryPage/HistoryPage.css'

const HistoryPage = () => {

    const slides = [
        {id: '1', title: 'First Slide', lvl: 'Hard'},
        {id: '2', title: 'Second Slide', lvl: 'Medium'},
        {id: '3', title: 'Third Slide', lvl: 'Easy'},
        {id: '4', title: 'Fourth Slide', lvl: 'Hard'},
        {id: '5', title: 'Fivth Slide', lvl: 'Hard'},
        {id: '6', title: 'Sixth Slide', lvl: 'Easy'},
        {id: '7', title: 'Seventh Slide', lvl: 'Medium'},
        {id: '8', title: 'Eight Slide', lvl: 'Easy'},
        {id: '9', title: 'Nineth Slide', lvl: 'Easy'},
    ]

    return (
        <div className='HistoryPageContainer'>
            <DrawerNav/>
            <div className="HistoryPageBodyContainer">
                <div className='HistoryPageBodyHeader'>
                    <h1>History</h1>
                </div>
                <div className='HistoryPageBodyList'>
                    {slides && slides.map((item) => (
                        <div className='HistoryPageQuiz'>
                            <div className='HistoryPageQuizImg'></div>
                            <div className='HistoryPageQuizInfo'>
                                <h1>{item.title}</h1>
                                <p className='HomeHorizontalInfoBtmP'>&#x2022; 2240 questions 
                                    <span style={item.lvl === 'Easy' ? {color: 'green'} : item.lvl === 'Medium' ? {color: 'yellow'} : item.lvl === 'Hard' ?  {color: 'red'} : {color: 'white'}}>
                                        &#x2022; {item.lvl}
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

export default HistoryPage