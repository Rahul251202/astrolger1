import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

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
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12c0 2.29.894 4.373 2.347 5.905l-1.01 3.57 3.57-1.01A9.728 9.728 0 0012 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12c0 .621.126 1.215.354 1.758a.75.75 0 01-.078.753l-.684 1.14a.375.375 0 00.413.55c1.482-.27 2.865-.953 3.953-2.04s1.771-2.47 2.04-3.953a.375.375 0 00-.55-.413l-1.14.684a.75.75 0 01-.753.078A3.369 3.369 0 0012 8.625a3.375 3.375 0 00-3.375 3.375z"
          />
        </svg>
        <span className="hidden sm:inline">Chat</span>
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
