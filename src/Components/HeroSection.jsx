import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import logo from "../assets/logog astro.png";
import ContactForm from "./Contact";
import bgImage from "../assets/bg-vikr.jpg";

export default function HeroSection() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleBookPoojaClick = () => setShowContactForm(true);
  const handleCloseForm = () => setShowContactForm(false);
  const handleTalkToAstrologer = () => {
    window.location.href = "tel:+917503183147";
  };

  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-24 px-6 text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Gradient overlay to increase text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-white/10 to-black/30 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-cream"
      >
        {/* Logo inside glowing circle */}
        <div
          aria-label="Glowing Mandala"
          className="relative mx-auto mb-8 w-36 h-36 rounded-full shadow-[0_0_20px_5px_rgba(212,175,55,0.8)] bg-gradient-radial from-yellow-400/70 to-transparent overflow-hidden flex items-center justify-center"
        >
          <img
            src={logo}
            alt="logo"
            className="max-w-full max-h-full object-contain rounded-full"
          />
        </div>

        <motion.h1
          className="text-4xl sm:text-5xl font-cursive text-[#f3f3f3] drop-shadow-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <TypeAnimation
            sequence={["Discover Your Cosmic Path", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={false}
          />
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl max-w-lg mx-auto mb-10 text-[#f3f3f3] leading-relaxed"
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
            cursor={false}
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
  className="bg-[#3c2b2b] hover:bg-yellow-400 text-[#f3f3f3] font-semibold py-3 px-6 rounded-full shadow-lg"
  onClick={() => {
    const formElement = document.getElementById("kundli");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Get Your Horoscope
</motion.button>


          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#3c2b2b] hover:bg-yellow-400 text-[#f3f3f3] font-semibold py-3 px-6 rounded-full shadow-lg"
            onClick={handleBookPoojaClick}
          >
            Book a Pooja
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#3c2b2b] hover:bg-yellow-400 text-[#f3f3f3] font-semibold py-3 px-6 rounded-full shadow-lg"
            onClick={handleTalkToAstrologer}
          >
            Talk to Astrologer
          </motion.button>
        </motion.div>

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
              >
                Close
              </button>
              <ContactForm />
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
