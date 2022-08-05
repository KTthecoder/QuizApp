import React from 'react'
import '../LoginPage/LoginPage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'

const LoginPage = () => {
  return (
    <div className='LoginContainer'>
        <DrawerNav/>
        <div className='LoginBodyContainer'>
            <h1>Login Page</h1>
        </div>
    </div>
  )
}

export default LoginPage