import React from 'react'
import '../QuizMain/QuizMain.css'

const QuizMain = ({title, lvl}) => {
  return (
    <>
        <div className='FavoritePageQuizImg'></div>
        <div className='FavoritePageQuizInfo'>
            <h1>{title}</h1>
            <p>Lorem dolor sit elit. Nunc ut dolor tincidunt. Lorem ipsum dolor sit amet</p>
        </div>
        <div className='FavoritePageQuizInfoBottom'>
            <p className='FavoritePageQuizInfoBottomP'>2240 questions 
                <span style={lvl === 'Easy' ? {color: 'green'} : lvl === 'Medium' ? {color: 'yellow'} : lvl === 'Hard' ?  {color: 'red'} : {color: 'white'}}>
                    &#x2022; {lvl}
                </span>
            </p>
        </div>
    </>
  )
}

export default QuizMain