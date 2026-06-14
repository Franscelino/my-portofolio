import React, { useState } from 'react';
import { BookOpen, Code2, Lightbulb, Heart, Coffee, Users, MapPin, Download } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const stats = [
    { number: '2+', label: 'Years Learning', icon: <BookOpen className="w-5 h-5" /> },
    { number: '8+', label: 'Projects Built', icon: <Code2 className="w-5 h-5" /> },
    { number: '5+', label: 'Technologies', icon: <Lightbulb className="w-5 h-5" /> },
    { number: '99,9%', label: 'Passion', icon: <Heart className="w-5 h-5" /> }
  ];

  const interests = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Blockchain Development', desc: 'Deep understanding of decentralized applications and smart contracts' },
    { icon: <Lightbulb className="w-6 h-6" />, title: 'AI & Machine Learning', desc: 'Exploring intelligent solutions and automation' },
    { icon: <Users className="w-6 h-6" />, title: 'Data Engineering', desc: 'Managing pipelines, databases, and streaming data for analytics' },
    { icon: <Coffee className="w-6 h-6" />, title: 'Software Development', desc: 'Creating reliable applications with clean and efficient code' }
  ];

  const tabContent = {
    journey: {
      title: "My Journey",
      content: "I began with computer science fundamentals and grew into blockchain and AI. Every project sharpened my skills and turned ideas into real solutions."
    },
    philosophy: {
      title: "My Philosophy",
      content: "Growth never stops earning, building, and improving each day. \"Excellence is a habit.\"  ~Aristotle"
    },
    goals: {
      title: "My Goals",
      content: "I want to create impactful solutions in blockchain and AI, working with teams that drive innovation while keeping technology simple and valuable."
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-eyebrow mb-4">Get to know me</p>
          <h2 className="section-title">
            About <span style={{ color: 'var(--color-accent)' }}>Me</span>
          </h2>
          <div className="w-16 h-px mx-auto" style={{ backgroundColor: 'var(--color-accent)' }}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Profile photo + Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Profile photo — rounded minimal */}
            <div className="relative flex justify-center items-center mb-8">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden transition-all duration-500 group-hover:shadow-lg" style={{ border: '1px solid var(--color-border)' }}>
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Stats — 4 columns, numbers large, labels small uppercase */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="card-base p-4 group/stat interactive-hover text-center">
                  <div className="flex items-center justify-center gap-2 mb-1 pointer-events-none">
                    <span style={{ color: 'var(--color-accent)' }}>{stat.icon}</span>
                    <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                  </div>
                  <div className="text-xs uppercase tracking-wider pointer-events-none" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        
          {/* Right: Bio + Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-wide">
                Passionate <span style={{ color: 'var(--color-accent)' }}>Technology</span> Student
              </h3>

              {/* Tabs — active: accent color, non-active: muted */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 interactive-hover"
                    style={{
                      backgroundColor: activeTab === tab ? 'var(--color-accent)' : 'var(--color-bg-secondary)',
                      color: activeTab === tab ? 'var(--color-bg-primary)' : 'var(--color-text-muted)',
                      border: `1px solid ${activeTab === tab ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    }}
                  >
                    <span className="pointer-events-none">{tabContent[tab].title}</span>
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="card-base p-6">
                <h4 className="text-lg font-semibold text-white mb-3">{tabContent[activeTab].title}</h4>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {tabContent[activeTab].content}
                </p>
              </div>
            </div>
            
            {/* Location + Download CV */}
            <div className="pt-4 flex items-center justify-between">
              <div className="flex items-center gap-2" style={{ color: 'var(--color-text-muted)' }}>
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Based in Indonesia</span>
              </div>
              <a 
                href="/Franscelino_Melvyn_CV.pdf" 
                download="Franscelino_Melvyn_CV.pdf"
                className="btn-outline-accent interactive-hover"
              >
                <Download className="w-4 h-4 mr-2 pointer-events-none" />
                <span className="pointer-events-none">Download CV</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Passions / Interests Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center tracking-wide">
            What I'm <span style={{ color: 'var(--color-accent)' }}>Passionate</span> About
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.03 }}
                className="card-base p-6 group interactive-hover"
              >
                <div className="mb-4 transition-colors duration-300 pointer-events-none" style={{ color: 'var(--color-accent)' }}>
                  {interest.icon}
                </div>
                <h4 className="text-base font-semibold text-white mb-2 pointer-events-none">{interest.title}</h4>
                <p className="text-sm pointer-events-none" style={{ color: 'var(--color-text-muted)' }}>{interest.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;