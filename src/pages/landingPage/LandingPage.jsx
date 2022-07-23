import React from 'react'
import Download from '../../components/download/Download';
import Footer from '../../components/footer/Footer';
import Intro from '../../components/Intro/Intro';
import TopMenu from '../../components/topMenu/TopMenu';
import AboutUs from '../aboutUs/AboutUs';
import OurRestaurants from '../our_restaurants/OurRestaurants';
import './LandingPage.css'

function LandingPage() {
  return (
    <div className='land_page' >
            <Intro />
            <AboutUs />
            <OurRestaurants />
            <Download />
        
    </div>
    
  )
}

export default LandingPage;