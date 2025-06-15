import React, { useState } from "react";
import clock from "../assets/revolve.png"; // ← your revolving image

const KundliForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
  });

  const [kundliData, setKundliData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const mockResponse = {
        message: "Kundli generated successfully!",
        name: formData.name,
        dob: formData.dateOfBirth,
        tob: formData.timeOfBirth,
        pob: formData.placeOfBirth,
        sunSign: "Leo ♌",
        moonSign: "Cancer ♋",
        nakshatra: "Ashlesha",
      };

      setTimeout(() => {
        setKundliData(mockResponse);
        setFormData({
          name: "",
          dateOfBirth: "",
          timeOfBirth: "",
          placeOfBirth: "",
        });
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error("Error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-10 p-6 bg-white" id="kundali">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white p-6 rounded-lg shadow">
        {/* Form - Left Side */}
        <div className="w-full md:w-1/2 justify-center items-center hidden md:flex">
          <img
            src={clock}
            alt="Rotating clock"
            // className="w-56 h-56 animate-spin-slow"
            className="w-[28rem] h-60 animate-[spin_15s_linear_infinite]"
          />
        </div>

        {/* Animated Image - Right Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6 text-center text-yellow-800">
            Generate Your Horoscope (Kundli)
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="time"
              name="timeOfBirth"
              value={formData.timeOfBirth}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              name="placeOfBirth"
              placeholder="Place of Birth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-yellow-800 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Kundli"}
            </button>
          </form>

          {kundliData && (
            <div className="mt-6 p-4 bg-white border rounded-md shadow-inner">
              <h3 className="text-xl font-bold mb-2 text-black">Kundli Details</h3>
              <p><strong>Name:</strong> {kundliData.name}</p>
              <p><strong>Date of Birth:</strong> {kundliData.dob}</p>
              <p><strong>Time of Birth:</strong> {kundliData.tob}</p>
              <p><strong>Place of Birth:</strong> {kundliData.pob}</p>
              <p><strong>Sun Sign:</strong> {kundliData.sunSign}</p>
              <p><strong>Moon Sign:</strong> {kundliData.moonSign}</p>
              <p><strong>Nakshatra:</strong> {kundliData.nakshatra}</p>

              <div className="mt-4 text-center">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(
                    `Hi, I would like to get my full Kundli chart based on my details:\nName: ${kundliData.name}\nDOB: ${kundliData.dob}\nTime of Birth: ${kundliData.tob}\nPlace of Birth: ${kundliData.pob}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  For full Kundli chart contact here
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KundliForm;
