import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import aiLogo from '../assets/ai-logo.png';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 40) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${hidden ? ' navbar--hidden' : ''}`}>
      {/* Left: Logo + Brand */}
      <div className="navbar-left">
        <img src={aiLogo} alt="AD Energi AI Logo" className="navbar-logo-img" />
        <div className="navbar-brand-text">
          <div className="navbar-brand-main">AD ENERGI</div>
          <div className="navbar-brand-sub">Varmepumper · Aircondition · Klimaanlæg</div>
        </div>
      </div>
      {/* Center: Menu with icons */}
      <ul className="navbar-menu">
        <li><a href="#"><span className="navbar-icon">♨️</span> Varmepumper</a></li>
        <li><a href="#"><span className="navbar-icon">❄️</span> AC klimaanlæg</a></li>
        <li><a href="#"><span className="navbar-icon">☀️</span> Solceller</a></li>
        <li><a href="#"><span className="navbar-icon">🔋</span> Emaldo Batteri</a></li>
        <li><a href="#"><span className="navbar-icon">🛠️</span> Serviceeftersyn</a></li>
      </ul>
      {/* Right: Phone button */}
      <div className="navbar-right">
        <a href="tel:51236205" className="navbar-phone-btn">📞 Tlf. 00 00 00 00</a>
      </div>
    </nav>
  );
}

export default Navbar;
