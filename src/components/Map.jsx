import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYelp } from 'react-icons/fa';

const Map = () => {
  return (
    <div>
      {/* Google Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9108.6467629659!2d-115.9592003586892!3d36.18132422144595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c639a25ba6af0f%3A0x5c7351dde0fbb39a!2sMarci%20Metzger%20-%20THE%20RIDGE%20REALTY%20GROUP%20-%20B1002787!5e0!3m2!1sen!2sph!4v1745559793289!5m2!1sen!2sph"
          width="100%" height="100%" style={{ border: 0 }} allowfullscreen=""
          loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      {/* Black Section with Social Media Links */}
      <div className="social-media-container">
        <div className="social-media-links">
          <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaYelp />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="copyright-text">
          <p className="text-center text-white text-sm">
            Copyright © 2023 Marci METZGER Homes - All Rights Reserved
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Map;
