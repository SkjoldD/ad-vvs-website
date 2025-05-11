import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Column 1: Gram Energi */}
        <div className="footer-col">
          <div className="footer-title">GRAM ENERGI</div>
          <div className="footer-item">
            <span className="footer-icon">
              {/* Location icon */}
              <svg width="18" height="18" fill="none" stroke="#7dac20" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z"></path><circle cx="12" cy="11" r="2.5"></circle></svg>
            </span>
            Vores adresse<br />Brødlandsvej 67, 3310 Ølsted
          </div>
          <div className="footer-item">
            <span className="footer-icon">
              {/* Phone icon */}
              <svg width="18" height="18" fill="none" stroke="#7dac20" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.71 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.99.34 2.01.58 3.06.71A2 2 0 0 1 22 16.92z"></path></svg>
            </span>
            Ring til os<br />Tlf. +00 00 00 00
          </div>
          <div className="footer-item">
            <span className="footer-icon">
              {/* Mail icon */}
              <svg width="18" height="18" fill="none" stroke="#7dac20" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
            </span>
            Skriv til os<br />info@gramenergi.dk
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook" className="footer-fb">
              {/* Facebook icon */}
              <svg width="22" height="22" fill="#7dac20" viewBox="0 0 24 24"><path d="M17 2.1A1.9 1.9 0 0 1 18.9 4v16a1.9 1.9 0 0 1-1.9 1.9H6A1.9 1.9 0 0 1 4.1 20V4A1.9 1.9 0 0 1 6 2.1h11zm-1.3 6.2h-1.6c-.2 0-.3.1-.3.3v1.1h1.9l-.2 1.8h-1.7v5.3h-2.1v-5.3H9.3v-1.8h1.1V8.7c0-1.2.7-2.1 2.2-2.1h1.1v1.7z"/></svg>
            </a>
          </div>
        </div>
        {/* Column 2: Produkter */}
        <div className="footer-col">
          <div className="footer-title">PRODUKTER</div>
          <ul className="footer-list">
            <li><span className="footer-arrow">→</span> Panasonic varmepumper</li>
            <li><span className="footer-arrow">→</span> Varmepumper luft til luft</li>
            <li><span className="footer-arrow">→</span> Varmepumper luft til vand</li>
            <li><span className="footer-arrow">→</span> Aircondition-klimaanlæg</li>
            <li><span className="footer-arrow">→</span> Panasonic Free multi bolig</li>
            <li><span className="footer-arrow">→</span> Loft kassetter</li>
            <li><span className="footer-arrow">→</span> Serverrums køling</li>
            <li><span className="footer-arrow">→</span> Solceller</li>
            <li><span className="footer-arrow">→</span> Tilbehør</li>
          </ul>
        </div>
        {/* Column 3: Læs Mere */}
        <div className="footer-col">
          <div className="footer-title">LÆS MERE</div>
          <ul className="footer-list">
            <li><span className="footer-arrow">→</span> Serviceeftersyn</li>
            <li><span className="footer-arrow">→</span> Standardmontage af luft/luft</li>
            <li><span className="footer-arrow">→</span> Standardmontering af luft/vand</li>
            <li><span className="footer-arrow">→</span> Erhverv</li>
            <li><span className="footer-arrow">→</span> Ofte stillede spørgsmål</li>
            <li><span className="footer-arrow">→</span> Om os</li>
            <li><span className="footer-arrow">→</span> Kontakt</li>
          </ul>
        </div>
        {/* Column 4: Certifikater */}
        <div className="footer-col footer-cert">
          <div className="footer-title">CERTIFIKATER</div>
          <div className="footer-cert-logos">
            <img src="/cert-ve.png" alt="VE Godkendt" className="footer-cert-logo" />
            <img src="/cert-kmo.png" alt="KMO" className="footer-cert-logo" />
          </div>
          <div className="footer-cert-logos" style={{marginTop: '8px'}}>
            <img src="/cert-panasonic.png" alt="Panasonic" className="footer-cert-logo" />
            <img src="/cert-propartners.png" alt="Pro Partners" className="footer-cert-logo" />
          </div>
        </div>
      </div>
      <div className="footer-bottom-line"></div>
    </footer>
  );
};

export default Footer;
