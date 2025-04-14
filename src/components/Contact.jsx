import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#1E1E1E] text-white py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 border-2 border-cyan-400 rotate-45 opacity-50"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-400 rounded-full opacity-50"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Heading with Neon Gradient, No Glitch */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let's Connect
        </motion.h2>
        <p className="text-gray-400 mb-8 text-lg tracking-wide">
          Drop me a message, and I’ll get back to you!
        </p>

        {/* Contact Form */}
        <motion.div
          className="max-w-lg mx-auto bg-[#2A2A2A] p-8 rounded-xl border border-cyan-400/30 shadow-lg relative overflow-hidden group"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form action="https://formspree.io/f/mjkglzzj" method="POST" className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-[#3A3A3A] border border-cyan-400/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-[#3A3A3A] border border-cyan-400/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="4"
                className="w-full px-4 py-3 bg-[#3A3A3A] border border-cyan-400/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full relative bg-purple-400 text-black py-3 rounded-full font-bold overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255, 0, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
            </motion.button>
          </form>
          {/* Subtle Hover Overlay */}
          <span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;