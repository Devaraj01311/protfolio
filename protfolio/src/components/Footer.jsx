import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-zinc-800 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side */}
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-lg">Devaraj L</span>
          <p>+91 8073286791</p>
        </div>
        
        {/* Center social icons */}
        <div className="flex-1 flex justify-center space-x-6 mb-4 md:mb-0">
          <a href="https://github.com/Devaraj01311" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/devaraj-l-b30b883a53" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
        </div>

        {/* Right side */}
        <div>
          <span>© 2025 All rights Devaraj L reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
