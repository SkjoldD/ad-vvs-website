import React from 'react';
import './ServiceInfoOfferSection.css';

const ServiceInfoOfferSection = () => {
  return (
    <section className="info-offer-section">
      <div className="info-offer-inner">
        {/* Left Column */}
        <div className="info-offer-left">
          <div className="info-offer-label">SPECIALISTER I VARMEPUMPER</div>
          <h2 className="info-offer-headline">SERVICEEFTERSYN – SÅDAN HJÆLPER VI DIG</h2>
          <div className="info-offer-desc">
            <p>Ved at vælge Gram Energi for dit varmepumpeservice sikrer du ikke blot din investering, men også hjemmets komfort og klima på lang sigt. Det giver ligeledes ro i maven at din varmepumpe altid fungerer optimalt, når du skal bruge den.</p>
            <p>Ganske simpelt skriver du til os her på siden, og så følger vi op med nærmere informationer og afklaring af specifik dato for dit serviceeftersyn.<br />Ligeledes kan du også skrive i formularen her med direkte spørgsmål eller kommentarer til dine behov.</p>
            <p>Sikkerheden bør altid være i top med regelmæssige serviceeftersyn, da vores eksperter sikrer, at alle komponenter i din varmepumpe fungerer korrekt og sikkert.<br />Som nævnt hjælper regelmæssig vedligeholdelse med at opretholde din varmepumpes garantistatus, så du kan drage fuldt nytte af den i tilfælde af behov.</p>
            <p>Kontakt os i dag for at planlægge dit næste serviceeftersyn og oplev den forskel, et velfungerende varmesystem kan gøre.</p>
          </div>
          <a href="tel:26333473" className="info-offer-phone-btn">
            <span className="info-offer-phone-icon" aria-hidden="true">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.71 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.99.34 2.01.58 3.06.71A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
            Service tlf. 26 33 34 73
          </a>
        </div>
        {/* Right Column */}
        <div className="info-offer-right">
          <div className="info-offer-card">
            <h3 className="info-offer-form-headline">FÅ ET GRATIS TILBUD?</h3>
            <p className="info-offer-form-desc">Kontakt os og få et gratis og uforpligtende tilbud. Vi vender tilbage hurtigst muligt.</p>
            <form className="info-offer-form">
              <input type="text" placeholder="Navn" />
              <div className="info-offer-form-row-split">
                <input type="text" placeholder="Telefon" />
                <input type="email" placeholder="E-mail" />
              </div>
              <input type="text" placeholder="Postnr. / by" />
              <textarea placeholder="Beskriv kort opgaven" rows={3}></textarea>
              <button type="submit" className="info-offer-form-btn">Få et gratis tilbud</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfoOfferSection;
