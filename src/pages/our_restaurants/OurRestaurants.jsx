import React from 'react';
import { KeyboardDoubleArrowRightSharp } from '@mui/icons-material';

import './OurRestaurants.css'

function OurRestaurants() {
  return (
    <div className='restaurant'>
        <div className='our_rest'>
            <div className='our_restaurant-top'>
                <div><h2>Our restaurants</h2></div>
                <div className='our_buttons'>
                    <div>See all restaurants</div>
                    <div className='restau_icon'><KeyboardDoubleArrowRightSharp /></div>
                </div> 
            </div>
            <div className='our-restaurants'>
            <article className='restau_article'>
                    <img className='res_location' src={require('../../images/image_1.jpg')} alt="" />
                    <div className='image_text'>
                        <h3>The Bemanton Restaurant</h3>
                        <p>No. 1B Oshowole Close</p>
                    </div>
                </article>
                <article className='restau_article'>
                    <img className='res_location' src={require('../../images/image_1.jpg')} alt="" />
                    <div className='image_text'>
                        <h3>The Bemanton Restaurant</h3>
                        <p>No. 1B Oshowole Close</p>
                    </div>
                </article>
                <article className='restau_article'>
                    <img className='res_location' src={require('../../images/image_1.jpg')} alt="" />
                    <div className='image_text'>
                        <h3>The Bemanton Restaurant</h3>
                        <p>No. 1B Oshowole Close</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
  )
}

export default OurRestaurants;