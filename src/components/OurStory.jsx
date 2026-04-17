import React from 'react';
import './OurStory.css';
import teamImg from '../assets/team_collaboration.webp';

const OurStory = () => {
  return (
    <section className="our-story-section">
      <div className="os-container">
        <div className="os-text-side">
          <h2 className="os-title">Our Story</h2>
          <div className="os-description">
            <p>
              At Being Digitals, we are driven by a team of experienced professionals 
              who are passionate about delivering excellence in the digital space. 
              Our agency is built on the foundation of creativity, innovation, and a 
              deep understanding of modern technologies. We continuously explore 
              new ideas and strategies to ensure our clients stay ahead in a fast-changing 
              digital world. With a strong focus on quality and performance, we have 
              successfully delivered a wide range of projects across different industries.
            </p>
            <p>
              Our clients trust us because we prioritize their goals and turn their vision 
              into measurable results. We believe that teamwork is the key to success, which 
              is why we have carefully built a team of experts in every field. From design to 
              development and marketing, each project is handled by skilled individuals who 
              know how to deliver winning outcomes. Our commitment to client satisfaction 
              and continuous improvement is what makes us stand out. At Being Digitals, we 
              don't just work on projects—we build long-term partnerships based on trust, 
              performance, and growth.
            </p>
          </div>
        </div>
        <div className="os-image-side">
          <div className="os-image-wrapper">
            <img src={teamImg} alt="Our Team Collaboration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
