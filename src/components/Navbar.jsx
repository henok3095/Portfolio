import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1A252F] text-[#ECF0F1] shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Empty div for spacing (ensures proper centering) */}
        <div className="hidden md:block w-40"></div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={`#${item === "Home" ? "hero" : item.toLowerCase()}`}
                className="text-white transition duration-300"
                onClick={() => handleMenuItemClick(item)}
              >
                {item}
              </a>
              {/* Creative Hover Effect - Expanding Underline */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#F1C40F] to-[#FFD700] transition-all duration-300 ${
                  activeItem === item ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* CV Button */}
        <a
          href="https://drive.google.com/file/d/1v0yVaxIDJXVJcTZ5NMwCqhdyigcAdue1/view?usp=drive_link" // Replace with actual CV file path
          download
          className="hidden md:inline-block bg-[#F1C40F] text-[#1A252F] px-5 py-2 rounded-lg font-semibold transition-all duration-300 
          border-2 border-transparent hover:border-[#F1C40F] hover:bg-transparent hover:text-[#F1C40F] shadow-md"
        >
          View CV
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F1C40F] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A252F] py-4 px-6 absolute top-full left-0 w-full shadow-lg">
          <ul className="space-y-4 text-lg text-center">
            {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item === "Home" ? "hero" : item.toLowerCase()}`}
                  className="block text-white hover:text-[#F1C40F] transition-all duration-300"
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                download
                className="block bg-[#F1C40F] text-[#1A252F] px-5 py-2 rounded-lg font-semibold transition-all duration-300 
                border-2 border-transparent hover:border-[#F1C40F] hover:bg-transparent hover:text-[#F1C40F] shadow-md"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
