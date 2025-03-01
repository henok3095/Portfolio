import React, { useState } from "react";
import { motion } from "framer-motion";
import fadeIn from "../utils/fadeIn";
import travelblog_picture from "../assets/travel_blog.png";
import resume_screening from "../assets/resume_screening.png";
import Movie_rec from "../assets/Movie_rec.png";
import Weather_app from "../assets/Weather_app.png";
import TicTacToe from "../assets/TicTacToe.png";

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
  ];

  const projectAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-20 blur-3xl"></div>
      
      <motion.div
        className="container mx-auto px-6 md:px-12"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>
        <p className="text-gray-300 mt-4 text-center text-lg">
          Explore some of the projects I've built with passion and creativity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 relative group border border-gray-700"
              variants={projectAnimation}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300 rounded-t-2xl"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-blue-400">{project.title}</h3>
                <hr className="my-2 border-gray-500" />
                <p className={`mt-2 ${project.status === "Completed" ? "text-green-500" : "text-red-500"}`}>
                  {project.status}
                </p>
                
                <p className="mt-2 text-gray-300">{project.description.substring(0, 60)}...</p>
                
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  See More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#2C3E50] text-[#ECF0F1] p-10 rounded-lg shadow-lg relative w-[90vw] max-w-[1000px] flex flex-col md:flex-row">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-[#F1C40F] font-bold text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full md:w-1/2 h-auto object-cover rounded-lg"
            />
            <div className="pl-0 md:pl-10 flex flex-col justify-between mt-6 md:mt-0">
              <h2 className="text-3xl font-bold text-[#F1C40F]">{selectedProject.title}</h2>
              <p className="mt-4">{selectedProject.description}</p>
              <div className="mt-6 flex gap-4">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F1C40F] text-[#2C3E50] py-2 px-4 rounded-lg font-bold hover:bg-[#D4AC0D]"
                  >
                    Visit Website
                  </a>
                )}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#34495E] text-[#F1C40F] py-2 px-4 rounded-lg font-bold hover:bg-[#1C2833]"
                >
                  View GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
