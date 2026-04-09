import React from 'react';
import './EmailBox.css';
import { LuMail } from 'react-icons/lu';

const EmailBox = ({ openModal }) => {
  return (
    <div className="emailBox">
      <a href="mailto:contact@devnexts.com?subject=DevNexts%20-%20Starting%20a%20Project">
        <LuMail size={30} color="grey" />
      </a>

      <div className="emailText">
        <a
          href="mailto:contact@devnexts.com?subject=DevNexts%20-%20Starting%20a%20Project"
          className="emailLink"
        >
          contact@devnexts.com
        </a>
      </div>

      <div className="getFunded" onClick={openModal}>
        Book Call
      </div>
    </div>
  );
};

export default EmailBox;
