import React from 'react'
import { DeliveryDining, FacebookOutlined, Instagram, Twitter, Pinterest } from '@mui/icons-material';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
       <div className='footernext'>
            
            <div className='footer1'>
                <div className='footer_left-top'>
                    <div className='delivery-icon'><DeliveryDining /></div>
                    <div>DELIVERY</div>
                </div>
                <div className='footer_left-bottom'>
                    <FacebookOutlined />
                    <Instagram />
                    <Twitter />
                    <Pinterest />
                </div>
            </div>
            <div className='footer_oneside'>
                <div className='footer_list'>
                    <span>Home</span>
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Feedback</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>Service</span>
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Feedback</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>About</span>
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Feedback</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <span>Blog</span>
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Feedback</li>
                        <li>Features</li>
                    </ul>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Footer;