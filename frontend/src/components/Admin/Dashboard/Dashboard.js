import React from 'react'
import Header from '../../Header/Header'
import './Dashboard.css';
import BannerImage from './ID2.png'
const Dashboard = () => {
  return (
   <>
   <Header />
   <div className='iDeas-img'>
    <img className='set-img' src={BannerImage} />
   </div>
   
   
   </>
  )
}

export default Dashboard