import React, { useState, useEffect } from "react";
import logo from "../assets/logog astro.png";

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
    scrolled ? "bg-[#fff8f0]" : "bg-[#fff8f0]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
  className={`flex items-center gap-3 text-4xl font-cursive drop-shadow-md transition-colors duration-300 ${
    scrolled ? "text-yellow-800" : "text-yellow-800"
  }`}
>
  {/* Logo image */}
  <img
    src={logo}
    alt="Shri Astrology Logo"
    className="w-10 h-10 object-contain rounded-3xl"
  />

  {/* Brand name */}
  AstroVikram
</div>


        {/* Right side: Services + Button */}
        <div className="flex text-2xl items-center space-x-6">
          <a
            href="#home"
            className="text-black hover:text-yellow-600 transition font-normal"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-black hover:text-yellow-600 transition font-normal"
          >
            Services
          </a>
          <a
            href="#About"
            className="text-black hover:text-yellow-600 transition font-normal"
          >
            About
          </a>
          <a
            href="#contact"
            className= "text-black hover:text-yellow-600 transition font-normal"
        
          >
            Contact
            </a>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
