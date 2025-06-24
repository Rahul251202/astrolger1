import React from "react";
import poojaImage from "../assets/bg-vikr.jpg";
import poojaVideo from "../assets/pooja-video.mp4";
import Poojavideo1 from "../assets/poojavdo.mp4";
import Poojavideo2 from "../assets/poojavdo1.mp4";
import havan from "../assets/hvan.jpeg";
import puja from "../assets/poojapht1.jpeg";
import puja2 from "../assets/poojapth2.jpg";

const PoojaPage = () => {
  return (
    <section className="bg-[#fffaf3] py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-yellow-800 drop-shadow-lg font-cursive">
          Personalized Pooja Rituals
        </h1>

        {/* Description + main image */}
       <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
  {/* Left: Pooja image */}
  <img
    src={poojaImage}
    alt="Main Pooja"
    className="w-full md:w-1/2 rounded-xl shadow-lg"
  />

  {/* Right: Text + list + button */}
  <div>
    <p className="text-lg leading-relaxed">
      Experience spiritually uplifting pooja rituals tailored to your astrological needs and personal intentions.
      Whether it's for health, peace, prosperity, or spiritual cleansing — our expert-guided rituals are performed
      with devotion and purity.
    </p>
    <ul className="mt-4 list-disc list-inside text-base text-gray-700">
      <li>Navgraha Shanti Pooja</li>
      <li>Rudra Abhishek</li>
      <li>Manglik Dosh Nivaran</li>
      <li>Lakshmi Pooja for Prosperity and more..</li>
    </ul>

    {/* WhatsApp Contact Button */}
    <a
      href="https://wa.me/917503183147?text=Hi,%20I'm%20interested%20in%20booking%20a%20personalized%20pooja%20ritual."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition"
    >
         Contact via WhatsApp
    </a>
  </div>
</div>


        {/* Your Pooja Photos Section */}
        <h2 className="text-2xl font-semibold mb-4 text-yellow-700">
          My Pooja Moments (Photos)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          <img
            src={havan}
            alt="Pooja 1"
            className="rounded-xl shadow-md object-cover w-full h-60"
          />
          <img
            src={puja}
            alt="Pooja 2"
            className="rounded-xl shadow-md object-cover w-full h-60"
          />
          <img
            src={puja2}
            alt="Pooja 3"
            className="rounded-xl shadow-md object-cover w-full h-60"
          />
        </div>

        {/* Video Section */}
        <h2 className="text-2xl font-semibold mb-4 text-yellow-700">
          My Pooja Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <video
            controls
            className="rounded-xl shadow-md w-full h-72 object-cover"
          >
            <source src={Poojavideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* You can add more videos similarly */}
          <video
            controls
            className="rounded-xl shadow-md w-full h-72 object-cover"
          >
            <source src={Poojavideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default PoojaPage;
