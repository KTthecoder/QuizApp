import React from 'react'
import '../LoginPage/LoginPage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import svg from '../../assets/svgs/login.svg'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className='LoginContainer'>
        <DrawerNav/>
        <div className='LoginBodyContainer'>
          <div className="PhotoDiv">
            <img src={svg} className="FromImg" alt='People' />
          </div>
          <div className='FormDiv'>
            <div className='FormHeaderDiv'>
                <h1>Create Account!</h1>
                <p>Please enter your information</p>
            </div>
            <form className='FormInputsDiv' onSubmit={() =>{}}>
                <input
                    type="text"
                    name="username"
                    className="FormInp"
                    placeholder='Username'
                />
                <input
                    type="email"
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
                    <button type='submit' className='FormBtn'>Sign Up</button>
                    <div className='FormBtnsDiv1'>
                        <p>Already have an Account?</p>
                        <Link to="/login" className='FormLinkk'>Sign In</Link>
                    </div>      
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default RegisterPage