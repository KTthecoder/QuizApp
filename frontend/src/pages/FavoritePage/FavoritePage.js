import React from 'react'
import '../FavoritePage/FavoritePage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'

const FavoritePage = () => {
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
        <div className='FavoritePageContainer'>
            <DrawerNav/>
            <div className="FavoritePageBodyContainer">
                <div className='FavoritePageBodyHeader'>
                    <h1>Favorite Quizes</h1>
                </div>
                <div className='FavoritePageQuizesList'>
                {slides && slides.map((item) => (
                    <div className='FavoritePageQuizDiv' key={item.id}>
                        <div className='FavoritePageQuizImg'></div>
                        <div className='FavoritePageQuizInfo'>
                            <h1>{item.title}</h1>
                            <p>Lorem dolor sit elit. Nunc ut dolor tincidunt. Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='FavoritePageQuizInfoBottom'>
                            <p className='FavoritePageQuizInfoBottomP'>2240 questions 
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

export default FavoritePage