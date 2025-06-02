import React from "react";
import './App.css';

import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import ServicesSection from './Components/ServicesSection';
import TestimonialsSection from './Components/Testimonal';
import Footer from './Components/Footer';
import AboutSection from './Components/About';
import KundliForm from './Components/KundliForm';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
