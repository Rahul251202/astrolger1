import React from "react";

const blogs = [
  {
    title: "Astrology Tips for Beginners",
    previewImage: "/images/moon-phases.jpg",
    excerpt: "Learn the basics of astrology and how the moon phases affect your life.",
  },
  {
    title: "Guide to Pooja Rituals",
    previewImage: "/images/temple-lamp.jpg",
    excerpt: "Step-by-step guide to performing common pooja rituals at home.",
  },
];

export default function BlogSection() {
  return (
   <section className="py-20 px-6 text-yellow-300">
      <h2 className="font-cursive text-4xl mb-14 drop-shadow-lg">Astrology & Pooja Insights</h2>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
        {blogs.map(({ title, previewImage, excerpt }) => (
          <article
            key={title}
            className="bg-indigo-800 rounded-2xl shadow-lg overflow-hidden w-72 cursor-pointer hover:shadow-yellow-400/70 transition-shadow"
          >
            <img
              src={previewImage}
              alt={title}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl mb-2">{title}</h3>
              <p className="text-sm leading-relaxed">{excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
