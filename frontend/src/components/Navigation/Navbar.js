import React, { useEffect, useState } from 'react'
import menuIcon from '../../assets/icons/menu.png'
import searchIcon from '../../assets/icons/search.png'
import '../Navigation/Navbar.css'
import homeIcon from '../../assets/icons/home.png'
import categoriesIcon from '../../assets/icons/categories.png'
import starIcon from '../../assets/icons/star.png'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const DrawerToggle = () => {
    if(show === false){
      setShow(true)
    }
    else{
      setShow(false)
    }
  }

  return (
    <nav className='NavigationContainer'>
      <div className='NavigationContainer1'>
        <div className='NavigationLogoContainer'>
            <img src={menuIcon} className="NavigationMenuBtn" onClick={() => DrawerToggle()} />
            {/* <a href="https://www.flaticon.com/free-icons/menu-burger" title="menu-burger icons">Menu-burger icons created by O.moonstd - Flaticon</a> */}
            <h1><span>Quiz</span>App</h1>
        </div>
        <div className='NavigationSearchContainer'>
            <input type="text" className='NavigationSearchBar' placeholder='Search' />
            <img src={searchIcon} className="NavigationSearchBtn" />
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Catalin Fertu - Flaticon</a> */}
        </div>
        <div className='NavigationProfileContainer'>
            <p className='NavigationProfileBtn'>Sign In</p>
        </div>
      </div>
      {/* <div className='NavigationContainer2'>
        <div className='NavigationContainer22'>
          <div className='NavigationDrawerBlock'>
              <img src={homeIcon} className="NavigationDrawerBlockIcon"/>
              <a href="https://www.flaticon.com/free-icons/home-button" title="home button icons">Home button icons created by Freepik - Flaticon</a>
              <p>Home</p>
          </div>
          <div className='NavigationDrawerBlock'>
              <img src={categoriesIcon} className="NavigationDrawerBlockIcon"/>
              <a href="https://www.flaticon.com/free-icons/application" title="application icons">Application icons created by Dooder - Flaticon</a>
              <p>Categories</p>
          </div>
          <div className='NavigationDrawerBlock'>
              <img src={starIcon} className="NavigationDrawerBlockIcon"/>
              <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a>
              <p>Favorite</p>
          </div>
        </div>
      </div> */}
    </nav>
  )
}

export default Navbar