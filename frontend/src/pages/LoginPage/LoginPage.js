import React from 'react'
import '../LoginPage/LoginPage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import svg from '../../assets/svgs/login.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext)

  return (
    <div className='LoginContainer'>
        <DrawerNav/>
        <div className='LoginBodyContainer'>
          <div className="PhotoDiv">
            <img src={svg} className="FromImg" alt='People' />
          </div>
          <div className='FormDiv'>
            <div className='FormHeaderDiv'>
                <h1>Welcome Back!</h1>
                <p>Login to continue</p>
            </div>
            <form className='FormInputsDiv' onSubmit={loginUser}>
              <input
                type="text"
                name="username"
                className="FormInp"
                placeholder='username'
              />
              <input
                type="password"
                name="password"
                className="FormInp"
                placeholder='Passoword'
              />
              <div className='FormBtnsDiv'>
                <button type='submit' className='FormBtn'>Login</button>
                <p>New User? <Link to="/register" className='FormLink'>Sign Up</Link></p>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default LoginPage