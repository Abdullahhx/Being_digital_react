import React from 'react';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import TrustedSlider from '../components/TrustedSlider';
import Services from '../components/Services';
import ExpandedServices from '../components/ExpandedServices';
import WhyChooseUs from '../components/WhyChooseUs';
import OurProjects from '../components/OurProjects';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import PartnerCTA from '../components/PartnerCTA';

const HomePage = () => {
  return (
    <div className="page-content">
      <div className="hero-video-wrapper">
        <Hero />
        <VideoSection />
      </div>
      <TrustedSlider />
      <Services />
      <ExpandedServices />
      <WhyChooseUs />
      <OurProjects />
      <Testimonials />
      <Pricing />
      <PartnerCTA />
    </div>
  );
};

export default HomePage;
