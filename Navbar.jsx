import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/admin_assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="title"><img className='logo' src={assets.disk} alt='' />
        <span><h1 className='head'>Food Fiesta</h1></span>
        </div>
        
        <img className='profile'src={assets.profile1} alt='' />
        
    </div>
  )
}

export default Navbar
