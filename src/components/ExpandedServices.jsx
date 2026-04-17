import React from 'react';
import './ExpandedServices.css';

const expandedServicesList = [
  {
    title: 'Graphic Designing',
    description: 'Creative and professional graphic designs that build strong brand identity, including logos, branding materials, social media creatives, and marketing visuals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
      </svg>
    )
  },
  {
    title: 'Website Design & Development',
    description: 'Modern, responsive, and high-performing websites designed and developed to deliver great user experience and business results.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.1 4 19 4ZM19 18H5V8H19V18Z" />
      </svg>
    )
  },
  {
    title: 'Digital Marketing',
    description: 'Result-driven digital marketing solutions including SEO, paid ads, and content marketing to increase traffic, leads, and online visibility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 2.5C13.5 1.5 14.5 0.5 15.5 0.5H23.5V8.5C23.5 9.5 22.5 10.5 21.5 10.5H19L14.5 15L10 10.5L1.5 19L0 17.5L10 7.5L14.5 12L17.5 9V2.5H13.5Z" />
      </svg>
    )
  },
  {
    title: 'E-Commerce Store Setup & Optimization',
    description: 'Complete e-commerce solutions including store setup, payment integration, and performance optimization to help you sell more online.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Photography & Videography',
    description: 'High-quality photography and video production to showcase your brand, products, and services with visually compelling and engaging content.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 4L19 4L17 2L7 2L5 4L3 4C1.9 4 1 4.9 1 6L1 20C1 21.1 1.9 22 3 22L21 22C22.1 22 23 21.1 23 20L23 6C23 4.9 22.1 4 21 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18ZM12 8.5C10.07 8.5 8.5 10.07 8.5 12C8.5 13.93 10.07 15.5 12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5Z" />
      </svg>
    )
  },
  {
    title: 'Social Media Management',
    description: 'Strategic social media management to grow your audience, increase engagement, and maintain a consistent brand presence across platforms.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 2L3 2C1.9 2 1 2.9 1 4L1 20C1 21.1 1.9 22 3 22L15 22L23 14L23 4C23 2.9 22.1 2 21 2ZM21 13L14 13L14 20L3 20L3 4L21 4L21 13Z" />
      </svg>
    )
  }
];

const ExpandedServices = () => {
  return (
    <section className="expanded-services-section">
      <div className="expanded-services-grid">
        {expandedServicesList.map((service, index) => (
          <div key={index} className="expanded-service-card">
            <div className="card-corner-ribbon"></div>
            <div className="expanded-icon-wrapper">
              {service.icon}
            </div>
            <h3 className="expanded-service-title">{service.title}</h3>
            <p className="expanded-service-description">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="expanded-services-cta">
        <h3 className="innovate-text">Ready to Innovate?</h3>
        <a href="#contact" className="pill-button primary cta-button">
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default ExpandedServices;
