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

// Pages
import GemstonePage from "./Pages/GemstonePage";
import Contact from "./Components/Contact"; // ✅ Now included
// import PoojaPage from "./Pages/PoojaPage";
// import HoroscopePage from "./Pages/HoroscopePage"; // ✅ Now included
// import VedicReportPage from "./Pages/VedicReportPage";

function HomePage() {
  return (
    <div className="font-serif text-indigo-900 bg-gradient-to-b from-white via-creamgold to-indigo-300 min-h-screen shadow-lg">
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

      <section id="about">
        <AboutSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/gemstones" element={<GemstonePage />} />
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/services/pooja" element={<PoojaPage />} />
        <Route path="/services/horoscope" element={<HoroscopePage />} />
        <Route path="/services/vedic-reports" element={<VedicReportPage />} /> */}
      </Routes>
    </Router>
  );
}
