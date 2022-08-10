import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const ProfilePage = () => {
  const { logoutUser } = useContext(AuthContext)

  return (
    <div style={{marginTop: '150px'}}>
      <button onClick={() => logoutUser()}>Logout</button>
    </div>
  )
}

export default ProfilePage