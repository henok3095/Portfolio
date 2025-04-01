import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A252F] text-[#ECF0F1] py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-12">
          <a href="https://www.linkedin.com/in/henok-eyayalem/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#ECF0F1] hover:text-blue-700" size={30} />
          </a>
          <a href="https://github.com/henok3095" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-[#ECF0F1] hover:text-gray-500" size={30} />
          </a>
          <a href="mailto:henok3095@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-[#ECF0F1] hover:text-red-500" size={30} />
          </a>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Henok Eyayalem. </p>
      </div>
    </footer>
  );
};

export default Footer;