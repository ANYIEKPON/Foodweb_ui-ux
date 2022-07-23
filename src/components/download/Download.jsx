import React from 'react';
import { PlayArrow, Apple } from '@mui/icons-material';

import './Download.css'

function Download() {
  return (
    <div className='donload'>
        
            <div className='download_app'>
                <h1>Put us in your<br /> pocket</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                    illo mollitia blanditiis hic optio veritatis animi.
                </p>
                <div className='divv'>
                    <div className='app-download'>
                        <div><PlayArrow /></div>
                        <div>Available on <br /> <span>Play Store</span></div>
                    </div>
                    <div className='app-download'>
                        <div><Apple /></div>
                        <div>Available on <br /> <span>Play Store</span></div>
                    </div>
                </div>
            </div>
            <div className='phoneios'>
                <div>
                    <img className='phone_download' src={require('../../images/image-download.jpg')} alt="" />
                </div>
                <div>
                    <ul className='foo_list'>
                        <li>
                            <h3>No minimum order</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing <br />
                                elit. Quis, commodi. Culpa corrupti, eveniet <br />
                                officiis nisi nobis itaque non obcaecati.
                            </p>
                        </li>
                        <li>
                            <h3>Foods for all craving</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing <br />
                                elit. Quis, commodi. Culpa corrupti, eveniet <br />
                                officiis nisi nobis itaque non obcaecati.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        
    </div>
  )
}

export default Download;