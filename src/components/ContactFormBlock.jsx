import React from 'react';
import './ContactFormBlock.css';
import contactPersonImg from '../assets/contact_person.webp';

const ContactFormBlock = () => {
  return (
    <section className="contact-form-section">
      <div className="cf-container">
        {/* Left - Portrait Image */}
        <div className="cf-image-side">
          <img src={contactPersonImg} alt="Contact Us" className="cf-image" />
        </div>

        {/* Right - Form */}
        <div className="cf-form-side">
          <h2 className="cf-title">Ask a Question</h2>
          <p className="cf-description">
            If you have any questions, you can contact us. Please, fill out the form below.
          </p>

          <form className="cf-form" onSubmit={(e) => e.preventDefault()}>
            <div className="cf-row">
              <div className="cf-input-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="cf-input-group">
                <input type="email" placeholder="Email" required />
              </div>
            </div>

            <div className="cf-input-group">
              <textarea placeholder="Message" rows="6" required></textarea>
            </div>

            <button type="submit" className="cf-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormBlock;
