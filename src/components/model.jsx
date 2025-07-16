import React from "react";
import { motion } from "framer-motion";

const steps = [
  "Discovery",
  "Strategy",
  "Execution",
  "Optimization",
];

const Model = () => {
  return (
    <section className="h-screen bg-gray-200 py-10 px-6" id="model">
      <h2 className="text-4xl font-bold text-black text-shadow-lg text-center mb-12">
        Our Transformation Model
        </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5 }}
            className="bg-white shadow-lg rounded-lg p-6 w-60 text-center"
          >
            <div className="text-2xl text-black font-bold">{step}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Model;
