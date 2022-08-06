import React from 'react'
import '../LoginPage/LoginPage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import svg from '../../assets/svgs/login.svg'
import { Link } from 'react-router-dom'

const LoginPage = () => {
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
            <form className='FormInputsDiv' onSubmit={() =>{}}>
              <input
                type="text"
                name="email"
                className="FormInp"
                placeholder='Email'
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