import React from 'react'
import REDR from '../assets/real-estate-assets/12.jpg';
import CnR from '../assets/real-estate-assets/13.jpg';
import RoE from '../assets/real-estate-assets/14.jpg';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from 'react-icons/fa';
const Service = () => {
  return (
    <div className="service-container">
        <div className="service-content">
            <div className="service-header">
                <h2 className="service-header">Our Service</h2>
            </div>
            <div className="service-img-container">
                <div className="service-card">
                    <img src={REDR} alt="Real Estate Done Right" className="service-img" />
                    <h2 className="service-title">Real Estate Done Right</h2>
                    <p className="service-text">
                        Nervous about your property adventure?
                        Don't be.Whether you're getting ready to buy or sell your 
                        residence, looking at investment properties, or 
                        just curious about the markets, our team ensures 
                        you get the best experience possible!
                    </p>
                </div>
                <div className="service-card">
                    <img src={CnR} alt="Real Estate Done Right" className="service-img" />
                    <h2 className="service-title">Commercial & Residential</h2>
                    <p className="service-text">
                        Large or small, condo or mansion, we can find it 
                        and get at the price that's right. Fixer-uppers? 
                        Luxury? We can help with all of it! We live, work, 
                        and play in this community. Happy to help you 
                        find where to put you hard-earned dollars.
                    </p>
                </div>
                <div className="service-card">
                    <img src={RoE} alt="Real Estate Done Right" className="service-img" />
                    <h2 className="service-title">Rely on Expertise</h2>
                    <p className="service-text">
                        If you have questions about affordability, credit, 
                        and loan options, trust us to connect you with the 
                        right people to get the answers you need in a 
                        timely fashion. We make sure you feel confident 
                        and educated every step of the way.
                    </p>
                </div>
            </div>
            <div className="service-footer">
                <p>Follow us on</p>
                <div className="social-icons">
                <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" target="_blank" rel="noopener noreferrer"><FaYelp /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
