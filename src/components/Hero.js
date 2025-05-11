import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <video className="hero-bg-video" autoPlay loop muted playsInline>
        <source src={require('../assets/backgroundvid01.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        {/* Left Column */}
        <div className="hero-left">
          <div className="hero-stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star-text">5 STJERNER PÅ GOOGLE</span>
          </div>
          <h1 className="hero-headline">LEVERING &<br />MONTERING AF<br />VARMEPUMPER</h1>
          <ul className="hero-checklist">
            <li><span className="check">✔</span> Installerer på hele Sjælland</li>
            <li><span className="check">✔</span> En af de største Pro Partnere</li>
            <li><span className="check">✔</span> 5 års garanti</li>
            <li><span className="check">✔</span> Autoriserede fagfolk</li>
          </ul>
        </div>
        {/* Right Column */}
        <div className="hero-right">
          <p className="hero-desc">
            En varmepumpe kan spare dig op til 70% på varmeregningen. Hos Gram Energi specialiserer vi os i at levere og montere varmepumper og aircondition fra mærkerne Panasonic og Mitsubishi til vores kunder over hele Sjælland.
          </p>
          <a href="#" className="hero-btn hero-btn-green">Få et gratis tilbud →</a>
          <a href="tel:51236205" className="hero-btn hero-btn-blue">📞 Tlf. 00 00 00 00</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
