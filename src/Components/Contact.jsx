import React, { useRef, useState } from "react";
import { send } from "@emailjs/browser";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formRef.current.from_name.value,
        message: formRef.current.message.value,
        from_email: formRef.current.from_email.value,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const redirectToWhatsApp = () => {
    const name = formRef.current.from_name.value;
    const email = formRef.current.from_email.value;
    const message = formRef.current.message.value;
    
    if (!name || !email || !message) {
      toast.error("Please fill all fields before sending WhatsApp message!");
      return;
    }

    const text = `Hi, my name is ${name}. My email is ${email}. Here's my message:\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917503183147?text=${encodedText}`, "_blank"); // Replace number
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-indigo-900">Contact Us</h2>
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows={4}
          />
          <div className="flex items-center justify-between mt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-full shadow hover:bg-yellow-500 transition font-semibold"
            >
              {loading ? "Sending..." : "Send via Email"}
            </button>
            <button
              type="button"
              onClick={redirectToWhatsApp}
              className="bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600 transition font-semibold"
            >
              WhatsApp
            </button>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default ContactForm;
