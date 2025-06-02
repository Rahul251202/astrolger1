import React from "react";
import horoscopeImage from "../assets/horscope.webp";
import poojaImage from "../assets/pooja photo.jpg";
import gemstoneImage from "../assets/gemstone.jpg";
import vedicImage from "../assets/Astro-img.jpg"; // optional

const services = [
  {
    title: "Horoscope & Kundli Reading",
    image: horoscopeImage,
    description: "Detailed birth chart and horoscope readings tailored for you.",
  },
  {
    title: "Personalized Pooja Rituals",
    image: poojaImage,
    description: "Customized rituals to enhance spiritual well-being.",
  },
  {
    title: "Gemstone Recommendations",
    image: gemstoneImage,
    description: "Astrologically suitable gemstones for your life path.",
  },
  {
    title: "Vedic Astrology Reports",
    image: vedicImage,
    description: "In-depth reports based on ancient Vedic astrology.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 text-indigo-900 bg-[#fff8f0]">
      <h2 className="font-cursive text-4xl mb-14 drop-shadow-lg text-center">
        Our Services
      </h2>

      <div className="grid gap-10 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {services.map(({ image, title, description }, i) => {
          const card = (
            <div
              className="bg-indigo-100 rounded-2xl p-8 shadow-md hover:shadow-yellow-400/60 transition-transform duration-300 transform hover:scale-105 cursor-pointer text-center"
              style={{
                animation: `fadeSlideUp 0.6s ease-out ${i * 0.15}s both`,
              }}
            >
              <img
                src={image}
                alt={title}
                className="w-20 h-20 object-contain mx-auto mb-5"
              />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm leading-relaxed">{description}</p>
            </div>
          );

          return i === 0 ? (
            <a href="#kundli" key={title} className="block">
              {card}
            </a>
          ) : (
            <div key={title}>{card}</div>
          );
        })}
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
