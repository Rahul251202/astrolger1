import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import logo from "../assets/logog astro.png";
import ContactForm from "./Contact";

export default function HeroSection() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleBookPoojaClick = () => {
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  const handleTalkToAstrologer = () => {
    // Put the astrologer's phone number here
    window.location.href = "tel:+917503183147";
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative py-24 px-6 text-cream text-center"
    >
     <div
  aria-label="Glowing Mandala"
  className="relative mx-auto mb-8 w-36 h-36 rounded-full shadow-[0_0_20px_5px_rgba(212,175,55,0.8)] bg-gradient-radial from-yellow-400/70 to-transparent overflow-hidden flex items-center justify-center"
>
  <img
    src={logo} // Replace with the actual image path
    alt="logo"
    className="max-w-full max-h-full object-contain rounded-full"
  />
</div>


      <motion.h1
        className="text-4xl sm:text-5xl font-cursive text-cyan-950 drop-shadow-lg mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <TypeAnimation
          sequence={["Discover Your Cosmic Path", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl max-w-lg mx-auto mb-10 text-indigo-900 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <TypeAnimation
          sequence={[
            "Personalized Astrology, Rituals & Pooja Services to Enlighten Your Life",
            3000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-indigo-200 hover:bg-yellow-400 text-indigo-900 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,111,60,0.9)] transform transition duration-300"
          onClick={() => alert("Get Your Horoscope clicked")}
        >
          Get Your Horoscope
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-indigo-200 hover:bg-yellow-400 text-indigo-900 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,111,60,0.9)] transform transition duration-300"
          onClick={handleBookPoojaClick}
        >
          Book a Pooja
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-indigo-200 hover:bg-yellow-400 text-indigo-900 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,111,60,0.9)] transform transition duration-300"
          onClick={handleTalkToAstrologer}
        >
          Talk to Astrologer
        </motion.button>
      </motion.div>

      {/* Render Contact Form Modal without overlay background */}
      {showContactForm && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 p-4"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 mx-4">
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 px-4 py-2 bg-indigo-200 hover:bg-indigo-300 rounded-full text-indigo-900 font-semibold focus:outline-none"
              aria-label="Close contact form"
            >
              Close
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </motion.section>
  );
}
