import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import whatsapplogo from "./assets/whatsapp.png";

// Components
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServicesSection";
import TestimonialsSection from "./Components/Testimonal";
import Footer from "./Components/Footer";
import AboutSection from "./Components/About";
import KundliForm from "./Components/KundliForm";
import Contact from "./Components/Contact";

// Pages
import GemstonePage from "./Pages/GemstonePage";
import PoojaPage from "./Pages/PoojaPage";
import ScrollToTop from "./Components/Scrolltop";

function HomePage() {
  return (
    <div className="font-serif text-indigo-900 bg-gradient-to-b from-white via-creamgold to-indigo-300 min-h-screen shadow-lg relative">
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="kundli">
        <KundliForm />
      </section>

      <section id="About">
        <AboutSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="footer">
        <Footer />
      </section>

      {/* ✅ WhatsApp Floating Button */}
      <a
  href="https://wa.me/7503183147?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-1 z-50  px-4 py-3 flex items-center space-x-2 transition-all duration-300"
>
  <img
    src={whatsapplogo}
    alt="WhatsApp"
    className="w-12 h-12"
  />
  
</a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/gemstones" element={<GemstonePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/pooja" element={<PoojaPage />} />
      </Routes>
    </Router>
  );
}
