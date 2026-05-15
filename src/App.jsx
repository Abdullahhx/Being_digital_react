import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import OurTeamPage from './pages/OurTeamPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const startObserving = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        // Reset active class if needed or just observe
        observer.observe(el);
      });
    };

    // Slight delay to ensure React has rendered the DOM
    const timer = setTimeout(startObserving, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location]);

  return (
    <div className="app-container">
      {/* Background glow effects */}
      <div className="bg-glow top-glow"></div>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
