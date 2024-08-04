// VerticalMarquee.js
import React from 'react';
import './css/vertical.css';

const VerticalMarquee = ({ children }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {children}
      </div>
    </div>
  );
};

export default VerticalMarquee;
