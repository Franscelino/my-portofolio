import React from 'react';
import { Mail, Instagram, Linkedin, Github, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/franscelinomelvynn', icon: <Instagram className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/franscelino-melvyn-5874a1292', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/Franscelino', icon: <Github className="w-5 h-5" /> },
    { name: 'Discord', href: 'https://discordapp.com/users/melvyn18', icon: <MessageCircle className="w-5 h-5" /> },
    { name: 'Phone', href: 'tel:+6281221434455', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0, 229, 255, 0.15), transparent)' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-eyebrow mb-4">Get in touch</p>
          <h2 className="section-title">
            Contact <span style={{ color: 'var(--color-accent)' }}>Me</span>
          </h2>
          <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: 'var(--color-accent)' }}></div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-light mb-12 tracking-wide"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Let's create something <span className="font-semibold text-white">extraordinary.</span>
        </motion.p>

        {/* Email — large with underline expand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <a
            href="mailto:francelinomelvyn@gmail.com"
            className="link-underline-expand text-2xl sm:text-3xl md:text-4xl font-bold text-white transition-colors duration-300 interactive-hover"
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <span className="flex items-center justify-center gap-3 pointer-events-none">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: 'var(--color-accent)' }} />
              francelinomelvyn@gmail.com
            </span>
          </a>
        </motion.div>

        {/* Social links — horizontal, clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-6 sm:gap-8"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-colors duration-300 interactive-hover"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
              aria-label={link.name}
            >
              <div className="p-3 rounded-lg transition-all duration-300 group-hover:bg-[rgba(0,229,255,0.1)] pointer-events-none" style={{ border: '1px solid var(--color-border)' }}>
                {link.icon}
              </div>
              <span className="text-xs uppercase tracking-wider pointer-events-none">{link.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
