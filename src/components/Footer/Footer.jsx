import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       
        <div className="footer-content">
        <img className='logo' src={assets.logo}  alt="" />
            <div className="footer-content-left">
                <p>Lorem ipsum dolor sit amet consectetur,placeat sunt amet, nam tenetur veritatis commodi doloribus nihil.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            
            </div>
            <div className="footer-content-right">
                <h2>GET IN CONTACT</h2>
                <ul>
                    <li>+91 12346789</li>
                    <li>contact@tasty.com</li>
                </ul>
            </div>    
        </div> 
        <br/>
    </div>
  )
}

export default Footer