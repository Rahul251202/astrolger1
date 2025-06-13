import React, { useState } from "react";

const testimonials = [
  {
    quote: "जन्म कुंडली की सटीक व्याख्या ने मेरे जीवन को सही दिशा दी। अब मैं ज्यादा आत्मविश्वास से जीवन जी रहा हूँ।",
    author: "अंजलि शर्मा",
  },
  {
    quote: "पूजा अनुष्ठान ने हमारे घर में शांति और समृद्धि ला दी। बहुत ही दिव्य अनुभव था।",
    author: "रवि सिंह",
  },
  {
    quote: "डॉ. विक्रम जी की सलाह ने मेरे विवाह में आ रही बाधाओं को दूर किया। बहुत आभारी हूँ।",
    author: "नेहा गुप्ता",
  },
  {
    quote: "शनि दोष निवारण पूजा के बाद मेरे व्यवसाय में सुधार आया। सचमुच चमत्कारी अनुभव!",
    author: "विकास चौधरी",
  },
  {
    quote: "रुद्राभिषेक से मानसिक शांति और सकारात्मक ऊर्जा मिली। धन्यवाद।",
    author: "सोनू वर्मा",
  },
  {
    quote: "ज्योतिष परामर्श बहुत व्यावहारिक और लाभकारी रहा। मेरी समस्याओं का समाधान मिला।",
    author: "कविता मिश्रा",
  },
  {
    quote: "दुर्गा सप्तशती पाठ ने मेरी पारिवारिक समस्याओं को काफी हद तक कम कर दिया।",
    author: "प्रिया पांडेय",
  },
];

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <section className="py-20 px-6 text-black-300 bg-white">
      <h2 className="font-cursive text-4xl mb-14 drop-shadow-lg text-center text-yellow-800">
        हमारे ग्राहकों के अनुभव
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-black">
        {visibleTestimonials.map(({ quote, author }, i) => (
          <div
            key={i}
            className="bg-[oklch(0.48_0.11_60.42)] rounded-2xl p-8 "
          >
            <p className="italic leading-relaxed text-base text-white">“{quote}”</p>
            <footer className="mt-6 text-right font-semibold text-white">— {author}</footer>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-yellow-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-yellow-700 transition"
        >
          {showAll ? "कम दिखाएं" : "और दिखाएं"}
        </button>
      </div>
    </section>
  );
}
