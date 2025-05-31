import React from "react";
import { motion } from "framer-motion";

import pooja1 from "../assets/Astro-img.jpg";
import pooja2 from "../assets/Astro-img.jpg";
import pooja3 from "../assets/Astro-img.jpg";
import pooja4 from "../assets/Astro-img.jpg";

const poojaImages = [pooja1, pooja2, pooja3, pooja4];

function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen px-6 py-12 max-w-7xl mx-auto font-serif"
      id="About"
    >
      <h1 className="text-4xl font-bold mb-6 drop-shadow-md">About Shri GemStones Astrology</h1>

      <p className="text-lg max-w-3xl mb-10 leading-relaxed">
        Shri GemStones Astrology is dedicated to bringing you the ancient wisdom of gemstones and astrology.
        Our expert team conducts authentic poojas and rituals that help you align with your cosmic energies.
      </p>

      <h2 className="text-2xl font-semibold mb-12 text-center">Our Pooja Rituals Timeline</h2>

      <div className="relative border-l-4 border-indigo-600 pl-6 space-y-12 before:absolute before:top-0 before:left-[6px] before:h-full before:w-1 before:bg-indigo-300 before:animate-pulse">
        {poojaImages.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-white hover:shadow-xl transition-shadow duration-300 shadow-md rounded-lg p-6 group md:ml-6"
          >
            {/* Timeline dot */}
            <div className="absolute -left-8 top-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white group-hover:scale-125 transition-transform"></div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={src}
                alt={`Pooja ${idx + 1}`}
                className="w-full md:w-48 h-48 object-cover rounded-md transition-transform duration-300 group-hover:rotate-1 group-hover:scale-105"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-1">Pooja Ceremony {idx + 1}</h3>
                <span className="text-xs text-gray-500 italic">Ceremony #{idx + 1} • Spiritual Experience</span>
                <p className="text-sm mt-2">
                  Experience divine blessings through our specially curated rituals that bring harmony, prosperity, and peace to your life.
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default AboutSection;
