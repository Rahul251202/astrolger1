import React from "react";
import { useNavigate } from "react-router-dom";
import horoscopeImage from "../assets/horscope.webp";
import poojaImage from "../assets/pooja photo.jpg";
import gemstoneImage from "../assets/gemstone.jpg";
import vedicImage from "../assets/Astro-img.jpg";

const services = [
  {
    title: "Horoscope & Kundli Reading",
    image: horoscopeImage,
    description: "Detailed birth chart and horoscope readings tailored for you.",
    action: "scroll", // custom flag for scrolling
    targetId: "kundli",
  },
  {
    title: "Personalized Pooja Rituals",
    image: poojaImage,
    description: "Customized rituals to enhance spiritual well-being.",
    link: "/services/pooja",
  },
  {
    title: "Gemstone Recommendations",
    image: gemstoneImage,
    description: "Astrologically suitable gemstones for your life path.",
    link: "/services/gemstones",
  },
  {
    title: "Vedic Astrology Reports",
    image: vedicImage,
    description: "In-depth reports based on ancient Vedic astrology.",
    link: "/services/vedic-reports",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.action === "scroll" && item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item.link) {
      navigate(item.link);
    }
  };

  return (
    <section className="py-20 px-6 text-yellow-800 bg-[#fff8f0]">
      <h2 className="font-cursive text-4xl mb-14 drop-shadow-lg text-center">
        Our Services
      </h2>

      <div className="grid gap-10 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {services.map((item, i) => (
          <div
            key={item.title}
            onClick={() => handleClick(item)}
            className="cursor-pointer"
          >
            <div
              className="bg-red-300 rounded-2xl p-8 shadow-md transition-transform duration-300 transform hover:scale-105 text-center"
              style={{
                animation: `fadeSlideUp 0.6s ease-out ${i * 0.15}s both`,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain mx-auto mb-5"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
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
