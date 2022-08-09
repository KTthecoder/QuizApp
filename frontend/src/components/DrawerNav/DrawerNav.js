import React from 'react'
import '../DrawerNav/DrawerNav.css'
import homeIcon from '../../assets/icons/home.png'
import categoriesIcon from '../../assets/icons/categories.png'
import starIcon from '../../assets/icons/star.png'
import historyIcon from '../../assets/icons/history.png'
import { useNavigate } from 'react-router-dom'

const DrawerNav = () => {
    const navigate = useNavigate()

    return (
        <nav className='NavigationDrawer'>
            <div className='NavigationDrawerBlock' style={{cursor: 'pointer'}} onClick={() => navigate("/")}>
                <img src={homeIcon} className="NavigationDrawerBlockIcon"/>
                {/* <a href="https://www.flaticon.com/free-icons/home-button" title="home button icons">Home button icons created by Freepik - Flaticon</a> */}
                <p>Home</p>
            </div>
            <div className='NavigationDrawerBlock' style={{cursor: 'pointer'}} onClick={() => navigate("/categories")}>
                <img src={categoriesIcon} className="NavigationDrawerBlockIcon"/>
                {/* <a href="https://www.flaticon.com/free-icons/application" title="application icons">Application icons created by Dooder - Flaticon</a> */}
                <p>Categories</p>
            </div>
            <div className='NavigationDrawerBlock' style={{cursor: 'pointer'}} onClick={() => navigate("/history")}>
                <img src={historyIcon} className="NavigationDrawerBlockIcon"/>
                {/* <a href="https://www.flaticon.com/free-icons/history" title="history icons">History icons created by joalfa - Flaticon</a> */}
                <p>History</p>
            </div>
            <div className='NavigationDrawerBlock' id='NavigationDrawerBlockBreak' style={{cursor: 'pointer'}} onClick={() => navigate("/favorite")}>
                <img src={starIcon} className="NavigationDrawerBlockIcon"/>
                {/* <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a> */}
                <p>Favorite</p>
            </div>
        </nav>
    )
}

export default DrawerNav