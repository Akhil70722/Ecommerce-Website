import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Campus Threads Logo" />
          <p>Campus Threads - Your one-stop shop for premium college uniforms, accessories, and merchandise. We ensure students look sharp, stay comfortable, and carry the spirit of campus pride wherever they go.</p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook Icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter Icon" />
            </a>
            <a href="https://www.linkedin.com/company/campusthreads/" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn Icon" />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Shop Now</Link></li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li><Link to="/help-support">Help & Support</Link></li>
            <li>+91-98765-43210</li>
            <li>
              <a href="mailto:support@campusthreads.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                support@campusthreads.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-content-legal">
          <h2>LEGAL</h2>
          <ul>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            <li><Link to="/return-policy">Return & Refund Policy</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        © 2024 Campus Threads - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
