import React from 'react'
import './activity.css'

//import icons
import {BsArrowRightShort} from 'react-icons/bs'

//User Image
import cimg1 from '../../DashboardAssets/user2.jpeg'
import cimg2 from '../../DashboardAssets/user3.jpg'
import cimg3 from '../../DashboardAssets/user4.jpeg'
import cimg4 from '../../DashboardAssets/user5.avif'
import cimg5 from '../../DashboardAssets/user6.jpg'


const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="setContainer grid">
        <div className="singleCustomer flex">
          <img src={cimg1} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
              2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={cimg2} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Kylan Gentry</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
              20 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={cimg3} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Franklin Sierra</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
              40 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={cimg4} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Marceline Avila</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
              1 hr ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={cimg5} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Rome Garcia</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
              2 hr ago
          </div>
        </div>

      </div>
    </div>
  )
}

export default Activity