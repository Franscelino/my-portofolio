import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/20 backdrop-blur-xl shadow-2xl' : 'bg-transparent backdrop-blur-sm'
      }`}>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          
          {/* Logo */}
          <div className="relative group ml-8">
            <a href="/" className="flex items-center">
              <div className="relative">
                <img 
                  src="/Logo.svg" 
                  alt="Logo" 
                  className="h-16 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-lg" 
                />
                <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <div key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-white/90 font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:text-white active:scale-95"
                >
                  {item}
                  {/* Only border gradient on hover, transparent background */}
                  <div className="absolute inset-0 hover:border-amber-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 p-[1px] bg-gradient-to-r from-purple-500 to-orange-500">
                    <div className="w-full h-full bg-transparent rounded-xl"></div>
                  </div>
                  {/* Click effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-orange-500/30 rounded-xl scale-0 transition-all duration-200 ease-out group-active:scale-110 group-active:opacity-60"></div>
                  <div className="absolute inset-0 bg-white rounded-xl opacity-0 transition-all duration-150 group-active:opacity-10"></div>
                </a>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
              <a
                href="#contact"
                className="relative block px-8 py-3 bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                Contact
                <div className="absolute inset-0 bg-white rounded-xl opacity-0 transition-all duration-150 group-active:opacity-20"></div>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? (
                  <XMarkIcon className="h-7 w-7" />
                ) : (
                  <Bars3Icon className="h-7 w-7" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-black/30 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-6 py-6 space-y-4">
              {['About', 'Skills', 'Experience', 'Projects'].map((item, index) => (
                <div key={item} className="relative group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="block px-4 py-3 text-white/90 font-medium transition-all duration-300 hover:text-white hover:pl-6 rounded-lg hover:bg-white/5"
                  >
                    {item}
                    <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-300 group-hover:w-2 -translate-y-1/2"></div>
                  </a>
                </div>
              ))}
              <div className="pt-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl blur opacity-50 group-hover:opacity-80 transition-all duration-300"></div>
                  <a
                    href="#contact"
                    onClick={toggleMenu}
                    className="relative block text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;