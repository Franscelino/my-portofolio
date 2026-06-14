import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'mailto:francelinomelvyn@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'Email' },
    { href: 'https://github.com/Franscelino', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/franscelino-melvyn-5874a1292', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
  ];

  return (
    <footer
      className="py-6 sm:py-8 relative"
      style={{
        backgroundColor: 'var(--color-bg-primary)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright — left */}
        <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-muted)' }}>
          &copy; {currentYear} Franscelino Melvyn. All rights reserved.
        </p>

        {/* Social links — right */}
        <div className="flex items-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 interactive-hover"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
