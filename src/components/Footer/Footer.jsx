import React from 'react';
import './Footer.css';
import EmailBox from '../EmailBox/EmailBox';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
        <div className="f-content">
          {/* Left Side: Title and EmailBox */}
          <div className="left-content">
            <span className="title">Get Started Today!</span>
            <EmailBox />
          </div>

          {/* Right Side: Contact Information and Social Icons */}
          <div className="right-content">
            <div className="contact-box">
              <p> Email Us: <span> contact@devnexts.com </span>  </p>
              <div className="social-icons">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
          <hr />
          <div className="f-menu">
          <Link to="wwd-wrapper" spy={true} smooth={true} >
                        <span>Our Values</span>
                        </Link>
                        <Link to="od-wrapper" spy smooth offset={100} >
                        <span>What we do</span>
                        </Link>
                        <Link to="hiw-wrapper" spy smooth >
                            <span>How it works</span>
                        </Link>
                        <Link to="projects" spy smooth offset={100} >
                            <span>Our Projects</span>
                        </Link>
          </div>
          <hr />

          <div className="f-bottom">
            <span className="copyright-line">
              &copy; {new Date().getFullYear()} DevNexts. All rights reserved.
            </span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
