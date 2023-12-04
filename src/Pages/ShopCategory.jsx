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
      <div className="shop-category-right">
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span>out of 36 products
          </p>
          <div className="shopcategory-sort">
            <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-product">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    </div>
  )
}

export default ShopCategory
