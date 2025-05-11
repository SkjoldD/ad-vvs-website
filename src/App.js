import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceBookingSection from './components/ServiceBookingSection';
import ServiceInfoOfferSection from './components/ServiceInfoOfferSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ServiceBookingSection />
      <ServiceInfoOfferSection />
      <Footer />
    </div>
  );
}

export default App;
