import React, { useState } from 'react'
import './home.css'
import Header from '../../Header/Header'
import Menu from '../../MenuList/Menu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import Appdownload from '../../Appdownload/Appdownload'

const home = () => {
  const [category,setCatgory] = useState("All")
  return (
    <div>
        <Header/>
        <Menu category={category} setCatgory={setCatgory}/>    
        <FoodDisplay category={category}/> 
        <Appdownload/>
    </div> 
  )
}

export default home