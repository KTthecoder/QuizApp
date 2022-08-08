import React, { useEffect, useState } from 'react'
import menuIcon from '../../assets/icons/menu.png'
import searchIcon from '../../assets/icons/search.png'
import '../Navigation/Navbar.css'
import homeIcon from '../../assets/icons/home.png'
import categoriesIcon from '../../assets/icons/categories.png'
import starIcon from '../../assets/icons/star.png'
import historyIcon from '../../assets/icons/history.png'
import userIcon from '../../assets/icons/user.png'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setShow(false)
  }, [location])

  const DrawerToggle = () => {
    if(show === false){
      setShow(true)
    }
    else{
      setShow(false)
    }
  }

  const navigate = useNavigate()

  return (
    <nav className='NavigationContainer'>
      <div className='NavigationContainer1'>
        <div className='NavigationLogoContainer'>
            <img src={menuIcon} className="NavigationMenuBtn" onClick={() => DrawerToggle()} />
            {/* <a href="https://www.flaticon.com/free-icons/menu-burger" title="menu-burger icons">Menu-burger icons created by O.moonstd - Flaticon</a> */}
            <h1 onClick={() => navigate("/")} style={{cursor: 'pointer'}}><span>Quiz</span>App</h1>
        </div>
        <div className='NavigationSearchContainer'>
            <input type="text" className='NavigationSearchBar' placeholder='Search' />
            <img src={searchIcon} className="NavigationSearchBtn" />
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Catalin Fertu - Flaticon</a> */}
        </div>
        <div className='NavigationProfileContainer'>
            <p className='NavigationProfileBtn' onClick={() => navigate("/login")} style={{cursor: 'pointer'}}>Sign In</p>
        </div>
      </div>
      <div className='NavigationDrawer1' style={show ? {display: 'flex'} : {display: 'none'}}>
            <div className='NavigationLogoContainer1'>
                <img src={menuIcon} className="NavigationMenuBtn1" onClick={() => DrawerToggle()} />
                {/* <a href="https://www.flaticon.com/free-icons/menu-burger" title="menu-burger icons">Menu-burger icons created by O.moonstd - Flaticon</a> */}
                <h1 onClick={() => navigate("/")} style={{cursor: 'pointer'}}><span>Quiz</span>App</h1>
            </div>
            <div className='NavigationDrawerBlock1' onClick={() => navigate("/")} style={{cursor: 'pointer'}}>
                <img src={homeIcon} className="NavigationDrawerBlockIcon1"/>
                {/* <a href="https://www.flaticon.com/free-icons/home-button" title="home button icons">Home button icons created by Freepik - Flaticon</a> */}
                <p>Home</p>
            </div>
            <div className='NavigationDrawerBlock1' onClick={() => navigate("/categories")}>
                <img src={categoriesIcon} className="NavigationDrawerBlockIcon1"/>
                {/* <a href="https://www.flaticon.com/free-icons/application" title="application icons">Application icons created by Dooder - Flaticon</a> */}
                <p>Categories</p>
            </div>
            <div className='NavigationDrawerBlock1'>
                <img src={historyIcon} className="NavigationDrawerBlockIcon1"/>
                {/* <a href="https://www.flaticon.com/free-icons/history" title="history icons">History icons created by joalfa - Flaticon</a> */}
                <p>History</p>
            </div>
            <div className='NavigationDrawerBlock1' id='NavigationDrawerBlockBreak1'>
                <img src={starIcon} className="NavigationDrawerBlockIcon1"/>
                {/* <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a> */}
                <p>Favorite</p>
            </div>
            <div className='NavigationDrawerBlock1' onClick={() => navigate("/login")}>
                <img src={userIcon} className="NavigationDrawerBlockIcon1"/>
                {/* <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a> */}
                <p>Sign in</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar