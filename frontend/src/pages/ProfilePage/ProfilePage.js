import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import { AuthContext } from '../../contexts/AuthContext'
import '../ProfilePage/ProfilePage.css'
import GetCookie from '../../components/GetCookie'

const ProfilePage = () => {
  const { logoutUser, authTokens, user } = useContext(AuthContext)

  const navigate = useNavigate()

  const ChangePassword = (e) => {
    const csrftoken = GetCookie('csrftoken');
    fetch("http://127.0.0.1:8000/account/change-password/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
        'Authorization': 'Bearer ' + String(authTokens.access)
      }, 
      body: JSON.stringify({
        old_password: e.target.old_password.value,
        new_password: e.target.new_password.value,
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data['response'] === "Invalid old password"){
        alert("Invalid Password")
      }
      if(data['response'] === "Password Changed"){
        alert("Password Changed")
      }
    })
    .catch(err => alert("Error While Changing Password"))
  }

  return (
    <div className='ProfileContainer'>
      <DrawerNav/>
      <div className='ProfileBodyContainer'>
        <div className='ProfileBodyHeader'>
          <h1>Welcome {user.username}!</h1>
        </div>
        <div className='ProfileBodyBtnsDiv'>
          <div className='ProfileBodyDivBtn' onClick={() => navigate('/my-quizes')}>
            <p>My Quizes</p>
          </div>
          <div className='ProfileBodyDivBtn' onClick={() => logoutUser()}>
            <p>Logout</p>
          </div>
        </div>
        <div className='ProfileBodyEditInfo'>
          <h2>Change Password</h2>
          <form className='ProfileBodyForm' onSubmit={ChangePassword}>
            <div className='ProfileBodyFormUpper'>
              <input type="password" placeholder='Old Password' className='ProfileBodyFormInp' name="old_password"/>
              <input type="password" placeholder='New Password' className='ProfileBodyFormInp' name="new_password"/>
            </div>
            <div className='ProfileBodyFormBottom'>
              <input type="submit" value="Change Password" className='ProfileBodyFormBtn' id='ProfileLastBtn'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage