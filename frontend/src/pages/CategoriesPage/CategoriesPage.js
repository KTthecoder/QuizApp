import React from 'react'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import '../CategoriesPage/CategoriesPage.css'
import Footer from '../../components/Footer/Footer'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const CategoriesPage = () => {
  const [categories] = useFetch('http://127.0.0.1:8000/categories/all')

  const navigate = useNavigate()

  return (
    <div className='CategoriesHome'>
      <DrawerNav/>
      <div className="CategoriesContainer">
        <div className='CategoriesHeader'>
          <h1>All Categories</h1>
        </div>
        <div className='CategoriesCategoriesDiv'>
          {categories && categories.map((item) => (
            <div className='CategoriesBlock' style={{backgroundColor: item.color}} onClick={() => navigate(`/categories/${item.slug}`)} key={item.id}>
              <img src={`http://127.0.0.1:8000${item.icon}`} className="CategoriesIcon" />
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