import React from 'react';
import './EmailBox.css';
import { LuMail } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animation';

const EmailBox = ({ openModal }) => {
  return (
    <motion.div
      initial={{ width: '.5rem', borderRadius: '100%' }}
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
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <a href="mailto:contact@devnexts.com?subject=DevNexts%20-%20Starting%20a%20Project">
          <LuMail size={30} color="grey" />
        </a>
      </motion.div>

      {/* Email Text Link */}
      <motion.div
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="emailText"
      >
        <a
          href="mailto:contact@devnexts.com?subject=DevNexts%20-%20Starting%20a%20Project"
          className="emailLink"
        >
          contact@devnexts.com
        </a>
      </motion.div>

      {/* Book Call */}
      <motion.div
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="getFunded"
        onClick={openModal}
      >
        Book Call
      </motion.div>
    </motion.div>
  );
};

export default EmailBox;
