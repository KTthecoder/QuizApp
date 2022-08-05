import React from 'react'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import '../CategoriesPage/CategoriesPage.css'
import categoryIcon from '../../assets/icons/categories.png'
import Footer from '../../components/Footer/Footer'

const CategoriesPage = () => {

  const categories = [
    {id: '1', name: 'My Category One', icon: categoryIcon, color: 'red'},
    {id: '2', name: 'My Category Two', icon: categoryIcon, color: 'green'},
    {id: '3', name: 'My Category Three', icon: categoryIcon, color: '#341234'},
    {id: '4', name: 'My Category Four', icon: categoryIcon, color: 'brown'},
    {id: '5', name: 'My Category Five', icon: categoryIcon, color: 'purple'},
    {id: '6', name: 'My Category Six', icon: categoryIcon, color: 'orange'},
    {id: '7', name: 'My Category Seven', icon: categoryIcon, color: 'blue'},
    {id: '1', name: 'My Category One', icon: categoryIcon, color: 'red'},
    {id: '2', name: 'My Category Two', icon: categoryIcon, color: 'green'},
    {id: '3', name: 'My Category Three', icon: categoryIcon, color: '#341234'},
    {id: '4', name: 'My Category Four', icon: categoryIcon, color: 'brown'},
    {id: '5', name: 'My Category Five', icon: categoryIcon, color: 'purple'},
    {id: '6', name: 'My Category Six', icon: categoryIcon, color: 'orange'},
    {id: '7', name: 'My Category Seven', icon: categoryIcon, color: 'blue'},
]

  return (
    <div className='CategoriesHome'>
      <DrawerNav/>
      <div className="CategoriesContainer">
        <div className='CategoriesHeader'>
          <h1>All Categories</h1>
        </div>
        <div className='CategoriesCategoriesDiv'>
          {categories && categories.map((item) => (
              <div className='CategoriesBlock' style={{backgroundColor: item.color}}>
                <img src={item.icon} className="CategoriesIcon" />
                <p>{item.name}</p>
              </div>
          ))}
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default CategoriesPage