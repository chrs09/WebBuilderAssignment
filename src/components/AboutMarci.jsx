import React from 'react'
import MarciImg from '../assets/real-estate-assets/3.jpg'
const AboutMarci = () => {
    console.log("About marci is rendering");
  return (
    <div className="about-container">
       <div className="about-container-content">
            <div className="about-header">
                <h1 className="realtor-name">
                    MARCI METZGER
                </h1>
            </div>
            <div className="img-content">
                <img src={MarciImg} alt="" className="profile-pic" />
            </div>
            <div className="sub-text">
                <p className="about-text1">REALTOR FOR NEARLY 3 DECADES</p>
                <p className="about-contact">206-919-6886</p>
            </div>
       </div>
    </div>
  )
}

export default AboutMarci
