import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, MapPin, Users, Award, GraduationCap, Zap, Lightbulb, Code, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import hardSkillsExperiences from '../data/hardSkillsExperienceData';

const Experience = () => {
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  const iconComponents = {
    GraduationCap, Zap, Users, Award, Lightbulb, Code, Briefcase,
  };

  const handleNavigateToDetail = (path) => {
    navigate(path);
  };

  // Find the ongoing Kalbe internship
  const kalbeInternship = hardSkillsExperiences.find(exp => exp.status === 'ongoing');

  const experiences = [
    {
      type: 'soft-skills-overview',
      category: 'soft-skills',
      title: 'Soft Skill Experience',
      icon: 'GraduationCap',
      summary: 'My comprehensive academic journey at BINUS University, coupled with significant leadership and mentorship roles within campus organizations, has built a strong foundation in both technical and soft skills.',
      stats: 'Diverse Campus Roles',
      achievements: [
        'Specialized in Database Systems during Computer Science studies.',
        'Held prominent leadership and activist roles in BINUS Computer Club (BNCC).',
        'Mentored incoming student cohorts as a Freshman Leader & Partner.',
        'Participated in inter-campus academic mobility programs.'
      ],
      period: '2022 - Present',
      location: 'BINUS University (Bandung & Jakarta)',
      detailPath: '/experience/soft-skills'
    },
    {
      type: 'hard-skills-overview',
      category: 'hard-skills',
      title: 'Hard Skill Experience',
      icon: 'Zap',
      summary: 'Actively engaged in cutting-edge blockchain bootcamps and prominent industry events, continuously expanding knowledge in Decentralized Finance (DeFi), DApp development, and high-performance blockchain technologies.',
      stats: 'Continuous Industry Learning',
      achievements: [
        'Completed multiple intensive blockchain bootcamps (Lisk, ICP, Monad).',
        'Participated in key Decentralized Finance (DeFi) and Web3 conferences (Defvest Bandung).',
        'Gained hands-on experience with various blockchain protocols and tools.',
        'Networked with leaders and innovators in the Web3 space.'
      ],
      period: '2023 - 2024',
      location: 'Various Locations (Online, Jakarta, Bandung)',
      detailPath: '/experience/hard-skills'
    }
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Background subtle elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-48 h-48 rounded-full animate-pulse" style={{ border: '1px solid rgba(0, 229, 255, 0.15)' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-32 h-32 rounded-full" style={{ border: '1px solid rgba(0, 229, 255, 0.1)', animation: 'pulseSlow 4s infinite' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-eyebrow mb-4">Track record</p>
          <h2 className="section-title">
            My <span style={{ color: 'var(--color-accent)' }}>Experience</span>
          </h2>
          <div className="w-16 h-px mx-auto mb-6" style={{ backgroundColor: 'var(--color-accent)' }}></div>
          <p className="text-base md:text-lg max-w-2xl mx-auto px-4" style={{ color: 'var(--color-text-muted)' }}>
            Explore my journey through academic excellence, organizational leadership, and intensive tech bootcamps.
          </p>
        </motion.div>

        {/* Kalbe Internship Highlight Card */}
        {kalbeInternship && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <div
              className="card-base p-6 sm:p-8 relative overflow-hidden interactive-hover cursor-pointer"
              style={{ borderColor: 'rgba(0, 229, 255, 0.3)' }}
              onClick={() => handleNavigateToDetail('/experience/hard-skills')}
            >
              {/* Subtle accent glow on the card */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.03) 0%, transparent 50%)' }}></div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center flex-shrink-0 pointer-events-none" style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)', border: '1px solid rgba(0, 229, 255, 0.2)' }}>
                    <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div className="pointer-events-none">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{kalbeInternship.title}</h3>
                      <span className="badge-ongoing">Ongoing</span>
                    </div>
                    <p className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>{kalbeInternship.company}</p>
                    <p className="text-xs mt-1 flex items-center gap-3" style={{ color: 'var(--color-text-muted)' }}>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {kalbeInternship.date}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {kalbeInternship.location}</span>
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 flex-shrink-0 pointer-events-none" style={{ color: 'var(--color-text-muted)' }} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { number: '2+', label: 'Years Experience' },
            { number: '7+', label: 'Major Roles' },
            { number: '4+', label: 'Organizations' },
            { number: '99,9%', label: 'Dedication' },
          ].map((stat, index) => (
            <div key={index} className="card-base text-center p-4 sm:p-6 interactive-hover">
              <div className="text-2xl sm:text-3xl font-bold mb-1 pointer-events-none" style={{ color: 'var(--color-accent)' }}>{stat.number}</div>
              <div className="text-xs uppercase tracking-wider pointer-events-none" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Experience Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {experiences.map((experience, index) => {
            const IconComp = iconComponents[experience.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
                whileHover={{ scale: 1.02 }}
                className="card-base p-6 sm:p-8 cursor-pointer hover:-translate-y-1 transition-all duration-500 interactive-hover"
                onMouseEnter={() => setActiveSection(experience.type)}
                onMouseLeave={() => setActiveSection(null)}
                onClick={() => handleNavigateToDetail(experience.detailPath)}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon + Title */}
                  <div className="flex items-center mb-6">
                    <div className="mr-3 sm:mr-4 transition-all duration-300 pointer-events-none" style={{ color: 'var(--color-accent)' }}>
                      {IconComp && <IconComp className="w-10 h-10 sm:w-12 sm:h-12" />}
                    </div>
                    <div className="flex-1 pointer-events-none">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {experience.title}
                      </h3>
                      <div className="h-px w-12 sm:w-16 mt-2 transition-all duration-500" style={{
                        backgroundColor: 'var(--color-accent)',
                        transform: activeSection === experience.type ? 'scaleX(1.5)' : 'scaleX(1)',
                        transformOrigin: 'left',
                      }}></div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base mb-4 sm:mb-6 flex-grow pointer-events-none" style={{ color: 'var(--color-text-muted)' }}>
                    {experience.summary}
                  </p>

                  {/* Period & Location */}
                  <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6 pointer-events-none">
                    <div className="flex items-center text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 mr-2" style={{ color: 'var(--color-accent)' }} />
                      <span style={{ color: 'var(--color-text-muted)' }}>Period:</span>
                      <span className="text-white font-medium ml-1">{experience.period}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm">
                      <MapPin className="w-3 h-3 mr-2" style={{ color: 'var(--color-accent)' }} />
                      <span style={{ color: 'var(--color-text-muted)' }}>Location:</span>
                      <span className="text-white font-medium ml-1">{experience.location}</span>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-semibold rounded-lg mb-4 sm:mb-6 self-start pointer-events-none" style={{
                    backgroundColor: 'rgba(0, 229, 255, 0.1)',
                    color: 'var(--color-accent)',
                    border: '1px solid rgba(0, 229, 255, 0.2)',
                  }}>
                    {experience.stats}
                  </div>

                  {/* Key Achievements */}
                  <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8 pointer-events-none">
                    <h4 className="text-sm sm:text-base text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-none space-y-1 sm:space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 mr-2 sm:mr-3" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                          <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-muted)' }}>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="text-center mt-auto pointer-events-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigateToDetail(experience.detailPath);
                      }}
                      className="btn-primary group/btn interactive-hover text-sm"
                    >
                      <span className="relative mr-2 pointer-events-none">See Details</span>
                      <ArrowRight className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-all duration-300 pointer-events-none" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
