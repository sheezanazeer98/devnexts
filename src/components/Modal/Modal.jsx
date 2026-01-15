import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { FaTimes } from 'react-icons/fa';
import './Modal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '400px',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};

const ContactModal = ({ status, onClose }) => {
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
      setBtnText("Submitting");
      try {
        const response = await fetch('/api/collectEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formData }),
        });

        if (response.ok) {
          toast.success(`Thank you, ${formData.email}! We've received your email.`);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            assistance: '',
            message: '',
          });
          setBtnText("Submit");
          onClose(); // Close modal after successful submission
        } else {
          toast.error('Please reach out to contact@devnexts.com for support.');
          setBtnText("Submit");
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('For additional support, please reach out to contact@devnexts.com.');
      }
    }
  };

  return (
    <div>
      <Modal open={status} onClose={onClose}>
        <Box sx={style}>
          <FaTimes className="close-icon" onClick={onClose} />
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label>Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>

            <div className="form-group">
              <label>Work Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>How may we serve you?*</label>
              <select
                name="assistance"
                value={formData.assistance}
                onChange={handleInputChange}
              >
                <option value="" disabled>Please Select</option>
                <option value="Looking for Dev Team">Looking for Dev Team</option>
                <option value="Web Application Development">Web Application Development</option>
                <option value="Blockchain Development">Blockchain Development</option>
                <option value="AI/ML Consultation">AI/ML Consultation</option>
                <option value="Cloud Consultation">Cloud Consultation</option>
                <option value="Mobile Application Development">Mobile Application Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="US Tax & Finance Management">US Tax & Finance Management</option>
                <option value="other">Other</option>
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

            <button type="submit" className="submit-btn">{btnText}</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactModal;
