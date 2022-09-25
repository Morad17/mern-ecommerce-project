import React from 'react'
import { Link } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'

const MainNav = () => {
  return (
    <>
    <div>MainNav</div>
      <Link to="/">Home</Link>
      <Link to="/product">Product Details</Link>
    </>
    
  )
}

export default MainNav