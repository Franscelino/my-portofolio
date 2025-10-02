import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ hideNavItems = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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
    
    const handleNavigate = (path, e) => {
        e.preventDefault();
        const sectionId = path.substring(2); // Menghapus '/#'

        if (location.pathname !== '/') {
            // Jika kita tidak di halaman utama, navigasi dulu ke sana
            navigate('/');
            // Beri sedikit waktu agar halaman utama termuat sebelum scroll
            setTimeout(() => {
                const targetElement = document.getElementById(sectionId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            // Jika sudah di halaman utama, langsung scroll
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
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
                        <Link to="/" onClick={(e) => handleNavigate('/#', e)} className="flex items-center">
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
                            <Link to="/#about" onClick={(e) => handleNavigate('/#about', e)} className="nav-link">About</Link>
                            <Link to="/#experience" onClick={(e) => handleNavigate('/#experience', e)} className="nav-link">Experience</Link>
                            <Link to="/#projects" onClick={(e) => handleNavigate('/#projects', e)} className="nav-link">Projects</Link>
                            
                            {/* === PERUBAHAN DI SINI === */}
                            <Link to="/#certifications" onClick={(e) => handleNavigate('/#certifications', e)} className="nav-link">Certifications</Link>
                        </div>
                    )}

                    {/* Contact Button Desktop */}
                    {!hideNavItems && (
                        <div className="hidden md:block">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                                <Link
                                    to="/#contact"
                                    onClick={(e) => handleNavigate('/#contact', e)}
                                    className="relative block px-6 py-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="relative p-2 text-white/80 hover:text-white transition-colors duration-300">
                            <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && !hideNavItems && (
                    <div className="md:hidden fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in pt-20">
                        <Link to="/#about" className="text-white text-3xl" onClick={(e) => handleNavigate('/#about', e)}>About</Link>
                        <Link to="/#experience" className="text-white text-3xl" onClick={(e) => handleNavigate('/#experience', e)}>Experience</Link>
                        <Link to="/#projects" className="text-white text-3xl" onClick={(e) => handleNavigate('/#projects', e)}>Projects</Link>
                        
                        {/* === PERUBAHAN DI SINI UNTUK MOBILE === */}
                        <Link to="/#certifications" className="text-white text-3xl" onClick={(e) => handleNavigate('/#certifications', e)}>Certifications</Link>
                        
                        <Link to="/#contact" className="text-white text-3xl" onClick={(e) => handleNavigate('/#contact', e)}>Contact</Link>
                    </div>
                )}
            </nav>

            {/* Menambahkan Style untuk Nav Link agar lebih rapi */}
            <style jsx>{`
                .nav-link {
                    position: relative;
                    color: rgba(255, 255, 255, 0.9);
                    font-weight: 500;
                    font-size: 1rem;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    transition: all 0.3s;
                }
                .nav-link:hover {
                    color: white;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(to right, #a855f7, #f97316);
                    transform: scaleX(0);
                    transform-origin: center;
                    transition: transform 0.3s ease-out;
                }
                .nav-link:hover::after {
                    transform: scaleX(1);
                }
            `}</style>
        </>
    );
};

export default Navbar;