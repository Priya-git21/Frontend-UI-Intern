import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css'; import Logo from "./assets/logo.png";
import appStoreButton from './assets/appstore.png';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='logo'>
        <a href="/">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
      </div>
      <a href="/" className="footer__logo">Ahead</a>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/priya-makkar-851973223" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/Priya-git21" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div>
        <a href="/" className="app-store-link">
          <img src={appStoreButton} alt="Download on the App Store" />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Priya Makkar. 2023. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer