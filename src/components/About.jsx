import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaPaintBrush } from "react-icons/fa";
import '../styles.css';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-5xl text-cyan-400" />,
    skills: ["React", "Angular", "JavaScript", "HTML & CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-5xl text-purple-400" />,
    skills: ["Node.js", ".NET", "Express.js", "SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    title: "UI/UX & Design",
    icon: <FaPaintBrush className="text-5xl text-cyan-400" />,
    skills: ["Figma", "UI/UX Principles", "Responsive Design"],
  },
];

const AboutMe = () => {
  // Card hover effect (keeping this as it’s not on the title)
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.02, boxShadow: "0px 5px 15px rgba(0, 255, 255, 0.3)" },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#1E1E1E] text-white py-16 px-6 md:px-12 overflow-hidden"
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

      {/* Static, Clear Heading */}
      <h2
        className="text-5xl md:text-7xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wide"
      >
        About Me
      </h2>

      {/* Who I Am Section */}
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-lg text-gray-400 leading-relaxed tracking-wide">
            I am a passionate web developer who loves creating interactive and user-friendly web applications. My expertise spans frontend, backend, and UI/UX design.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed tracking-wide">
            I have hands-on experience with modern technologies like React, Node.js, and MongoDB. I am always eager to learn new things and take on new challenges.
          </p>
        </div>
      </motion.div>

      {/* Skills Heading */}
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-center mt-24 mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Skills
      </motion.h3>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-xl bg-[#2A2A2A] border border-cyan-400/30 text-center relative overflow-hidden group"
            variants={cardVariants}
            initial="initial"
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
            whileHover="hover"
            transition={{ duration: 0.2 }}
          >
            {/* Icon with Neon Glow */}
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {category.icon}
            </motion.div>
            <h4 className="text-2xl font-semibold mt-4 text-white">{category.title}</h4>
            <ul className="mt-6 space-y-3 text-gray-400">
              {category.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  className="bg-[#3A3A3A] rounded-full py-2 px-5 inline-block text-sm text-cyan-400 group-hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, backgroundColor: "#00FFFF" }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
            {/* Subtle Hover Overlay */}
            <span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;