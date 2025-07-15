import React from "react";
import { motion } from "framer-motion";

const techs = ["React", "Node.js", "TailwindCSS", "Framer Motion", "Three.js"];

const Stack = () => {
  return (
    <section className="py-20 bg-black text-white" id="stack">
      <h2 className="text-4xl font-bold text-center mb-16">Our Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {techs.map((tech, idx) => (
          <motion.div
            key={tech}
            whileHover={{ scale: 0.6 }}
            className="bg-gray-800 rounded-lg px-6 py-4 text-lg"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
