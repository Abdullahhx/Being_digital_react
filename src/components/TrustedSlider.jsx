import React from 'react';
import './TrustedSlider.css';

import logo1 from '../assets/logo_1.png';
import logo2 from '../assets/logo_2.png';
import logo3 from '../assets/logo_3.png';
import logo4 from '../assets/logo_4.png';
import logo5 from '../assets/logo_5.png';
import logo6 from '../assets/logo_6.png';

const TrustedSlider = () => {
  const logos = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" },
    { src: logo5, alt: "Logo 5" },
    { src: logo6, alt: "Logo 6" }
  ];

  // We repeat the logos multiple times to create a seamless infinite scroll
  const marqueeContent = [...logos, ...logos, ...logos];

  return (
    <section className="trusted-section">
      <h3 className="trusted-title">Trusted by 500+ Growing Businesses Worldwide</h3>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {marqueeContent.map((logo, index) => (
            <div key={index} className="marquee-item">
              <img src={logo.src} alt={logo.alt} className="marquee-logo" />
            </div>
          ))}
        </div>
      </div>

      <div className="trusted-info">
        <p className="trusted-description">
          At Being Digitals, we deliver complete IT services that help businesses design, build, market, and scale their digital presence. 
          Our expert team supports startups, enterprises, and e-commerce brands with reliable, future-ready solutions.
        </p>
        <a href="#services" className="pill-button primary find-out-more">
          Find Out More
        </a>
      </div>
    </section>
  );
};

export default TrustedSlider;
