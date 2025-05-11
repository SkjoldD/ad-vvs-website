import React from 'react';
import './ServiceBookingSection.css';

const ServiceBookingSection = () => {
  return (
    <section className="service-section">
      <div className="service-section-inner">
        {/* Left Column */}
        <div className="service-left">
          <div className="service-label">GRAM ENERGI</div>
          <h2 className="service-headline">SERVICEEFTERSYN AF DIN VARMEPUMPE</h2>
          <div className="service-desc">
            <p>
              Som det sikkert er bekendt, skal alle luft til vand varmepumper i.h.t dansk lovgivning have foretaget et årligt serviceeftersyn. Dette gælder ligeledes for de luft til luft varmepumper, klimaanlæg og aircondition, som indeholder mere end 1 kg kølemiddel.
            </p>
            <p><strong>Garanti:</strong> På varmepumper med 5 års garanti fra opsættelsesdagen kræves det, at årligt serviceeftersyn overholdes for at bevare garantien.<br />Dog Pumper med under 1 kg kølemiddel min. hvert 2. år.</p>
            <p>
              Gram Energi tilbyder naturligvis at foretage dette service i.h.t. anlægges specifikationer, altid med godkendte reservedele, og vore teknikere har altid en “up-to-date” uddannelse.
            </p>
            <p>
              Dette giver en sikkerhed for et fortsat fuldt funktionelt anlæg i dagligdagen.<br />
              Varmepumper kræver en omhyggelig vedligeholdelse, herunder komplet kontrolmålinger, tryktest, strømforsyning, og ikke mindst en komplet rengøring p.g.a. bakterier, støv mm.
            </p>
          </div>
          <div className="service-btns">
            <a href="#" className="service-btn-green">Få et gratis tilbud →</a>
            <a href="tel:26333473" className="service-btn-blue">Service tlf. 00 00 00 00</a>
          </div>
        </div>
        {/* Right Column */}
        <div className="service-right">
          <div className="service-card">
            <h3 className="service-form-headline">BESTIL TID TIL SERVICEEFTERSYN AF DIN VARMEPUMPE</h3>
            <p className="service-form-desc">Udfyld nedenstående skema, og vi kontakter jer hurtigt mulig pr. telefon for aftale af dato for serviceeftersyn.</p>
            <form className="service-form">
              <div className="service-form-row service-form-radio">
                <label><input type="radio" name="kundetype" defaultChecked /> Eksisterende kunde</label>
                <label><input type="radio" name="kundetype" /> Ny kunde</label>
              </div>
              <div className="service-form-row">
                <select>
                  <option>Er der mere end én varmepumpe?</option>
                  <option>Ja</option>
                  <option>Nej</option>
                </select>
              </div>
              <div className="service-form-row">
                <input type="text" placeholder="Fulde navn" />
              </div>
              <div className="service-form-row service-form-row-split">
                <input type="text" placeholder="Postnr. / by" />
                <input type="text" placeholder="Adresse" />
              </div>
              <div className="service-form-row service-form-row-split">
                <input type="text" placeholder="Telefon" />
                <input type="email" placeholder="E-mail" />
              </div>
              <div className="service-form-row">
                <textarea placeholder="Meddelelse" rows={3}></textarea>
              </div>
              <div className="service-form-row">
                <button type="submit" className="service-form-btn">Indsend forespørgelse</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBookingSection;
