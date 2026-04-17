import React from 'react';
import BrandLogo from './BrandLogo';
import './Services.css';

const servicesList = [
  {
    title: 'Design & UI/UX',
    description: 'Creative and user-focused designs that enhance brand identity and improve user experience.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
      </svg>
    )
  },
  {
    title: 'Development Solutions',
    description: 'Custom websites, software, and applications built for performance, scalability, and security.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="5" height="5" />
        <rect x="9.5" y="2" width="5" height="5" />
        <rect x="17" y="2" width="5" height="5" />
        <rect x="2" y="9.5" width="5" height="5" />
        <rect x="9.5" y="9.5" width="5" height="5" />
        <rect x="17" y="9.5" width="5" height="5" />
        <rect x="2" y="17" width="5" height="5" />
        <rect x="9.5" y="17" width="5" height="5" />
        <rect x="17" y="17" width="5" height="5" />
      </svg>
    )
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to increase visibility, traffic, and conversions online.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="10.5" y="0" width="3" height="7" rx="1.5" />
        <rect x="10.5" y="17" width="3" height="7" rx="1.5" />
        <rect x="17" y="10.5" width="7" height="3" rx="1.5" />
        <rect x="0" y="10.5" width="7" height="3" rx="1.5" />
        <circle cx="12" cy="12" r="3.5" />
        <rect x="18" y="2.5" width="3" height="6" transform="rotate(45 19.5 5.5)" rx="1.5" />
        <rect x="3.5" y="17" width="3" height="6" transform="rotate(45 5 20)" rx="1.5" />
        <rect x="3.5" y="2.5" width="6" height="3" transform="rotate(45 6.5 4)" rx="1.5" />
        <rect x="18" y="17" width="6" height="3" transform="rotate(45 21 18.5)" rx="1.5" />
      </svg>
    )
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Powerful e-commerce platforms designed to sell more and scale your online business.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container-split">
        <div className="services-left">
          <BrandLogo className="huge-logo-img" style={{ width: '100%', maxWidth: '450px', filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4))' }} />
        </div>
        
        <div className="services-right">
          <div className="services-grid-2x2">
            {servicesList.map((service, index) => (
              <div key={index} className="service-grid-card">
                <div className="service-grid-icon">{service.icon}</div>
                <h3 className="service-grid-title">{service.title}</h3>
                <p className="service-grid-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
