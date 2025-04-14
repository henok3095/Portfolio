import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  // New glitch effect: subtle distortion with neon flicker
  const glitchVariants = {
    hover: {
      x: [0, 2, -2, 1, 0], // Slight horizontal jitter
      textShadow: [
        "0 0 5px #00FF00", // Neon green glow
        "0 0 10px #00FF00",
        "0 0 15px #FFFF00", // Yellow accent
        "0 0 10px #00FF00",
      ],
      transition: { duration: 0.3, repeat: 3, repeatType: "loop" },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-[#1E1E1E] text-white overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 border-2 border-cyan-400 rotate-45 opacity-50"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-400 rounded-full opacity-50"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Glitchy Name with New Effect */}
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-white tracking-wider"
          variants={glitchVariants}
          whileHover="hover"
        >
          <span className="relative">
            Henok Eyayalem
            {/* Subtle Neon Overlay */}
            <span className="absolute inset-0 text-green-400 opacity-30 translate-x-1">Henok Eyayalem</span>
          </span>
        </motion.h1>

        {/* Neon Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Software Engineer
        </motion.h2>

        {/* Minimal Description */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl mx-auto tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Crafting code into sleek, impactful digital experiences.
        </motion.p>

        {/* Bold Buttons */}
        <motion.div
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.a
            href="#portfolio"
            className="relative bg-cyan-400 text-black font-bold py-3 px-10 rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
          </motion.a>
          <motion.a
            href="#contact"
            className="relative bg-purple-400 text-black font-bold py-3 px-10 rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255, 0, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        >
          <FaArrowDown className="text-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;