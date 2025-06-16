import React from "react";
import yellowSapphire from "../assets/Astro-img.jpg";
import Ruby from "../assets/Ruby 4.67.jpg";
import Ruby1 from "../assets/Ruby 6.52.jpg";
import elem from "../assets/Emerald.jpg";
import elem1 from "../assets/Emerald1.jpg";
import neelam from "../assets/neelam.jpg";
import blues from "../assets/saphire.jpg";

const gemstones = [
  {
    name: "Ruby 4.67 Carats",
    image: Ruby,
    origin: "Burma",
    rate: "₹19,545",
    whatsappMessage: "नमस्ते, मैं पुखराज रत्न खरीदना चाहता हूँ। कृपया जानकारी दें।",
  },
   {
    name: "Ruby 6.52 Carats",
    image: Ruby1,
    
    origin: "Burma",
    rate: "₹38560",
    whatsappMessage: "नमस्ते, मैं पुखराज रत्न खरीदना चाहता हूँ। कृपया जानकारी दें।",
  },
   {
    name: "Emerald 7.25 Carats",
    image: elem,
   
    origin: "Zambia",
    rate: "₹46580",
    whatsappMessage: "नमस्ते, मैं पुखराज रत्न खरीदना चाहता हूँ। कृपया जानकारी दें।",
  },
   {
    name: "Emerald 8.50 Carats",
    image: elem1,

    origin: "Zambia",
    rate: "₹37800",
    whatsappMessage: "नमस्ते, मैं पुखराज रत्न खरीदना चाहता हूँ। कृपया जानकारी दें।",
  },
   {
    name: "Blue Sapphire 5.25 Carats",
    image: blues,

    origin: "Sri Lanka",
    rate: "₹30250",
    whatsappMessage: "नमस्ते, मैं पुखराज रत्न खरीदना चाहता हूँ। कृपया जानकारी दें।",
  },

    {
    name: "Neelam 8.50 Carats",
    image: neelam,
  
    origin: "Bangkok",
    rate: "₹16180",
    whatsappMessage: "नमस्ते, मैं पुखराज रत्न खरीदना चाहता हूँ। कृपया जानकारी दें।",
  },
  // Add more gemstones as needed
];

const GemstonePage = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-yellow-50">
      <h2 className="text-3xl font-bold text-yellow-800 mb-10 text-center">Available Gemstones</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {gemstones.map((gem, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img
              src={gem.image}
              alt={gem.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">{gem.name}</h3>
            <p className="text-sm text-gray-600 mb-1"><strong>Type:</strong> {gem.type}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Origin:</strong> {gem.origin}</p>
            <p className="text-sm text-gray-600 mb-4"><strong>Rate:</strong> {gem.rate}</p>
            <a
              href={`https://wa.me/917503183147?text=${encodeURIComponent(gem.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-full shadow hover:bg-yellow-700 transition"
            >
              WhatsApp पर खरीदें
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default GemstonePage;