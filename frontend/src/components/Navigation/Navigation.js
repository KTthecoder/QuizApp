import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage'
import CategoryQuizesPage from '../../pages/CategoryQuizesPage/CategoryQuizesPage'
import FavoritePage from '../../pages/FavoritePage/FavoritePage'
import HistoryPage from '../../pages/HistoryPage/HistoryPage'
import HomePage from '../../pages/HomePage/HomePage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import NormalGamePage from '../../pages/NormalGamePage/NormalGamePage'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import QuizDetails from '../../pages/QuizDetails/QuizDetails'
import RandomGamePage from '../../pages/RandomGamePage/RandomGamePage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
import StartQuizPage from '../../pages/StartQuizPage/StartQuizPage'
import PrivateRoute from '../../utils/PrivateRoute'

const Navigation = () => {
  return (
    <Routes>
        
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/categories' element={<CategoriesPage/>} />
        <Route exact path='/quiz/:slug' element={<QuizDetails/>} />
        
        <Route exact path='/quiz/:slug/normal' element={<PrivateRoute/>}>
          <Route exact path='/quiz/:slug/normal' element={<NormalGamePage/>} />
        </Route>
        <Route exact path='/quiz/:slug/random' element={<PrivateRoute/>}>
          <Route exact path='/quiz/:slug/random' element={<RandomGamePage/>} />
        </Route>
        <Route exact path='/quiz/:slug/start' element={<PrivateRoute/>}>
          <Route exact path='/quiz/:slug/start' element={<StartQuizPage/>} />
        </Route>
        <Route exact path='/profile' element={<PrivateRoute/>}>
          <Route exact path='/profile' element={<ProfilePage/>} />
        </Route>
        <Route exact path='/favorite' element={<PrivateRoute/>}>
          <Route exact path='/favorite' element={<FavoritePage/>}  />
        </Route>
        <Route exact path='/history' element={<PrivateRoute/>}>
          <Route exact path='/history' element={<HistoryPage/>}  />
        </Route>
        <Route exact path='/categories/:slug' element={<CategoryQuizesPage/>}>
          <Route exact path='/categories/:slug' element={<CategoryQuizesPage/>}  />
        </Route>

        <Route exact path='/login' element={<LoginPage/>} />
        <Route exact path='/register' element={<RegisterPage/>} />
    </Routes>
  )
}

export default Navigation