import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaPaintBrush } from "react-icons/fa";
import '../styles.css'; 

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-5xl text-yellow-400 drop-shadow-glow" />, 
    skills: ["React", "Angular", "JavaScript", "HTML & CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-5xl text-green-400 drop-shadow-glow" />, 
    skills: ["Node.js", ".NET","Express.js", "SQL server", "PostgreSQL", "MongoDB"],
  },
  {
    title: "UI/UX & Design",
    icon: <FaPaintBrush className="text-5xl text-blue-400 drop-shadow-glow" />, 
    skills: ["Figma", "UI/UX Principles", "Responsive Design"],
  },
];

const AboutMe = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f1f] to-[#10182c] text-white py-16 px-6 md:px-12"
    >
      {/* Glowing Heading */}
      <motion.h2 
        className="text-5xl md:text-7xl font-extrabold text-center mb-12 
        bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent drop-shadow-glow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Who I Am Section */}
      <motion.div 
        className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate web developer who loves creating interactive and user-friendly web applications. My expertise spans frontend, backend, and UI/UX design.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I have hands-on experience with modern technologies like React, Node.js, and MongoDB. I am always eager to learn new things and take on new challenges. 
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.h3 
        className="text-4xl md:text-5xl font-bold text-center mt-24 mb-12 
        bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-glow"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h3>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 
            text-center transform hover:scale-105 transition-all duration-300 hover:shadow-glow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {category.icon}
            <h4 className="text-2xl font-semibold mt-4 text-white">{category.title}</h4>
            <ul className="mt-6 space-y-3 text-gray-300">
              {category.skills.map((skill, i) => (
                <li key={i} className="bg-gray-900/70 rounded-full py-2 px-5 inline-block text-sm text-white skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
