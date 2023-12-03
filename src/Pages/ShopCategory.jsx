import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assests/dropdown.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className="shop-category-left">
        <div>
        <h2>FLAT 50% OFF</h2>
        <div>
          <p><span>12</span> Hours <span>20</span> Mins</p>
        </div>
        <div className="shop-category-btn">
          <div>Explore now</div>
        </div>
        <img className="shopcategory-banner" src={props.banner} alt="" />
        </div>
      </div>
