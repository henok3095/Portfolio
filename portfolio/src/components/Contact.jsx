import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-20 blur-3xl"></div>
      
      <motion.div
        className="container mx-auto px-6 md:px-12 text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let's Connect
        </motion.h2>
        <p className="text-gray-400 mb-8 text-lg">Drop me a message, and I'll get back to you!</p>

        <motion.div
          className="max-w-lg mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <form action="https://formspree.io/f/mjkglzzj" method="POST" className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="4"
                className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-purple-500/50"
              whileHover={{ y: -3 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
