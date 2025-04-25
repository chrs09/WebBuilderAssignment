import React from 'react'
import RidgeLogo from '../assets/real-estate-assets/8.png';
import EqualHousingLogo from '../assets/real-estate-assets/9.png';
import RealtorLogo from '../assets/real-estate-assets/10.png';
import PahrumpLogo from '../assets/real-estate-assets/11.png';
const LogoList = () => {
  return (
    <div className="logo-container">
        <div className="logo-inner-container">
            <div className="logo-img">
                <img src={RidgeLogo} alt="" className="logo" />
            </div>
            <div className="logo-img">
                <img src={EqualHousingLogo} alt="" className="logo" />
            </div>
            <div className="logo-img">
                <img src={RealtorLogo} alt="" className="logo" />
            </div>
            <div className="logo-img">
                <img src={PahrumpLogo} alt="" className="logo" />
            </div>
        </div>
    </div>
  )
}

export default LogoList
