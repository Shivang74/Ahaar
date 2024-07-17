import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Enjoy the flavors of convenience with Ahaar. Delight in every bite delivered right to your door. Discover more delicious moments at Ahaar - your ultimate culinary companion.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
              <li>+91 7489029991</li>
              <li>contact@ahaar.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Ahaar™ , All Rights Reserved.</p>
    </div>
  )
}

export default Footer
