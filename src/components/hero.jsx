import { motion } from 'framer-motion';
import ScrollToSection from '../components/scrollTosection';
import ThreeParticleBackground from './background';

export default function Hero() {
  return (
    <>
    <image src="/logo.png"></image>
     <div className="h-150 flex flex-col items-center justify-center text-center md:text-left space-y-6 flex-1 pt-30 ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-7xl font-extrabold"
        >
          Elevate with <span className="text-primary">AlfaStack</span>
        </motion.h1>
    <motion.button
     whileHover={{ scale: 1.2 }}
        className="relative z-10 bg-gray-800 rounded-lg px-9 py-4 text-lg"
        onClick={() => ScrollToSection('contact')}
      >
        Contact Us
      </motion.button>
       <ThreeParticleBackground/>
      </div>
</>
  );
}
