import React from "react";
import { motion } from "framer-motion";
import vivah from "../assets/vivahh.jpg";
import baglamukhiImg from "../assets/baglamukhii.jpg";
import rudra from "../assets/rudrakash.jpg";
import phto from "../assets/bg-vikr.jpg";

const poojaList = [
  {
    title: "🕉 Rudrabhishek Pooja",
    subtitle: "• Shivji ko Prasann Karne ka Sarvottam Upay 🕉",
    description:
      "Om Namah Shivaya ke jaap ke saath jab shuddh jal, doodh, ghee, shahad aur belpatra se hota hai Bhagwan Shiv ka abhishek to khulte hain bhagya ke band darwaze aur milti hai divine protection.",
    image: rudra,
  },
  {
    title: "🏡 Grih Pravesh Pooja",
    subtitle: "• Naye Ghar Mein Shubh Shuruaat 🏡",
    description:
      "Naya ghar sirf ek building nahi hota, balki sapno ka mandir hota hai. Isliye grih pravesh se pehle karaye shastron ke anusaar pooja, jisse ghar mein aaye: Positive energy ka vaas, Negativity ka nash,Lakshmi aur Ganesh ji ka aashirwad,Sukoon, samriddhi aur sukh-shanti",
    image: vivah,
  },
  {
    title: "Baglamukhi Pooja",
    subtitle: "• Protection and Power",
    description:
      "बगलामुखी पूजा देवी बगलामुखी को समर्पित है, जो दस महाविद्याओं में से एक हैं। यह पूजा विशेष रूप से शत्रु बाधा, वाद-विवाद, मुकदमे, और नकारात्मक शक्तियों से रक्षा के लिए की जाती है। बगलामुखी माता को शत्रुओं का नाश करने वाली देवी माना जाता है। जो व्यक्ति श्रद्धा से यह पूजा करता है, उसे अद्भुत आत्मविश्वास, साहस और मानसिक शक्ति प्राप्त होती है। यह पूजा वाणी और विचारों को नियंत्रित करने में भी सहायता करती है, जिससे जीवन में स्थिरता आती है।",
    image: baglamukhiImg,
  },
  
];

const AboutSection = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.img
          src={phto}
          alt="About Pooja"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full rounded-xl shadow-lg"
        />

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-4">About Us</h2>
          
          <p className="text-black leading-relaxed text-sm md:text-sm font-semibold mb-4 text-justify">
            AstroVikram is led by <span className="font-bold text-yellow-800">Dr. Vikram Kumar Jha</span>, 
            a respected spiritual practitioner and scholar. He holds a <span className="italic">B.A. in Sanskrit from Delhi University</span>, 
            along with <span className="italic">B.Ed From Lal bahadur shastri institute </span> <span> M.A from JNU and Ph.D from IGNOU</span> degrees. With years of experience and devotion, 
            Dr. Jha has guided countless individuals through authentic Vedic practices.
          </p>

          <p className="text-black leading-relaxed text-sm md:text-sm font-semibold text-justify">
            AstroVikram is dedicated to bringing you the ancient wisdom of astrology, pooja rituals, and gemstones.
            Our experienced pandits perform authentic Vedic rituals that align your energies with the cosmic universe.
           we ensure every ceremony is performed with devotion
            and precision to bring harmony, prosperity, and spiritual well-being in your life.
          </p>
        </motion.div>
      </div>

      {/* Pooja List Section */}
      <div className="relative border-l-4 border-yellow-600 pl-6 space-y-12 before:absolute before:top-0 before:left-[6px] before:h-full before:w-1 before:bg-yellow-300 before:animate-pulse mt-16">
        {poojaList.map((pooja, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-white hover:shadow-xl transition-shadow duration-300 shadow-md rounded-lg p-6 group md:ml-6"
          >
            <div className="absolute -left-8 top-6 w-4 h-4 bg-black rounded-full border-4 border-white group-hover:scale-125 transition-transform"></div>

            <div className="flex flex-col md:flex-row items-center gap-6 text-yellow-800">
              <img
                src={pooja.image}
                alt={pooja.title}
                className="w-full md:w-48 h-48 object-cover rounded-md transition-transform duration-300 group-hover:rotate-1 group-hover:scale-105"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-1">{pooja.title}</h3>
                <span className="text-xs text-gray-500 italic">{pooja.subtitle}</span>
                <p className="text-sm mt-2 text-black">{pooja.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
