import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: { color: { value: "#0A192F" } },
    particles: {
      color: { value: ["#F1C40F", "#E74C3C", "#3498DB", "#9B59B6"] },
      links: { color: "#F1C40F", distance: 150, enable: true, opacity: 0.4, width: 1 },
      move: { enable: true, speed: 1.5 },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.6 },
      size: { value: { min: 1, max: 5 }, random: true },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A252F] to-[#0A192F] text-white"
    >
      <Particles className="absolute inset-0 z-0" init={particlesInit} options={particlesOptions} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-[#F1C40F]">Henok Eyayalem</span>
        </motion.h1>

       
        <motion.h2
          className="text-5xl md:text-4xl font-bold text-white px-6 py-3 inline-block rounded-xl mt-6 shadow-xl backdrop-blur-md bg-opacity-30 bg-black/50 border-2 border-[#F1C40F]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
           I'm a Software Engineer
        </motion.h2>

        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I build stunning, modern websites that bring your vision to life.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <a
            href="#portfolio"
            className="border-2 border-[#F1C40F] text-[#F1C40F] font-bold py-3 px-8 rounded-full shadow-2xl backdrop-blur-lg hover:bg-[#F1C40F] hover:text-black hover:shadow-lg transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-[#F1C40F] text-[#F1C40F] font-bold py-3 px-8 rounded-full shadow-2xl backdrop-blur-lg hover:bg-[#F1C40F] hover:text-black hover:shadow-lg transition duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-16 w-16 h-16 bg-[#F1C40F] rounded-full opacity-50 blur-lg animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <motion.div
          className="absolute top-16 right-16 w-20 h-20 bg-[#3498DB] rounded-full opacity-50 blur-xl animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
