import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left"> 
                <img src={assets.logo2} alt=''/>
                <p>Uber Eats is available in hundreds of cities around the world. Enter your delivery address to explore any Sri Lankan Food delivery options near you.Uber Eats is available in hundreds of cities around the world. Enter your delivery address to explore any Sri Lankan Food delivery options near you.</p>
           
            <div className="footer-social-icons">
                <img src= {assets.fb_icon} alt='' />
                <img src= {assets.twitter_icon} alt='' />
                <img src= {assets.linkedin_icon} alt='' />
            </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@lial.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 lial.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
