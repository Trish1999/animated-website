import React, { useEffect } from "react";
import './App.css';
import Hero from "./components/hero";
import About from "./components/about";
import Model from "./components/model";
import Stack from "./components/stack";
import Contact from "./components/contact";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/navbar";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
<div className=" font-sans bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Model />
      <Stack />
      <Contact />
    </div>
  );
}

export default App;
