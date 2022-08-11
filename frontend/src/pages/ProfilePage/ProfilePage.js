import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import { AuthContext } from '../../contexts/AuthContext'
import '../ProfilePage/ProfilePage.css'

const ProfilePage = () => {
  const { logoutUser } = useContext(AuthContext)

  const navigate = useNavigate()

  return (
    <div className='ProfileContainer'>
      <DrawerNav/>
      <div className='ProfileBodyContainer'>
        <div className='ProfileBodyHeader'>
          <h1>Welcome Ksawery!</h1>
        </div>
        <div className='ProfileBodyBtnsDiv'>
          <div className='ProfileBodyDivBtn' onClick={() => navigate('/categories/my-quizes')}>
            <p>My Quizes</p>
          </div>
          <div className='ProfileBodyDivBtn' onClick={() => logoutUser()}>
            <p>Logout</p>
          </div>
        </div>
        <div className='ProfileBodyEditInfo'>
          <h2>Change Password</h2>
          <form className='ProfileBodyForm' onSubmit={() => {}}>
            <div className='ProfileBodyFormUpper'>
              <input type="password" placeholder='Old password' className='ProfileBodyFormInp' />
              <input type="password" placeholder='New Password' className='ProfileBodyFormInp' />
            </div>
            <div className='ProfileBodyFormBottom'>
              <input type="submit" value="Change Password" className='ProfileBodyFormBtn' />
            </div>
          </form>
          <h2>Change Username</h2>
            <form className='ProfileBodyForm' onSubmit={() => {}}>
              <div className='ProfileBodyFormUpper'>
                <input type="text" placeholder='Username' className='ProfileBodyFormInp' />
              </div>
              <div className='ProfileBodyFormBottom'>
                <input type="submit" value="Change Username" className='ProfileBodyFormBtn' id='ProfileLastBtn' />
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage