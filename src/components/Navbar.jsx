import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-container">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }} onClick={closeMenu}>
          <div className="logo-mark">
            <BrandLogo className="logo-img" />
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-text-top">Being</span>
            <span className="logo-text-bottom text-accent">Digitals</span>
          </div>
        </Link>
      </div>

      <nav className="navbar-center glass-pill-nav desktop-only">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/our-team">Our Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="navbar-right desktop-only">
        <Link to="/contact" className="pill-button primary nav-cta">
          Start Your Project
        </Link>
      </div>

      <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li>
          <li><Link to="/our-team" onClick={closeMenu}>Our Team</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li className="mt-4">
            <Link to="/contact" className="pill-button primary" onClick={closeMenu}>
              Start Your Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
