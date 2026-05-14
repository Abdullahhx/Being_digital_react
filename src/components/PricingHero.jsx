import React from 'react';
import './PricingHero.css';

const PricingHero = () => {
  return (
    <div className="pricing-hero-container">
      <div className="ph-badge">Pricing</div>
      <h1 className="ph-title">Your Business Success Story Starts Here!</h1>
      <p className="ph-subtitle">
        Choose the perfect plan to scale your digital presence with our 
        transparent and competitive pricing models.
      </p>
      {/* Background glowing effects */}
      <div className="ph-glow-bg"></div>
    </div>
  );
};

export default PricingHero;
