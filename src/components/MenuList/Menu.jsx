import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
const Menu = ({category,setCatgory}) => {
  return (
    <div className='menu-list' id='menu-lists'>
        <h1>Explore our Menu</h1>
        <p className='menu-list-text'>choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our menu satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={() =>setCatgory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Menu