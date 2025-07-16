import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md px-6 py-4 flex items-center justify-between text-white"
    >
      <div className="text-2xl font-bold text-primary">
        <img src="/logo.png" alt="Logo" className="h-12 inline-block " />
        AlfaStack
      </div>

      <div className="hidden md:flex space-x-12">
  <button onClick={() => scrollToSection('hero')} className="transition-all duration-300 hover:text-primary hover:scale-200">Home</button>
  <button onClick={() => scrollToSection('about')} className="transition-all duration-300 hover:text-primary hover:scale-200">About</button>
  <button onClick={() => scrollToSection('model')} className="transition-all duration-300 hover:text-primary hover:scale-200">Model</button>
  <button onClick={() => scrollToSection('stack')} className="transition-all duration-300 hover:text-primary hover:scale-200">Stack</button>
  <button onClick={() => scrollToSection('contact')} className="transition-all duration-300 hover:text-primary hover:scale-200">Contact</button>
</div>
    </motion.nav>
  );
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
