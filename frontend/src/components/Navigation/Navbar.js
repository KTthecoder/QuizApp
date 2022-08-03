import React from 'react'
import menuIcon from '../../assets/icons/menu.png'
import searchIcon from '../../assets/icons/search.png'
import '../Navigation/Navbar.css'

const Navbar = () => {
  return (
    <nav className='NavigationContainer'>
        <div className='NavigationLogoContainer'>
            <img src={menuIcon} className="NavigationMenuBtn" onClick={() => {}} />
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
    </nav>
  )
}

export default Navbar