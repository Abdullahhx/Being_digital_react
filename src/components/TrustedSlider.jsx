import React from 'react';
import './TrustedSlider.css';

const TrustedSlider = () => {
  const logos = [
    { name: "MAISON DE NOUR", style: { fontFamily: 'serif', letterSpacing: '2px' } },
    { name: "GUL FARM", style: { fontWeight: 900, textTransform: 'uppercase' } },
    { name: "ALI & SONS", style: { fontFamily: 'sans-serif', letterSpacing: '-1px' } },
    { name: "CAMFORT", style: { fontWeight: 800, letterSpacing: '1px' } },
    { name: "HARAM", style: { fontFamily: 'serif', fontStyle: 'italic' } },
    { name: "Brandeals", style: { fontFamily: 'serif', fontWeight: 'bold' } }
  ];

  // We repeat the logos multiple times to create a seamless infinite scroll
  const marqueeContent = [...logos, ...logos, ...logos];

  return (
    <section className="trusted-section">
      <h3 className="trusted-title">Trusted by 500+ Growing Businesses Worldwide</h3>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {marqueeContent.map((logo, index) => (
            <div key={index} className="marquee-item" style={logo.style}>
              {logo.name}
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
