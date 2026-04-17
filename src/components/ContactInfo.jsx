import React from 'react';
import './ContactInfo.css';
import mapImg from '../assets/contact_map.webp';

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="ci-container">
        {/* Left side */}
        <div className="ci-left">
          <h2 className="ci-title">Contact<br/>Information</h2>
          <p className="ci-description">
            We're here to walk alongside you on your wellness journey. Whether you have questions about our services, want to book an appointment, or simply need guidance, our team is ready to help.
          </p>
          <div className="ci-details-row">
            <div className="ci-detail-block">
              <h3 className="ci-detail-label">Address:</h3>
              <p className="ci-detail-text">
                14960 Florence Trail<br/>
                Apple Valley, MN 55124
              </p>
            </div>
            <div className="ci-detail-block">
              <h3 className="ci-detail-label">Open:</h3>
              <p className="ci-detail-text">
                Monday – Sunday, 9am<br/>– 7pm EST
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Map */}
        <div className="ci-right">
          <div className="ci-map-wrapper">
            <img src={mapImg} alt="Location Map" className="ci-map-img" />
            <div className="ci-map-caption">
              This is a placeholder map for demonstration purposes.<br/>
              To display a real Google Map, use the Google Map Shortcode
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
