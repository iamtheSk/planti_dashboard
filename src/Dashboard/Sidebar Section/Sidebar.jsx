import React from 'react'
import './sidebar.css'

// Import Images
import logo from '../DashboardAssets/logo.png'

// Icon menu
import {IoMdSpeedometer} from 'react-icons/io'

import {MdDeliveryDining} from 'react-icons/md'

import {MdOutlineExplore} from 'react-icons/md'

import {BsTrophy} from 'react-icons/bs'

//Icons for settings

import {AiOutlinePieChart} from 'react-icons/ai'

import {BiTrendingUp} from 'react-icons/bi'

import {MdOutlinePermContactCalendar} from 'react-icons/md'

import {BsCreditCard2Front} from 'react-icons/bs'

//sidebar
import {BsQuestionCircle} from 'react-icons/bs'




const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">
            <li className="listItem">
              <a href="#" className="menuLink">
                <IoMdSpeedometer className='icon' />

                  <span className="smallText">
                      Dashboard
                  </span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink">
                <MdDeliveryDining className='icon' />

                  <span className="smallText">
                      My Orders
                  </span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink">
                <MdOutlineExplore className='icon' />

                  <span className="smallText">
                      Explore
                  </span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink">
                <BsTrophy className='icon' />

                  <span className="smallText">
                      Products
                  </span>
              </a>
            </li>

        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">
            <li className="listItem">
              <a href="#" className="menuLink">
                <AiOutlinePieChart className='icon' />

                  <span className="smallText">
                      Charts
                  </span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink">
                <BiTrendingUp className='icon' />

                  <span className="smallText">
                      Trends
                  </span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink">
                <MdOutlinePermContactCalendar className='icon' />

                  <span className="smallText">
                      Contact
                  </span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink">
                <BsCreditCard2Front className='icon' />

                  <span className="smallText">
                      Billing
                  </span>
              </a>
            </li>

        </ul>
      </div>

      <div className="sideBarCard">
          <BsQuestionCircle  className='icon'/>
          <div className="cardContent">
            <div className="circle1"></div>
            <div className="circle2"></div>

            <h3>Help Center</h3>
            <p>Having trouble in planti, please contact us from for more questions.</p>

            <button className="btn">Go to help center</button>
          </div>
      </div>
    </div>
  )
}

export default Sidebar