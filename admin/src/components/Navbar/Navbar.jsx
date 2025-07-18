import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <img className='logo1' src={assets.logo1} alt="" />
            <img className='profile' src={assets.profile_image1} alt="" />
        </div>
    </div>
  )
}

export default Navbar