import React from 'react';
import './Testimonials.css';

import testimonial1Img from '../assets/testimonial_1.png';
import testimonial2Img from '../assets/testimonial_2.png';

const defaultTestimonials = [
  {
    type: 'text',
    rating: 5,
    text: "Softy Solutions took our rough concept and turned it into a polished SaaS product in just 8 weeks. The speed and quality blew us away!",
    author: "Alex Carter, Founder of Taskify"
  },
  {
    type: 'text',
    rating: 5,
    text: "Their AI-powered workflow is a game-changer. We launched ahead of schedule and under budget.",
    author: "Lena Torres, CEO of BrightFinance"
  },
  {
    type: 'image',
    src: testimonial1Img,
    alt: "Testimonial 1"
  },
  {
    type: 'text',
    rating: 5,
    text: "Softy Solutions turned our scattered idea into a polished MVP in under two months. The AI-driven workflow saved us months of trial and error.",
    author: "Sofia Patel, Co-Founder at EcoLink"
  },
  {
    type: 'image',
    src: testimonial2Img,
    alt: "Testimonial 2"
  },
  {
    type: 'text',
    rating: 5,
    text: "They didn't just build our product — they challenged our thinking and made it better. Their AI prototypes nailed 90% of our vision on the first try.",
    author: "Daniel Wright, CEO of FlowPilot"
  }
];

const Testimonials = ({
  testimonialsData = defaultTestimonials,
  title = "Trusted by Innovators Worldwide",
  showBadge = true,
  badgeTitle = "Testimonials"
}) => {
  return (
    <section className="testimonials-section" id="testimonials">
      {/* Background glowing effects to mimic the abstract image styling */}
      <div className="tm-bg-glow glow-left"></div>
      <div className="tm-bg-glow glow-right"></div>
      <div className="tm-bg-glow glow-center"></div>

      <div className="tm-container">
        <div className="tm-header">
          {showBadge && (
            <div className="tm-section-badge">
              {badgeTitle}
            </div>
          )}
          <h2 className="tm-title">
            {title}
          </h2>
        </div>

        <div className="tm-grid">
          {testimonialsData.map((item, index) => {
            if (item.type === 'text') {
              return (
                <div key={index} className="tm-card tm-text-card">
                  <div className="tm-stars">
                    {'★'.repeat(item.rating)}
                  </div>
                  <p className="tm-text">"{item.text}"</p>
                  <div className="tm-author">— {item.author}</div>
                  {/* Subtle bottom-right glow inside the card */}
                  <div className="tm-card-glow"></div>
                </div>
              );
            } else {
              return (
                <div key={index} className="tm-card tm-image-card">
                  <img src={item.src} alt={item.alt} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
