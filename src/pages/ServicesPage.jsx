import React from 'react';
import ServicesHero from '../components/ServicesHero';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div className="page-content">
      <ServicesHero />
      <Services />
    </div>
  );
};

export default ServicesPage;
