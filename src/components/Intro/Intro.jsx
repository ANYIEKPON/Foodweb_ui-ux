import React from 'react';
import { Room } from '@mui/icons-material';

import './Intro.css';

function Intro() {
  return (
    <div className='intro'>
        <div className="div-intro">
            <div className='intro-text'>
                <div className='text'>
                    <h1>Eat Fresh And <br /> Healthy Food</h1>
                </div> 
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        repudiandae quod natus assumenda laboriosam,
                    </p>
                </div>
                <div className='form_div'>
                    <div className='formdiv'>
                        <form> 
                            <input  type="search" placeholder='Search your restaurant or food....' className='food-search' />
                        </form>
                    </div>
                    <div className='formdiv_text'>
                        GET STARTED
                    </div>
                </div>
            </div>
            <div className='locat'>
                <div><Room /></div>
                <div>Your Location</div>
            </div>
                
        </div>
        <div className='div-intro1'>   
        </div>
        <div className='div_into1_img'>
            <img className='img_food1' src={require("../../images/image1.jpg")} />
        </div>
        <div className='div_intro2_img'>
            <img className='img_food2' src={require("../../images/image2.jpg")} />
        </div>
        <div className='div_intro3_img'>
            <img className='img_food3' src={require("../../images/image2.jpg")} />
        </div>
    </div>
  )
}

export default Intro;