import React from 'react';
import './OurProjects.css';

import ecommerceImg from '../assets/ecommerce_project.png';
import managementImg from '../assets/management_project.png';
import technologyImg from '../assets/technology_project.png';
import brandingImg from '../assets/branding_project.png';

const defaultProjects = [
  {
    tag: 'E COMMERCE',
    title: 'NovaHire – AI Recruitment Platform',
    description: 'Automated candidate screening, matching, and outreach using machine learning.',
    image: ecommerceImg
  },
  {
    tag: 'MANAGEMENT',
    title: 'RetailSense – Smart Store Analytics',
    description: 'AI-powered shopper insights and predictive inventory management for global retail chains.',
    image: managementImg
  },
  {
    tag: 'TECHNOLOGY',
    title: 'FinVision – Predictive Finance Dashboard',
    description: 'Real-time forecasting and personalized investment insights using data modeling.',
    image: technologyImg
  },
  {
    tag: 'BRANDING',
    title: 'MedAssist – Virtual Health Companion',
    description: 'AI chatbot and patient tracking platform, improving appointment adherence by 35%.',
    image: brandingImg
  }
];

const OurProjects = ({ 
  projects = defaultProjects, 
  title = "Where Ideas Become Products",
  subtitle = "See how we turn ideas into high-performance digital products.",
  badge = "Our Projects",
  showBadge = true,
  showCta = true,
  columns = 2
}) => {
  return (
    <section className="our-projects-section" id="our-projects">
      <div className="op-header">
        {showBadge && (
          <div className="op-section-badge">
            {badge}
          </div>
        )}
        <h2 className="op-title">
          {title}
        </h2>
        <p className="op-subtitle">
          {subtitle}
        </p>
      </div>

      <div className={`op-grid cols-${columns}`}>
        {projects.map((project, index) => (
          <div key={index} className="op-card">
            <div className="op-img-wrapper">
              <span className="op-tag">{project.tag}</span>
              <img src={project.image} alt={project.title} />
            </div>
            <div className="op-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {showCta && (
        <div className="op-cta">
          <button className="op-button">
             Start Your Project
          </button>
        </div>
      )}
    </section>
  );
};

export default OurProjects;
