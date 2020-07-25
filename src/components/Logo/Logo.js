import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css'

const Logo = () => {
     return (
        <div className='m4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150, marginLeft: '2.0rem', marginBottom : '2.0rem' }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '1px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
     );  
}

export default Logo;