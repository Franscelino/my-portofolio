import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
        const sectionId = path.substring(2);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const targetElement = document.getElementById(sectionId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        setIsOpen(false);
    };

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled 
                    ? 'border-b' 
                    : 'border-b border-transparent'
            }`}
            style={{
                backgroundColor: scrolled ? 'rgba(11, 11, 11, 0.85)' : 'rgba(11, 11, 11, 0.4)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderColor: scrolled ? 'var(--color-border)' : 'transparent',
            }}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="relative group interactive-hover">
                    <Link to="/" onClick={(e) => handleNavigate('/#', e)} className="flex items-center interactive-hover">
                        <span className="text-xl sm:text-2xl font-black tracking-widest text-white transition-all duration-300 group-hover:text-[var(--color-accent)] pointer-events-none">
                            FM
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                {!hideNavItems && (
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                        <Link to="/#about" onClick={(e) => handleNavigate('/#about', e)} className="nav-link interactive-hover">About</Link>
                        <Link to="/#experience" onClick={(e) => handleNavigate('/#experience', e)} className="nav-link interactive-hover">Experience</Link>
                        <Link to="/#projects" onClick={(e) => handleNavigate('/#projects', e)} className="nav-link interactive-hover">Projects</Link>
                        <Link to="/#certifications" onClick={(e) => handleNavigate('/#certifications', e)} className="nav-link interactive-hover">Certifications</Link>
                    </div>
                )}

                {/* CTA: Download CV — outline style, hover → solid fill */}
                {!hideNavItems && (
                    <div className="hidden md:block">
                        <a
                            href="/CV_Melvyn.pdf"
                            download="CV_Melvyn.pdf"
                            className="btn-outline-accent interactive-hover"
                        >
                            <Download className="w-4 h-4 mr-2 pointer-events-none" />
                            <span className="pointer-events-none">Download CV</span>
                        </a>
                    </div>
                )}

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="relative p-2 transition-colors duration-300 interactive-hover" style={{ color: 'var(--color-text-muted)' }}>
                        <div className={`transform transition-transform duration-300 pointer-events-none ${isOpen ? 'rotate-180' : ''}`}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && !hideNavItems && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 pt-20"
                        style={{ backgroundColor: 'rgba(11, 11, 11, 0.97)' }}
                    >
                        {['about', 'experience', 'projects', 'certifications'].map((section) => (
                            <Link
                                key={section}
                                to={`/#${section}`}
                                className="text-2xl font-light tracking-widest uppercase transition-colors duration-300 interactive-hover"
                                style={{ color: 'var(--color-text-muted)' }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
                                onClick={(e) => handleNavigate(`/#${section}`, e)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        ))}
                        <a 
                            href="/CV_Melvyn.pdf" 
                            download="CV_Melvyn.pdf" 
                            className="btn-outline-accent text-lg interactive-hover"
                        >
                            <Download className="w-4 h-4 mr-2 pointer-events-none" />
                            <span className="pointer-events-none">Download CV</span>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;