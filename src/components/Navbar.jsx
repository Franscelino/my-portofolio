import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = ({ hideNavItems = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

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

    const scrollToSection = (sectionId, e) => {
        if (e) e.preventDefault();

        navigate(`/#${sectionId}`);
        setTimeout(() => {
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);

        setIsOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled ? 'bg-black/80 backdrop-blur-xl shadow-2xl' : 'bg-transparent backdrop-blur-sm'
            }`}>
                <div className="container mx-auto flex justify-between items-center py-4 px-6">

                    {/* Logo */}
                    <div className="relative group">
                        <Link to="/" onClick={(e) => scrollToSection('', e)} className="flex items-center">
                            <div className="relative">
                                <img
                                    src="/Logo.svg"
                                    alt="Logo"
                                    className="h-12 sm:h-16 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    {!hideNavItems && (
                        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                            <Link to="/#about" onClick={(e) => scrollToSection('about', e)} className="relative text-white/90 font-medium text-base tracking-wide uppercase transition-all duration-300 hover:text-white group">
                                About
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </Link>
                            <Link to="/#skills" onClick={(e) => scrollToSection('skills', e)} className="relative text-white/90 font-medium text-base tracking-wide uppercase transition-all duration-300 hover:text-white group">
                                Skills
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </Link>
                            <Link to="/#experience" onClick={(e) => scrollToSection('experience', e)} className="relative text-white/90 font-medium text-base tracking-wide uppercase transition-all duration-300 hover:text-white group">
                                Experience
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </Link>
                            <Link to="/#projects" onClick={(e) => scrollToSection('projects', e)} className="relative text-white/90 font-medium text-base tracking-wide uppercase transition-all duration-300 hover:text-white group">
                                Projects
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </Link>
                        </div>
                    )}

                    {/* Contact Button Desktop */}
                    {!hideNavItems && (
                        <div className="hidden md:block">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                                <Link
                                    to="/#contact"
                                    onClick={(e) => scrollToSection('contact', e)}
                                    className="relative block px-6 py-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
                                >
                                    Contact
                                    <div className="absolute inset-0 bg-white rounded-xl opacity-0 transition-all duration-150 group-active:opacity-20"></div>
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="relative p-2 text-white/80 hover:text-white transition-colors duration-300"
                        >
                            <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                {isOpen ? (
                                    <X size={28} />
                                ) : (
                                    <Menu size={28} />
                                )}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && !hideNavItems && (
                    <div className="md:hidden fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in pt-20">
                        <Link to="/#about" className="text-white text-3xl hover:text-purple-400 transition-colors duration-300" onClick={(e) => scrollToSection('about', e)}>About</Link>
                        <Link to="/#skills" className="text-white text-3xl hover:text-purple-400 transition-colors duration-300" onClick={(e) => scrollToSection('skills', e)}>Skills</Link>
                        <Link to="/#experience" className="text-white text-3xl hover:text-purple-400 transition-colors duration-300" onClick={(e) => scrollToSection('experience', e)}>Experience</Link>
                        <Link to="/#projects" className="text-white text-3xl hover:text-purple-400 transition-colors duration-300" onClick={(e) => scrollToSection('projects', e)}>Projects</Link>
                        <Link to="/#contact" className="text-white text-3xl hover:text-purple-400 transition-colors duration-300" onClick={(e) => scrollToSection('contact', e)}>Contact</Link>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
