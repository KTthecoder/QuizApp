import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage'
import HomePage from '../../pages/HomePage/HomePage'
import LoginPage from '../../pages/LoginPage/LoginPage'

const Navigation = () => {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>}  />
        <Route exact path='/categories' element={<CategoriesPage/>}  />

        <Route exact path='/login' element={<LoginPage/>}  />
    </Routes>
  )
}

export default Navigation