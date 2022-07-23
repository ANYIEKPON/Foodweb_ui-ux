import React from 'react';
import './TopMenu.css';
import { DeliveryDining } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';




function TopMenu() {
  return (
    <div className='top-div'>
        <div className='top-left'>
            <div className='delivery-icon'><DeliveryDining /></div>
            <div>DELIVERY</div>
        </div>
        <div className="top-right">
            <div >
                <ul className='list'>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/about-us'><li>About us</li></NavLink>
                    <NavLink to='#'><li>Our services</li></NavLink>
                    <NavLink to='#'><li>Our menu</li></NavLink>
                    <NavLink to='#'><li>Blogs</li></NavLink>
                    <NavLink to='#'><li>Contact</li></NavLink>
                    <NavLink to='/restaurants'><li>Restaurants</li></NavLink>
                </ul>
            </div>
            <div className='button'>
                GET STARTED
            </div>
        </div>
    </div>
  )
}

export default TopMenu;