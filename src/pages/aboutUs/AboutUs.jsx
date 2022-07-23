import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className='about-Us'>
        <div className='about_display'>
            <div className='poly_shape'>
                <div className='poligon'>
                </div>
                <div className='poly_img'>
                    <img className='about_img' src={require('../../images/image3.jpg')} alt="" />
                </div>
            </div>
            <div className='about_ustext'>
                <div className='text_h3'><h3>About Us</h3></div>
                <article>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia <br />
                        praesentium saepe fugit eaque tempore aut ab perspiciatis illo. <br />
                        praesentium saepe fugit eaque tempore
                    </p>
                </article>
                <article>    
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia <br />
                        praesentium saepe fugit eaque tempore aut ab perspiciatis illo. <br />
                        praesentium saepe.
                    </p>
                </article>
                <div className='learn_more'>Learn More</div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;