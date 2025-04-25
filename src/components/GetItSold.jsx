import React from 'react';
import Img1 from '../assets/real-estate-assets/4.jpg';
import Img2 from '../assets/real-estate-assets/5.jpg';
import Img3 from '../assets/real-estate-assets/6.jpg';

const GetItSold = () => {
  return (
    <div className="get-it-sold">
      <h2>GET IT SOLD</h2>
      <div className="content">
        <div className="row">
          <div className="image"><img src={Img1} alt="Sales" /></div>
          <div className="text">
            <h3>Top Residential Sales Last 5 Years</h3>
            <p>
              We helped nearly 90 clients in 2021, and closed 28.5 million in sales!
              Our team works hard every day to grow and learn, so that we may continue to excel in our market.
              Our clients deserve our best, & we want to make sure our best is better every year.
            </p>
          </div>
        </div>
        <div className="row reverse">
          <div className="text">
            <h3>Don't Just List it... </h3>
            <p>
                Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer,
              getting you top dollar for your home.
            </p>
          </div>
          <div className="image"><img src={Img2} alt="List It" /></div>
        </div>
        <div className="row">
          <div className="image"><img src={Img3} alt="Buyers" /></div>
          <div className="text">
            <h3>Guide to Buyers</h3>
            <p>
              Nobody knows the market like we do. Enjoy having a pro at your service.
              Market analysis, upgrades lists, contractors on speed dial, & more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetItSold;
