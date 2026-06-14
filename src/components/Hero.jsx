import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Hero3DCanvas from './Hero3DCanvas';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 50;
      const y = (e.clientY / window.innerHeight - 0.5) * 50;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 sm:py-32 md:py-40" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* 3D Canvas Background */}
      <Hero3DCanvas />

      {/* Subtle parallax background glow */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        animate={{
          x: mousePosition.x * -0.5,
          y: mousePosition.y * -0.5
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[120px]" style={{ backgroundColor: 'rgba(0, 229, 255, 0.06)' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-[100px]" style={{ backgroundColor: 'rgba(0, 229, 255, 0.04)' }}></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 pointer-events-auto">
        <div className="max-w-5xl mx-auto pt-12">
          
          {/* Eyebrow tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-eyebrow mb-6 sm:mb-8"
          >
            Designing the future of digital elegance
          </motion.p>

          {/* Main Heading — large, black weight, wide tracking */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-2">
              Franscelino
            </h1>
            <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl" style={{ color: 'var(--color-accent)' }}>
              Melvyn
            </h1>
          </motion.div>

          {/* Sub-tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed px-4"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Full Stack Developer & Creative Technologist — exploring, building, and learning through code to craft impactful digital solutions.
          </motion.p>

          {/* CTA — "Explore My Work" with arrow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            className="flex justify-center mb-20 sm:mb-24"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="btn-outline-accent group interactive-hover px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base"
            >
              <span className="pointer-events-none">Explore My Work</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 pointer-events-none" />
            </motion.button>
          </motion.div>

          {/* Scroll indicator — minimal line */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-px h-12 sm:h-16" style={{ background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
