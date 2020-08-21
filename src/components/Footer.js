import React from 'react'

import facebook from '../assets/imgs/facebook.png';
import instagram from '../assets/imgs/insta.png';
import google from '../assets/imgs/google.png';
import apple from '../assets/imgs/apple.png';
import logo from '../assets/imgs/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" className="footer_logo" />
      <h1 className="footer_title">Em breve disponível para</h1>
      <div className="footer_appstore">
        <img src={apple} alt="" id="apple" />
        <img src={google} alt="" id="google" />
      </div>
      <div className="footer_social-network">
        <ul className="footer_social-network-list">
          <li><a href="https://www.facebook.com/Save-GO-129543121967420"><img src={facebook} alt="" srcSet="" /></a></li>
          <li><a href="https://www.instagram.com/savengoo/"><img src={instagram} alt="" srcSet="" /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
