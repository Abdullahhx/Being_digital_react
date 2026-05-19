import React from 'react';
import './OurTeamPage.css';
import ContactFormBlock from '../components/ContactFormBlock';

import teamEthan from '../assets/team_ethan_new.webp';
import teamMaya from '../assets/team_maya_new.webp';
import teamRyan from '../assets/team_ryan_new.webp';
import teamLiam from '../assets/team_liam_new.webp';
import teamGroup from '../assets/team_group.png';

const teamMembers = [
  {
    name: 'Ethan White',
    role: 'CEO & Founder',
    image: teamEthan
  },
  {
    name: 'Maya Brooks',
    role: 'Design Lead',
    image: teamMaya
  },
  {
    name: 'Ryan Chen',
    role: 'Technical Lead',
    image: teamRyan
  },
  {
    name: 'Liam Carter',
    role: 'Marketing Lead',
    image: teamLiam
  }
];

const OurTeamPage = () => {
  return (
    <div className="page-content our-team-page">
      {/* Team Hero */}
      <section className="team-hero">
        <div className="team-hero-content">
          <div className="team-badge">Our Team</div>
          <h1 className="team-title">Meet the minds behind Being Digitals</h1>
          <p className="team-subtitle">
            A diverse team of innovators, designers, and developers dedicated to 
            transforming your digital vision into reality.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-grid-section">
        <div className="team-grid-container">
          <div className="team-members-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-image-wrapper">
                  <img src={member.image} alt={member.name} className="member-portrait" />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section - Split Layout */}
      <section className="team-connect-section">
        <div className="connect-container">
          <div className="connect-visual">
            <img src={teamGroup} alt="Being Digitals Team" className="connect-team-img" />
            <div className="connect-visual-overlay"></div>
          </div>
          <div className="connect-form-area">
            <div className="connect-header">
              <h2 className="connect-title">Talk to Our Team</h2>
              <p className="connect-subtitle">Have a vision? Let’s talk about how we can help your brand grow through technology and design.</p>
            </div>
            <ContactFormBlock />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;
