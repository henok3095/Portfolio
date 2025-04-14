import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false);
  };

  const glitchVariants = {
    hover: {
      textShadow: [
        "0 0 5px #00FFFF",
        "2px 2px 10px #FF00FF",
        "-2px -2px 15px #00FFFF",
      ],
      transition: { duration: 0.1, repeat: 3, repeatType: "loop" },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1E1E1E] text-white shadow-[0_0_15px_rgba(0,255,255,0.2)] z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="hidden md:block w-40"></div>

        <ul className="hidden md:flex space-x-10 text-lg font-semibold">
          {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              className="relative group"
              whileHover="hover"
              variants={glitchVariants}
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`transition-colors duration-300 ${
                  activeItem === item ? "text-cyan-400" : "text-white"
                }`}
                onClick={() => handleMenuItemClick(item)}
              >
                {item}
              </Link>
              <motion.span
                className="absolute left-0 bottom-[-4px] h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400"
                initial={{ width: 0 }}
                animate={{ width: activeItem === item ? "100%" : 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="https://drive.google.com/file/d/1v0yVaxIDJXVJcTZ5NMwCqhdyigcAdue1/view?usp=drive_link"
          target="_blank"
          className="hidden md:inline-block relative bg-cyan-400 text-black px-6 py-2 rounded-lg font-semibold overflow-hidden group"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">View CV</span>
          <span className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
        </motion.a>

        <motion.button
          className="md:hidden text-cyan-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </motion.button>
      </div>

      {menuOpen && (
        <motion.div
          className="md:hidden bg-[#1E1E1E] py-6 px-6 absolute top-full left-0 w-full shadow-[0_0_15px_rgba(0,255,255,0.2)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-6 text-lg text-center">
            {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05, color: "#00FFFF" }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`block transition-colors duration-300 ${
                    activeItem === item ? "text-cyan-400" : "text-white"
                  }`}
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="https://drive.google.com/file/d/1v0yVaxIDJXVJcTZ5NMwCqhdyigcAdue1/view?usp=drive_link"
                target="_blank"
                className="block bg-purple-400 text-black px-6 py-2 rounded-lg font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10">View CV</span>
                <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;