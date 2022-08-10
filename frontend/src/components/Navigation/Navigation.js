import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage'
import FavoritePage from '../../pages/FavoritePage/FavoritePage'
import HistoryPage from '../../pages/HistoryPage/HistoryPage'
import HomePage from '../../pages/HomePage/HomePage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import NormalGamePage from '../../pages/NormalGamePage/NormalGamePage'
import QuizDetails from '../../pages/QuizDetails/QuizDetails'
import RandomGamePage from '../../pages/RandomGamePage/RandomGamePage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
import StartQuizPage from '../../pages/StartQuizPage/StartQuizPage'

const Navigation = () => {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/categories' element={<CategoriesPage/>} />
        <Route exact path='/quiz/:slug' element={<QuizDetails/>} />
        <Route exact path='/quiz/:slug/start' element={<StartQuizPage/>} />
        <Route exact path='/quiz/:slug/normal' element={<NormalGamePage/>} />
        <Route exact path='/quiz/:slug/random' element={<RandomGamePage/>} />
        <Route exact path='/quiz/:slug/random' element={<RandomGamePage/>} />
        <Route exact path='/favorite' element={<FavoritePage/>}  />
        <Route exact path='/history' element={<HistoryPage/>}  />

        <Route exact path='/login' element={<LoginPage/>} />
        <Route exact path='/register' element={<RegisterPage/>} />
    </Routes>
  )
}

export default Navigation