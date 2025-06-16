import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import logo from "../assets/logostro.jpg";
import ContactForm from "./Contact";
import bgImage from "../assets/bg-vikr.jpg";

export default function HeroSection() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [bgStyle, setBgStyle] = useState({});

  const handleBookPoojaClick = () => setShowContactForm(true);
  const handleCloseForm = () => setShowContactForm(false);
  const handleTalkToAstrologer = () => {
    window.location.href = "tel:+917503183147";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setBgStyle({
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        });
      } else {
        setBgStyle({});
      }
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative">
      <div
        className="
          bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100
          py-24 px-6 text-center
        "
        style={bgStyle}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-white/10 to-black/30 z-0"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 text-cream"
        >
          {/* Logo */}
          <div
            aria-label="Glowing Mandala"
            className="relative mx-auto mb-8 w-36 h-36 rounded-[40px] bg-gradient-radial to-transparent overflow-hidden flex items-center justify-center"
          >
            <img
              src={logo}
              alt="logo"
              className="max-w-full max-h-full object-contain rounded-[40px]"
            />
          </div>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl font-cursive text-black md:text-[#f3f3f3] drop-shadow-lg mb-4"
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

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl max-w-lg mx-auto mb-10 text-black md:text-[#f3f3f3] leading-relaxed"
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

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* Horoscope Button */}
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

            {/* Book Pooja */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#3c2b2b] hover:bg-yellow-400 text-[#f3f3f3] font-semibold py-3 px-6 rounded-full shadow-lg"
              onClick={handleBookPoojaClick}
            >
              Book a Pooja
            </motion.button>

            {/* Call Astrologer */}
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

          {/* Contact Form Modal */}
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
      </div>
    </section>
  );
}
