import React from "react";
import "./Footer.css";
import EmailBox from "../EmailBox/EmailBox";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = ({ openModal }) => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <div className="f-content">
            {/* Left Section */}
            <div className="left-content">
              <span className="title">Get Started Today</span>
              <EmailBox openModal={openModal} />
            </div>

            {/* Right Section */}
            <div className="right-content">
              <div className="contact-box">
                <p>Follow Us</p>
                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/company/dev-nexts"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Devnexts LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://x.com/devnexts_llc"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Devnexts X"
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href="https://www.instagram.com/devnexts_llc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Devnexts Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* Footer Menu */}
          <div className="f-menu">
            <Link to="wwd-wrapper" spy smooth>
              <span>Our Values</span>
            </Link>

            <Link to="od-wrapper" spy smooth offset={100}>
              <span>What We Do</span>
            </Link>

            <Link to="hiw-wrapper" spy smooth>
              <span>How It Works</span>
            </Link>

            <Link to="projects" spy smooth offset={100}>
              <span>Our Projects</span>
            </Link>
          </div>

          <hr />

          {/* Bottom Section */}
          <div className="f-bottom">
            <span className="copyright-line">
              © {new Date().getFullYear()} Devnexts Technologies. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
