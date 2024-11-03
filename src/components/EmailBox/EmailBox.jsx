import React, { useState } from 'react';
import './EmailBox.css';
import { LuMail } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animation';

const EmailBox = () => {
  
  const [email, setEmail] = useState('');
  const [btnText, setBtnText] = useState('Contact');


  const handleContactClick = async () => {

    setBtnText("Sending");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && emailRegex.test(email)) {
      try {
        // Send email to the Next.js API route
        const response = await fetch('/api/collectEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (response.ok) {
          alert(`Thank you, ${email}! We've received your email. Our team will contact you soon. For additional support, please reach out to contact@devnexts.com.`);
          setEmail('');
          setBtnText("Contact") // Clear the input field after displaying the alert
        } else {
          setBtnText("Contact")
          alert(`Failed to Send`);
        }
      } catch (error) {
        console.error('Error collecting email:', error);
        alert('An error occurred while collecting the email. Please try again.');
      }
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <motion.div
      initial={{
        width: '.5rem',
        borderRadius: '100%',
      }}
      whileInView={{
        width: '70%',
        borderRadius: '999px',
        transition: {
          type: 'easeOut',
          duration: 1,
        },
      }}
      className="emailBox"
    >
      {/* Icon */}
      <motion.div
        variants={containerVariants(0.6)}
        initial="offscreen"
        whileInView={'onscreen'}
        viewport={{
          once: true,
        }}
      >
        <LuMail size={30} color="grey" />
      </motion.div>

      {/* Input */}
      <motion.input
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView={'onscreen'}
        viewport={{
          once: true,
        }}
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update email state on change
      />

      {/* Contact Button */}
      <motion.div
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView={'onscreen'}
        viewport={{
          once: true,
        }}
        className="getFunded"
        onClick={handleContactClick} // Trigger the function when clicked
        style={{ cursor: 'pointer' }}
      >
        {btnText}
      </motion.div>
    </motion.div>
  );
};

export default EmailBox;
