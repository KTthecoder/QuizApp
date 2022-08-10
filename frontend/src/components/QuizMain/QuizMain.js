import React from 'react'
import '../QuizMain/QuizMain.css'

const QuizMain = ({title, lvl, description, img, questionCount}) => {
  return (
    <>
        <div className='FavoritePageQuizImg' style={{backgroundImage: `url(http://127.0.0.1:8000${img})`}}></div>
        <div className='FavoritePageQuizInfo'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div className='FavoritePageQuizInfoBottom'>
            <p className='FavoritePageQuizInfoBottomP'>{questionCount} questions 
                <span style={lvl === 'Easy' ? {color: 'green'} : lvl === 'Medium' ? {color: 'yellow'} : lvl === 'Hard' ?  {color: 'red'} : {color: 'white'}}>
                    &#x2022; {lvl}
                </span>
            </p>
        </div>
    </>
  )
}

export default QuizMain