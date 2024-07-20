import React, { useState } from 'react';

import CustomNavbar from './Navbar';
import '../../App.css';
// import HeroBottom from './HeroBottom';

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };
  return (
    <>
    <div className='hero'>
    <CustomNavbar />
      <div className='hero-content'>
        <h1 className='hero-title'>Ready to land your next job. Join Werkfeed</h1>
        <p className='hero-subtitle'>Your resume says a lot about you, it determines whether your <br /> will be called in for an interview or not</p>
      </div>
      
    </div>
    {/* <HeroBottom /> */}
    </>
  );
}

export default Header;