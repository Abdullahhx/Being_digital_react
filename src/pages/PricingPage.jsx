import React from 'react';
import PricingHero from '../components/PricingHero';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const PricingPage = () => {
  return (
    <div className="page-content">
      <PricingHero />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default PricingPage;
