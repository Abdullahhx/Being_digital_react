import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactFormBlock from '../components/ContactFormBlock';

const ContactPage = () => {
  return (
    <div className="page-content">
      <ContactHero />
      <ContactInfo />
      <ContactFormBlock />
    </div>
  );
};

export default ContactPage;
