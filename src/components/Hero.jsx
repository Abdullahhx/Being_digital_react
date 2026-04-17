import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Build Smarter.<br />
          Launch Faster.
        </h1>
        <p className="hero-description">
          Being Digitals delivers end-to-end IT services, combining innovative
          technology with expert professionals to help businesses build, scale,
          and succeed digitally — locally and globally.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="hero-btn primary">
            Start Your Project
          </a>
          <a href="#services" className="hero-btn outline">
            See Our Process
          </a>
        </div>
      </div>
      {/* Abstract Glowing Orbs for the Futuristic Dark Mode aesthetic */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
    </section>
  );
};

export default Hero;
