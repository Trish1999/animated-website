import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section className="h-screen bg-white flex items-center justify-center" id="about">
      <motion.div style={{ opacity  }} className="max-w-4xl text-center px-20">
        <h2 className="md:text-6xl text-4xl text-black font-bold mb-8">Who We Are</h2>
        <p className="text-2xl md:text-4xl text-gray-700">
          AlfaStack is a digital-first company focused on building modern solutions with scalable architecture, intuitive design, and powerful performance.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
