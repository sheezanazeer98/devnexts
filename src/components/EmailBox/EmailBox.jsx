import React, { useState } from 'react';
import './EmailBox.css';
import { LuMail } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animation';
import { Link } from 'react-scroll';

const EmailBox = ({openModal} ) => {


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
                 <a href="mailto:contact@devnexts.com?subject=DevNexts%20-%20Starting%20a%20Project">   <LuMail size={30} color="grey" />     </a>        
      </motion.div>

      {/* Input */}
        <a href="mailto:contact@devnexts.com?subject=DevNexts%20-%20Starting%20a%20Project"> 
      <motion.input
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView={'onscreen'}
        viewport={{
          once: true,
        }}
        type="email"
        placeholder="Enter Email"
        value={"contact@devnexts.com"}
        disabled
        onClick={() => {
    window.location.href =
      "mailto:contact@devnexts.com?subject=DevNexts%20-%20Starting%20a%20Project";
  }}
  style={{ cursor: "pointer" }}
// Update email state on change
      />
</a>        
      {/* Contact Button */}
      <motion.div
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView={'onscreen'}
        viewport={{
          once: true,
        }}
        className="getFunded"
      // Trigger the function when clicked
        style={{ cursor: 'pointer' }}
        onClick = {()=>{openModal()}}
      >

        
         Book Call
           
      </motion.div>
    </motion.div>
  );
};

export default EmailBox;





