import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from 'lottie-react';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [animationData, setAnimationData] = useState(null);
  
    useEffect(() => {
      fetch('/robo.json')
        .then(res => res.json())
        .then(data => setAnimationData(data));
    }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted! (Simulated)");
  };

  return (
    <section className="flex flex-row py-20 px-6 bg-white" id="contact">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        {["name", "email", "message"].map((field) => (
          <motion.div
            key={field}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type={field === "message" ? "textarea" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              className="w-full p-4 border text-black bg-gray-200 rounded-md"
              rows={field === "message" ? 5 : undefined}
            />
          </motion.div>
        ))}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.2 }}
          className="w-full bg-black text-white py-3 rounded-md"
        >
          Send Message
        </motion.button>
      </form>
          <div className="flex md:flex-row flex-col justify-end">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="w-200 h-100 object-contain opacity-100"
      />
    </div>
    </section>
  );
};

export default Contact;
