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
// Update email state on change
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
      // Trigger the function when clicked
        style={{ cursor: 'pointer' }}
        onClick = {()=>{openModal()}}
      >

        
         Contact
           
      </motion.div>
    </motion.div>
  );
};

export default EmailBox;





