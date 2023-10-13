import React from 'react'
import './listing.css'

// icons
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'


// Images
import img1 from '../../DashboardAssets/image1.png'
import img2 from '../../DashboardAssets/image9.png'
import img3 from '../../DashboardAssets/image8.png'
import img4 from '../../DashboardAssets/image10.png'

// User image
import user2 from '../../DashboardAssets/user2.jpeg'
import user3 from '../../DashboardAssets/user3.jpg'
import user4 from '../../DashboardAssets/user4.jpeg'
import user5 from '../../DashboardAssets/user5.avif'



const Listing = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="setContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={img1} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img2} alt="Image Name" />
          <h3>Snake plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img3} alt="Image Name" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img4} alt="Image Name" />
          <h3>Areca Plam</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user5} alt="User Image" />

            </div>
            <div className="cardText">
                <span>
                  14.556 Plant sold <br />
                  <small>
                    21 Sellers <span className="date">7 Days</span>
                  </small>
                </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user5} alt="User Image" />

            </div>
            <div className="cardText">
                <span>
                  28,556 Plant sold <br />
                  <small>
                    26 Sellers <span className="date">31 Days</span>
                  </small>
                </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Listing