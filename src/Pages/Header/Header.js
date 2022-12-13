import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='ms-5 ps-5 mt-5'>
            <div className='header-title'>
                <h1>Hi, my name is </h1>
            </div>
            <div className='big-heading'>
               <h1> Mohammad Ibrahim.</h1>
            </div>
            <div className='big-heading'>
                <h2>I build things for the web.</h2>
            </div>
            <div className='heading-text'>
                <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
            </div>
            <div>
            <button className="heading-btn">Check out my work!</button>
            </div>
        </div>
    );
};

export default Header;