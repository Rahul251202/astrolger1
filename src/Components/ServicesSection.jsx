import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { send } from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

import horoscopeImage from "../assets/horscope.webp";
import poojaImage from "../assets/pooja photo.jpg";
import gemstoneImage from "../assets/gemstone.jpg";
import vedicImage from "../assets/Astro-img.jpg";

const services = [
  {
    title: "Horoscope & Kundli Reading",
    image: horoscopeImage,
    description: "Detailed birth chart and horoscope readings tailored for you.",
    action: "scroll",
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
    action: "form",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = (item) => {
    if (item.action === "scroll" && item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (item.action === "form") {
      setShowForm(true);
    } else if (item.link) {
      navigate(item.link);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formRef.current.from_name.value,
        message: formRef.current.message.value,
        from_email: formRef.current.from_email.value,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
        setShowForm(false);
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const redirectToWhatsApp = () => {
    const name = formRef.current.from_name.value;
    const email = formRef.current.from_email.value;
    const message = formRef.current.message.value;

    if (!name || !email || !message) {
      toast.error("Please fill all fields before sending WhatsApp message!");
      return;
    }

    const text = `Hi, my name is ${name}. My email is ${email}. Here's my message:\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/935477119?text=${encodedText}`, "_blank"); // Replace number if needed
  };

  return (
    <section className="py-20 px-6 text-yellow-800 bg-[#fff8f0] relative">
      <Toaster position="top-right" />

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

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <h2 className="text-2xl font-bold mb-4 text-indigo-900 text-center">
                Contact Us
              </h2>
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="p-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="p-2 border border-gray-300 rounded-lg"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="p-2 border border-gray-300 rounded-lg"
                />
                <div className="flex items-center justify-between mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-full hover:bg-yellow-500 font-semibold transition"
                  >
                    {loading ? "Sending..." : "Send via Email"}
                  </button>
                  <button
                    type="button"
                    onClick={redirectToWhatsApp}
                    className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 font-semibold transition"
                  >
                    WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      )}

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
