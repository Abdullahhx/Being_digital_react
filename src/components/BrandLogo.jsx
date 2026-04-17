import React from 'react';

const BrandLogo = ({ className = '', style = {} }) => (
  <svg viewBox="0 0 100 100" className={className} style={{...style, overflow: 'visible'}} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="whiteGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#d8d8d8" />
      </linearGradient>
      <linearGradient id="whiteGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fdfdfd" />
        <stop offset="100%" stopColor="#c0c0c0" />
      </linearGradient>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2bdcf8" />
        <stop offset="100%" stopColor="#0096c7" />
      </linearGradient>
      <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.4" />
      </filter>
    </defs>
    
    <g filter="url(#logoShadow)">
      {/* Top Right White Triangle */}
      <polygon points="45,25 95,5 95,45" fill="url(#whiteGrad1)" />
      
      {/* Left White Diamond */}
      <polygon points="5,50 40,32 75,50 40,68" fill="url(#whiteGrad2)" />
      
      {/* Bottom Right Cyan Triangle */}
      <polygon points="45,75 95,55 95,95" fill="url(#cyanGrad)" />
    </g>
  </svg>
);

export default BrandLogo;
