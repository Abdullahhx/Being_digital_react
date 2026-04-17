import React from 'react';
import './Pricing.css';

const pricingPacks = [
  {
    title: 'Starter Digital Pack',
    badge: 'Best For Small Businesses & Startups',
    price: '$299 / month',
    features: [
      'Website (Up to 5 pages)',
      '10 Social Media Posts',
      '4 Short Reels / Videos',
      'Basic Social Media Management',
      'Monthly Performance Report'
    ]
  },
  {
    title: 'Growth Marketing',
    badge: 'Best For Growing Brands',
    price: '$599 / month',
    features: [
      'Website Dev (Custom Design)',
      '20 Social Media Posts',
      '8 Reels / Short Videos',
      'Full Social Media Management',
      'SEO & Digital Marketing Support'
    ]
  },
  {
    title: 'Ads & Scale Pack',
    badge: 'Best For Serious Growth & Sales',
    price: '$999 / month',
    features: [
      'Advanced Website Development',
      'Content & Creative Strategy',
      'Facebook & Google Ad Campaigns',
      'Dedicated Account Manager',
      'All Growth-pack Services'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-header">
        <div className="pricing-badge-wrapper">
          <span className="section-badge">Plans Overview</span>
        </div>
        <h2 className="pricing-main-title">Startup-Friendly Pricing</h2>
      </div>

      <div className="pricing-grid">
        {pricingPacks.map((pack, index) => (
          <div key={index} className="pricing-card premium-style">
            <div className="card-top-tag">{pack.badge}</div>
            
            <div className="card-top-content">
              <h3 className="pack-title">{pack.title}</h3>
              <p className="pack-price-new">{pack.price}</p>
            </div>
            
            <div className="divider-line"></div>
            
            <ul className="pack-features-list">
              {pack.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="yellow-check">✓</span> {feature}
                </li>
              ))}
            </ul>
            
            <button className="pricing-cta-button">
               Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
