import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import heroBg from '../assets/heroBg.json';
import ScrollToSection from '../components/scrollTosection';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between h-screen px-6 md:px-20 bg-black text-white overflow-hidden"
    >
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-6 flex-1">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Elevate with <span className="text-primary">AlfaStack</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gray-800 rounded-lg px-6 py-4 text-lg"
          onClick={() => ScrollToSection('contact')}
        >
          Discover More
        </motion.button>
      </div>

      <div className="md:w-1/3 flex justify-center mt-2 md:mt-5">
        <Lottie
          animationData={heroBg}
          loop
          autoplay
          className="w-80 h-80 md:w-200 md:h-200 object-contain opacity-100"
        />
      </div>
    </section>
  );
}
