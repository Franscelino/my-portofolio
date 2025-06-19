import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-6 sm:py-8 relative overflow-hidden border-t border-gray-800">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 text-center text-gray-400 text-xs sm:text-sm">
        <p>&copy; {currentYear} Franscelino Melvyn. All rights reserved.</p>
        <div className="flex justify-center space-x-3 sm:space-x-4 mt-3 sm:mt-4">
          <a href="mailto:francelinomelvyn@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Email</a>
          <a href="https://github.com/Franscelino" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">GitHub</a>
          <a href="https://www.linkedin.com/in/franscelino-melvyn-5874a1292" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
