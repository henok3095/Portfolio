import React, { useState } from "react";
import { motion } from "framer-motion";
import travelblog_picture from "../assets/travel_blog.png";
import resume_screening from "../assets/resume_screening.png";
import Movie_rec from "../assets/Movie_rec.png";
import Weather_app from "../assets/Weather_app.png";
import TicTacToe from "../assets/TicTacToe.png";
import ZemaFm from "../assets/ZemaFM.png";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Travel Blog Website",
      description: "A dynamic travel blogging platform with interactive UI and social sharing features.",
      image: travelblog_picture,
      link: "https://travelblogwebsite.vercel.app/",
      github: "https://github.com/henok3095/PRODIGY_TrackCode_01",
      status: "Completed",
    },
    {
      title: "Resume Screening Web App",
      description: "An AI-powered resume screening system for efficient hiring.",
      image: resume_screening,
      link: "https://resume-screening-khaki.vercel.app/",
      github: "https://github.com/henok3095/resume-screening-front-end",
      status: "Completed",
    },
    {
      title: "Movie Rec Web App",
      description: "Personalized movie suggestions using advanced algorithms.",
      image: Movie_rec,
      link: "",
      github: "https://github.com/yourgithubrepo3",
      status: "In Progress",
    },
    {
      title: "Weather App",
      description: "A real-time weather forecasting app with sleek design.",
      image: Weather_app,
      link: "https://weatherapp-zeta-cyan.vercel.app/",
      github: "https://github.com/henok3095/PRODIGY_TrackCode_04",
      status: "Completed",
    },
    {
      title: "TicTacToe Game",
      description: "A fun and interactive TicTacToe game with AI mode.",
      image: TicTacToe,
      link: "https://tictactoe-five-henna.vercel.app/",
      github: "https://github.com/henok3095/PRODIGY_TrackCode_03",
      status: "Completed",
    },
    {
      title: "Zema FM",
      description: "Zema.fm is a modern Spotify stats platform with deep insights into music habits.",
      image: ZemaFm,
      link: "https://zema-fm.vercel.app/",
      github: "https://github.com/henok3095/Zema-FM",
      status: "Completed",
    },
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: {
      scale: 1.02,
      boxShadow: "0px 5px 15px rgba(0, 255, 255, 0.3)",
      transition: { duration: 0.2 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="portfolio"
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

      <motion.div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading with Neon Gradient */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#2A2A2A] rounded-xl border border-cyan-400/30 shadow-lg overflow-hidden cursor-pointer flex flex-col relative group"
              variants={cardVariants}
              initial="initial"
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover rounded-t-xl"
              />
              <div className="p-6 text-left flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        project.status === "Completed" ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                    <p
                      className={`text-sm ${
                        project.status === "Completed" ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {project.status}
                    </p>
                  </div>
                  <p className="mt-3 text-gray-400 tracking-wide">{project.description.substring(0, 60)}...</p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="relative bg-cyan-400 text-black py-2 px-6 rounded-full font-semibold overflow-hidden group"
                  >
                    <span className="relative z-10">Explore</span>
                    <span className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                  </motion.button>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 0, 255, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="text-purple-400"
                    title="View GitHub Repository"
                  >
                    <FaGithub className="text-3xl" />
                  </motion.a>
                </div>
              </div>
              {/* Subtle Hover Overlay */}
              <span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </motion.div>
          ))}
        </div>

        {/* "More Projects on GitHub" Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/henok3095"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(147, 51, 234, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-3 bg-purple-400 text-black py-3 px-8 rounded-full font-bold text-lg overflow-hidden group"
          >
            <span className="relative z-10">
              <FaGithub className="inline text-2xl mr-2" /> More Projects on GitHub
            </span>
            <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
          </motion.a>
        </motion.div>
      </motion.div>

      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          initial="hidden"
          animate="visible"
          variants={modalVariants}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#2A2A2A] text-white p-8 rounded-xl shadow-2xl w-[90vw] max-w-[1100px] border border-cyan-400/30 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-cyan-400 font-bold text-3xl hover:text-cyan-200"
            >
              ×
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <motion.img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full md:w-1/2 h-auto object-cover rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-bold text-cyan-400">{selectedProject.title}</h2>
                  <p className="mt-4 text-gray-400 tracking-wide">{selectedProject.description}</p>
                </div>
                <div className="mt-6 flex gap-4">
                  {selectedProject.link && (
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-cyan-400 text-black py-3 px-6 rounded-full font-bold overflow-hidden group"
                    >
                      <span className="relative z-10">View Live</span>
                      <span className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                    </motion.a>
                  )}
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 0, 255, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="relative bg-purple-400 text-black py-3 px-6 rounded-full font-bold overflow-hidden group"
                  >
                    <span className="relative z-10">GitHub Repo</span>
                    <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;