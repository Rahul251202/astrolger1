import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY <90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-[#e7e294]" : "bg-[#e2cfba]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className={`text-2xl font-cursive text-indigo-900 drop-shadow-md transition-colors duration-300 ${
            scrolled ? "text-indigo-800" : "text-indigo-900"
          }`}
        >
          Shri Astrology
        </div>

        {/* Right side: Services + Button */}
        <div className="flex items-center space-x-6">
          <a
            href="#home"
            className="text-indigo-800 hover:text-yellow-600 transition font-medium"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-indigo-800 hover:text-yellow-600 transition font-medium"
          >
            Services
          </a>
          <a
            href="#About"
            className="text-indigo-800 hover:text-yellow-600 transition font-medium"
          >
            About
          </a>
          <button
            className={`bg-yellow-400 hover:bg-yellow-500 text-indigo-900 px-4 py-2 rounded-full shadow hover:shadow-[0_0_6px_rgba(255,111,60,0.5)] transition ${
              scrolled
                ? "shadow-lg shadow-yellow-400/70"
                : "shadow hover:shadow-[0_0_6px_rgba(255,111,60,0.5)]"
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
