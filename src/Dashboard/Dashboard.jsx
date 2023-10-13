import React from 'react'
import Body from './Body Section/Body'
import Sidebar from './Sidebar Section/Sidebar'
import './dashboard.css'
const Dashboard = () => { 

  const date = new Date();


  return (
    <div className='container'>
        <Sidebar />
        <Body />
        <span className='copyright'>&#169; {date.getFullYear()} Salman</span>
    </div>
  )
}

export default Dashboard