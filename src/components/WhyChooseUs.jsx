import React from 'react';
import './WhyChooseUs.css';

import expertTeamImg from '../assets/expert_team.png';
import digitalSolutionsImg from '../assets/digital_solutions.png';
import analyticsDashboardImg from '../assets/analytics_dashboard.png';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section" id="why-choose-us">
      <div className="why-choose-header">
        <div className="section-badge">
          Why Choose Us
        </div>
        <h2 className="why-choose-title">
          Technology + Human Expertise = Your<br />Competitive Advantage
        </h2>
      </div>

      <div className="why-choose-grid">
        {/* Top Left: Expert Team (narrow left) - Image on top */}
        <div className="wcu-card expert-card">
          <div className="wcu-card-bg-glow glow-cyan"></div>
          <div className="wcu-img-wrapper expert-img-wrapper">
            <img src={expertTeamImg} alt="Expert Team" />
          </div>
          <div className="wcu-card-content bottom-content">
            <h3>Expert Team</h3>
            <p>Where human insight meets AI power</p>
          </div>
        </div>

        {/* Top Right: All-in-One Digital Solutions (wide right) - Text on top */}
        <div className="wcu-card solutions-card">
          <div className="wcu-card-bg-glow glow-cyan"></div>
          <div className="wcu-card-content top-content">
            <h3>All-in-One Digital Solutions</h3>
            <p>Website, social media, ads & branding - All in one</p>
          </div>
          <div className="wcu-img-wrapper solutions-img-wrapper">
            <img src={digitalSolutionsImg} alt="All-in-One Digital Solutions" />
          </div>
        </div>

        {/* Bottom Left: Real-Time Business Analytics (wide left) - Text on top */}
        <div className="wcu-card analytics-card">
          <div className="wcu-card-bg-glow glow-cyan"></div>
          <div className="wcu-card-content top-content">
            <h3>Real-Time Business Analytics</h3>
            <p>Track leads, conversions & revenue in real time</p>
          </div>
          <div className="wcu-img-wrapper analytics-img-wrapper">
            <img src={analyticsDashboardImg} alt="Real-Time Business Analytics" />
          </div>
        </div>

        {/* Bottom Right: Stats & Why Choose Us (narrow right) - Stats on top */}
        <div className="wcu-card stats-card">
          <div className="wcu-card-bg-glow glow-cyan"></div>
          <div className="stats-grid">
            <div className="stat-box">
              <h4>50+</h4>
              <p>Active Clients</p>
            </div>
            <div className="stat-box">
              <h4>120+</h4>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-box">
              <h4>98%</h4>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-box">
              <h4>10+</h4>
              <p>Industries Served</p>
            </div>
          </div>
          <div className="wcu-card-content bottom-content">
            <h3>Why Choose Us</h3>
            <p>Real results. Real growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
