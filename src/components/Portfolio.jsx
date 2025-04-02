import React, { useState } from "react";
import { motion } from "framer-motion";
import fadeIn from "../utils/fadeIn";
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.02, // Reduced from 1.05 to make it subtler
      boxShadow: "0px 5px 10px rgba(0, 255, 255, 0.1)", // Reduced shadow intensity
      transition: { duration: 0.2 }, // Shortened duration for less noticeable effect
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-[#0A0A23] relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E3F] via-[#2A2A5A] to-[#3F3F7A] opacity-80"></div>

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          initial={{ x: `${Math.random() * 100}vw`, y: `${Math.random() * 100}vh` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        className="container mx-auto px-6 md:px-12 relative z-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <p className="text-cyan-200 mt-4 text-center text-xl font-light">
          Journey through my portfolio of projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1E1E3F]/80 rounded-3xl shadow-lg overflow-hidden border border-cyan-500/30 cursor-pointer flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110 rounded-t-3xl"
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
                  <p className="mt-3 text-gray-300">{project.description.substring(0, 60)}...</p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cyan-500 text-black py-2 px-6 rounded-full font-semibold"
                  >
                    Explore
                  </motion.button>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-purple-400 hover:text-purple-300"
                    title="View GitHub Repository"
                  >
                    <FaGithub className="text-3xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "More Projects on GitHub" Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-200 text-lg mb-4">
            Want to see more? Check out my full collection of projects on GitHub!
          </p>
          <motion.a
            href="https://github.com/henok3095" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(147, 51, 234, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-purple-500 text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg hover:bg-purple-600 transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
            More Projects on GitHub
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
            className="bg-[#1E1E3F]/95 text-white p-8 rounded-3xl shadow-2xl w-[90vw] max-w-[1100px] border border-cyan-500/50 relative"
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
                className="w-full md:w-1/2 h-auto object-cover rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-bold text-cyan-400">{selectedProject.title}</h2>
                  <p className="mt-4 text-gray-200">{selectedProject.description}</p>
                </div>
                <div className="mt-6 flex gap-4">
                  {selectedProject.link && (
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="bg-cyan-500 text-black py-3 px-6 rounded-full font-bold"
                    >
                      View Live
                    </motion.a>
                  )}
                  {/* <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-purple-500 text-white py-3 px-6 rounded-full font-bold flex items-center gap-2"
                  >
                    <FaGithub className="text-xl" /> GitHub Repo
                  </motion.a> */}
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