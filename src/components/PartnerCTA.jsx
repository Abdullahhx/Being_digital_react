import React from 'react';
import './PartnerCTA.css';

const PartnerCTA = () => {
  return (
    <section className="partner-cta-section">
      <div className="partner-cta-container">
        <div className="partner-badge-wrapper">
          <span className="section-badge">Your Digital Partner</span>
        </div>
        
        <h2 className="partner-cta-title">
          Let’s Build Your Next<br />
          Big Digital Success<br />
          Together
        </h2>
        
        <p className="partner-cta-description">
          With Being Digitals, you don’t just get services — you get a dedicated IT partner for design, development, marketing, and e-commerce. Let’s grow your business with smart digital solutions.
        </p>
        
        <div className="partner-cta-actions">
          <button className="cta-btn-primary">
            Get Started Now
          </button>
          <button className="cta-btn-outline">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
