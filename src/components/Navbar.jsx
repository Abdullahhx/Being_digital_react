import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          <div className="logo-mark">
            <BrandLogo className="logo-img" />
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-text-top">Being</span>
            <span className="logo-text-bottom text-accent">Digitals</span>
          </div>
        </Link>
      </div>

      <nav className="navbar-center glass-pill-nav">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/our-team">Our Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="navbar-right">
        <Link to="/contact" className="pill-button primary nav-cta">
          Start Your Project
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
