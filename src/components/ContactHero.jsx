import React from 'react';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <div className="contact-hero-section">
      <div className="ch-content">
        <h1 className="ch-title">Contact Us Easily<br/>Online</h1>
        <p className="ch-subtitle">
          Start your path to success with our thoroughly selected specialists.
        </p>
        
        <div className="ch-actions">
          <button className="ch-button">
            Meet the Team
          </button>
 
          <div className="ch-phone-block">
            <span className="ch-phone-label">Give Us a Call:</span>
            <h2 className="ch-phone-number">+ 0800 2336 7811</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
