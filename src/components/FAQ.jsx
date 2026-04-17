import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "How long does a typical project take?",
    answer: "Our timelines depend on the complexity of the project. A standard MVP launch usually takes 4 to 8 weeks, whereas comprehensive enterprise builds may take 3 to 6 months. We will provide a detailed roadmap during our kickoff."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely! We offer flexible SLA-backed maintenance and support packages to ensure your platform remains secure, fast, and fully updated as your business grows."
  },
  {
    question: "Are your solutions customized or template-based?",
    answer: "Every solution we deliver is fully customized. We pride ourselves on custom software development and unique design systems tailored exactly to your brand and specific functional requirements."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer fixed-price packages for well-defined projects (like our MVP and Growth builds) as well as custom pricing for scaling enterprise systems. Contact us for a precise quote."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-badge">FAQ</div>
          <h2 className="faq-title">Explore Our FAQ to Find the Answers You Need!</h2>
        </div>

        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-bottom-cta">
          <h2 className="bottom-cta-title">Let’s Bring Your Boldest Ideas to Life!</h2>
          <button className="bottom-cta-button">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
