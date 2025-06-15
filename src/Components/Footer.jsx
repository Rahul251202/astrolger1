import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white px-6 py-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 bg-clip-text mb-2">
            AstroVikram
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white/80 mb-3"
          >
            <TypeAnimation
              sequence={[
                "Your trusted guide to the stars. Discover horoscopes, zodiac insights, and gemstone solutions for a better tomorrow.",
                2000,
              ]}
              speed={40}
              wrapper="p"
              repeat={Infinity}
              cursor={false}
            />
          </motion.div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 bg-clip-text mb-2">
            📞 Contact Us
          </h2>
          <ul className="text-white/80 space-y-1">
            <li>
              WhatsApp:{" "}
              <a
                href="tel:+91-7503183147"
                className="text-blue-400 hover:underline"
              >
                +91-7503183147
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:rahul251202@gmail.com"
                className="text-green-400 hover:underline"
              >
                rahul251202@gmail.com
              </a>
            </li>
            <li>
              Location:{" "}
              <a
                href="https://goo.gl/maps/your-location-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                AstroVikram
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 bg-clip-text mb-2">
            🌐 Follow Us
          </h2>
          <div className="flex space-x-4 mt-2">
            {[FaFacebookF, FaInstagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2, boxShadow: "0 0 10px #00f6ff" }}
                className="p-2 rounded-full border border-white/10 hover:text-blue-400 transition"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Typing Effect Footer Note */}
      <div className="mt-10 text-center text-white/70 text-sm">
        <TypeAnimation
          sequence={["© 2025 AstroVikram. All rights reserved.", 2000]}
          speed={50}
          wrapper="span"
          repeat={Infinity}
          cursor={false}
        />
      </div>

      {/* Neon Glow Bottom Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 blur-sm opacity-70 mt-6 rounded-full" />
    </motion.footer>
  );
};

export default Footer;
