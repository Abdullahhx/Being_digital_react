import React from 'react';
import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import OurProjects from '../components/OurProjects';
import Testimonials from '../components/Testimonials';

import aboutProject1Img from '../assets/about_project_1.webp';
import aboutProject2Img from '../assets/about_project_2.webp';
import aboutProject3Img from '../assets/about_project_3.webp';

const aboutProjectsData = [
  {
    tag: 'AI LEARNING',
    title: 'EduMind – Personalized Learning Hub',
    description: 'EduMind leverages AI to create tailored learning paths for students, offering real-time progress tracking.',
    image: aboutProject1Img
  },
  {
    tag: 'TECHNOLOGY',
    title: 'NovaHire – AI Recruitment Platform',
    description: 'Automated candidate screening, matching, and outreach using machine learning.',
    image: aboutProject2Img
  },
  {
    tag: 'RETAIL',
    title: 'RetailSense – Smart Store Analytics',
    description: 'AI-powered shopper insights and predictive inventory management for global retail chains.',
    image: aboutProject3Img
  }
];

const aboutTestimonialsData = [
  {
    type: 'text',
    rating: 5,
    text: "Softy Solutions took our rough concept and turned it into a polished SaaS product in just 8 weeks. The speed and quality blew us away!",
    author: "Alex Carter, Founder of Taskify"
  },
  {
    type: 'text',
    rating: 5,
    text: "Softy Solutions took our rough concept and turned it into a polished SaaS product in just 8 weeks. The speed and quality blew us away!",
    author: "Alex Carter, Founder of Taskify"
  },
  {
    type: 'text',
    rating: 5,
    text: "Softy Solutions took our rough concept and turned it into a polished SaaS product in just 8 weeks. The speed and quality blew us away!",
    author: "Alex Carter, Founder of Taskify"
  }
];

const AboutPage = () => {
  return (
    <div className="page-content">
      <AboutHero />
      <OurStory />
      <OurProjects 
        projects={aboutProjectsData} 
        showBadge={true} 
        badge="Our Projects"
        title="Where Ideas Become Products" 
        subtitle="See how we turn ideas into high-performance digital products."
        showCta={false}
        columns={3}
      />
      <Testimonials 
        testimonialsData={aboutTestimonialsData}
        title="Our Clients Reviews"
        showBadge={false}
      />
    </div>
  );
};

export default AboutPage;
