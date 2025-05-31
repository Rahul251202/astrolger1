import React from "react";

const testimonials = [
  {
    quote:
      "The personalized horoscope reading changed my perspective on life and helped me find peace.",
    author: "Anjali R.",
  },
  {
    quote: "The pooja rituals brought harmony and prosperity to our family. Highly recommend!",
    author: "Ravi S.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 text-black-300">
      <h2 className="font-cursive text-4xl mb-14 drop-shadow-lg text-center">
        What Our Clients Say
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map(({ quote, author }, i) => (
          <div
            key={i}
            className="bg-indigo-100 rounded-2xl p-8 shadow-md hover:shadow-yellow-400/60 transform hover:scale-105 transition duration-300"
          >
            <p className="italic leading-relaxed text-base">“{quote}”</p>
            <footer className="mt-6 text-right font-semibold text-indigo-800">— {author}</footer>
          </div>
        ))}
      </div>
    </section>
  );
}
