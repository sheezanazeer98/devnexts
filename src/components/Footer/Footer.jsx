import React, { useState } from 'react';
import './Footer.css';
import { FaTwitter, FaDiscord, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    assistance: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [btnText, setBtnText] = useState('Submit');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.assistance) newErrors.assistance = 'required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      // console.log('Form submitted:', formData);
      setBtnText("submitting")
      try {
        // Send email to the Next.js API route
        const response = await fetch('/api/collectEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData }),
        });

        const data = await response.json();
        if (response.ok) {
          alert(`Thank you, ${formData.email}! We've received your email. Our team will contact you soon. For additional support, please reach out to contact@devnexts.com.`);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            assistance: '',
            message: '',
          })
          setBtnText("Submit") // Clear the input field after displaying the alert
        } else {
          setBtnText("Submit")
          alert(`For additional support, please reach out to contact@devnexts.com.`);
        }
      } catch (error) {
        console.error('Error collecting email:', error);
        alert('For additional support, please reach out to contact@devnexts.com.');
      }
    }
  };

  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <div className="f-content">
            {/* Left Side: Title and Contact Form */}
            <div className="left-content">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>First name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label>Last name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>

                <div className="form-group">
                  <label>Work email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label>How may we assist you?*</label>
                  <select
                    name="assistance"
                    value={formData.assistance}
                    onChange={handleInputChange}
                  >
               <option value="" disabled>Please Select</option>
  <option value="Looking for Dev Team">Looking for Dev Team</option>
  <option value="Web  Application Development">Web Application Development</option>
  <option value="Blockchain Development"> Blockchain Development</option>
  <option value="AI/ML Consultation"> AI/ML Consultation</option>
  <option value="Cloud Consultation">Cloud Consultation</option>
  <option value="Mobile Application Development"> Mobile Application Development</option>

                  </select>
                  {errors.assistance && <span className="error">{errors.assistance}</span>}
                </div>

                <div className="form-group">
                  <label>Message*</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-btn"> {btnText} </button>
              </form>
            </div>

            {/* Right Side: Contact Information and Social Icons */}
            <div className="right-content">
              <div className="contact-box">
                <p>   Email Us: <a href="mailto:contact@devnexts.com?subject=IT%20Company%20Inquiry%20-%20Starting%20a%20Project">contact@devnexts.com</a></p>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/company/dev-nexts" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://www.youtube.com/@DevNexts" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaDiscord />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="f-menu">
            <Link to="wwd-wrapper" spy={true} smooth={true}><span>Our Values</span></Link>
            <Link to="od-wrapper" spy smooth offset={100}><span>What we do</span></Link>
            <Link to="hiw-wrapper" spy smooth><span>How it works</span></Link>
            <Link to="projects" spy smooth offset={100}><span>Our Projects</span></Link>
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
