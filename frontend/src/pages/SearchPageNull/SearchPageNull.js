import React from 'react'
import '../FavoritePage/FavoritePage.css'
import DrawerNav from '../../components/DrawerNav/DrawerNav'

const SearchPageNull = () => {
    return (
        <div className='FavoritePageContainer'>
            <DrawerNav/>
            <div className="FavoritePageBodyContainer">
                <div className='FavoritePageBodyHeader'>
                    
                </div>
                <div className='FavoritePageQuizesList'>
                    <div>
                        <h1 style={{color: 'white', padding: '0px 12px 0px 12px'}}>Find quizes</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPageNull