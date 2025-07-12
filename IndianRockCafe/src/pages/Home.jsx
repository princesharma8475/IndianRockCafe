import React from "react";
import Crousel from '../components/Crousel'
import CafeInfo from '../components/CafeInfo'
import MenuItems from '../components/MenuItems'
import FeedbackForm from '../components/FeedbackForm'




const Home = ({menuItems}) => {

 

  return (
    <div>
      <Crousel/>
      <CafeInfo/>
      <MenuItems menuItems={menuItems} />
      <FeedbackForm/>
    </div>
  )
}

export default Home