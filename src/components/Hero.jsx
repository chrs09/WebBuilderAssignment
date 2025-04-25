import React from 'react';
import HeaderImg from '../assets/real-estate-assets/1.png';
import CallToAction from './CallToAction';

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Top header with hamburger and image */}
      <div className="hero-header">
        <div className="hero-inner container">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img src={HeaderImg} alt="Header" className="hero-img" />
          <div className="spacer"></div>
        </div>
        <div className="hero-arrow"></div>
      </div>

      {/* Bottom call-to-action section */}
      <CallToAction />
    </div>
  );
};

export default Hero;
