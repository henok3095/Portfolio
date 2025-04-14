import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Icon hover effect
  const iconVariants = {
    hover: {
      scale: 1.2,
      textShadow: "0px 0px 10px rgba(0, 255, 255, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="relative bg-[#1E1E1E] text-white py-8 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-12 h-12 border-2 border-cyan-400 rotate-45 opacity-50"
        animate={{ rotate: 360, y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 border-2 border-purple-400 rounded-full opacity-50"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto text-center relative z-10">
        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/henok-eyayalem/"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaLinkedin className="text-cyan-400 hover:text-cyan-300" size={30} />
          </motion.a>
          <motion.a
            href="https://github.com/henok3095"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaGithub className="text-purple-400 hover:text-purple-300" size={30} />
          </motion.a>
          <motion.a
            href="mailto:henok3095@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaEnvelope className="text-cyan-400 hover:text-cyan-300" size={30} />
          </motion.a>
        </motion.div>

        {/* Copyright Text */}
        <motion.p
          className="mt-6 text-gray-400 text-sm tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          © {new Date().getFullYear()} Henok Eyayalem.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;