import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // for hamburger and close icons
import logo from "../assets/logostro.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY < 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactForm = () => {
    // Logic to handle contact form submission

  }
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

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
          <img
            src={logo}
            alt="Shri Astrology Logo"
            className="w-10 h-10 object-contain rounded-3xl"
          />
          <p className="text-lg md:xl">AstroVikram</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-base items-center space-x-6">
          <a href="#home" className="text-black hover:text-yellow-600 transition font-normal">Home</a>
          <a href="#services" className="text-black hover:text-yellow-600 transition font-normal">Services</a>
          <a href="#About" className="text-black hover:text-yellow-600 transition font-normal">About</a>
          <a href="#contact" className="text-black hover:text-yellow-600 transition font-normal">Contact</a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-yellow-800">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#fff8f0] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
          <div className="text-xl font-cursive text-yellow-800">AstroVikram</div>
          <button onClick={closeMenu} className="text-2xl text-yellow-800">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 mt-6 px-6 text-black">
          <a href="#home" onClick={closeMenu} className="hover:text-yellow-600">Home</a>
          <a href="#services" onClick={closeMenu} className="hover:text-yellow-600">Services</a>
          <a href="#About" onClick={closeMenu} className="hover:text-yellow-600">About</a>
          <a href="#contact" onClick={handleContactForm} className="hover:text-yellow-600">Contact</a>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
