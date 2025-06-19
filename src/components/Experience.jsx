import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Calendar, MapPin, Users, Award, GraduationCap, Zap, Link, Lightbulb, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const iconComponents = {
    GraduationCap: GraduationCap,
    Zap: Zap,
    Users: Users,
    Award: Award,
    Lightbulb: Lightbulb,
    Code: Code,
    Link: Link,
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigateToDetail = (path) => {
    navigate(path);
  };

  const experiences = [
    {
      type: 'soft-skills-overview',
      category: 'soft-skills',
      title: 'Soft Skill Experience',
      color: 'from-blue-500 to-purple-600',
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
      color: 'from-green-500 to-cyan-500',
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
    <section id="experience" className="py-24 bg-black relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-orange-900/10"></div>
        <div className="absolute top-1/4 right-1/6 w-48 h-48 border border-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-32 h-32 border border-orange-500/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}

        <div
          className="absolute w-64 h-64 rounded-full pointer-events-none transition-all duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)',
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"> {/* Adjusted font size for mobile */}
              My
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 ml-2 md:ml-4"> {/* Adjusted spacing */}
                Experience
              </span>
            </h2>
            <div className="flex justify-center space-x-2 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4"> {/* Adjusted font size and added horizontal padding */}
              Explore my journey through academic excellence, organizational leadership, and intensive tech bootcamps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"> {/* Adjusted grid for mobile */}
            <div className="text-center p-4 sm:p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-purple-500/50 transition-all duration-300"> {/* Adjusted padding */}
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">2+</div> {/* Adjusted font size */}
              <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-orange-500/50 transition-all duration-300"> {/* Adjusted padding */}
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">7+</div> {/* Adjusted font size */}
              <div className="text-xs sm:text-sm text-gray-400">Major Roles/Bootcamps</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-pink-500/50 transition-all duration-300"> {/* Adjusted padding */}
              <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2">4+</div> {/* Adjusted font size */}
              <div className="text-xs sm:text-sm text-gray-400">Organizations/Bootcamps</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300"> {/* Adjusted padding */}
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">100%</div> {/* Adjusted font size */}
              <div className="text-xs sm:text-sm text-gray-400">Passion & Dedication</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 cursor-pointer hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2" // Adjusted padding
                onMouseEnter={() => setActiveSection(experience.type)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl sm:text-5xl mr-3 sm:mr-4 group-hover:scale-110 transition-all duration-300"> {/* Adjusted icon size */}
                      {iconComponents[experience.icon] && React.createElement(iconComponents[experience.icon], { className: "w-10 h-10 sm:w-12 sm:h-12" })} {/* Adjusted icon size */}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${experience.color} group-hover:scale-105 transition-all duration-300`}> {/* Adjusted font size */}
                        {experience.title}
                      </h3>
                      <div className={`h-1 w-12 sm:w-16 bg-gradient-to-r ${experience.color} rounded-full mt-1 sm:mt-2 transform origin-left transition-all duration-500 ${activeSection === experience.type ? 'scale-x-150' : 'scale-x-100'}`}></div> {/* Adjusted width and spacing */}
                    </div>
                  </div>

                  <p className="text-sm sm:text-lg text-gray-300 mb-4 sm:mb-6 group-hover:text-white transition-all duration-300 flex-grow"> {/* Adjusted font size and spacing */}
                    {experience.summary}
                  </p>

                  <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6"> {/* Adjusted gap and spacing */}
                    <div className="flex items-center text-xs sm:text-sm"> {/* Adjusted font size */}
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mr-2 sm:mr-3 flex-shrink-0`}></div> {/* Adjusted spacing */}
                      <span className="text-gray-400 capitalize mr-1">Period:</span>
                      <span className="text-white font-semibold">{experience.period}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm"> {/* Adjusted font size */}
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mr-2 sm:mr-3 flex-shrink-0`}></div> {/* Adjusted spacing */}
                      <span className="text-gray-400 capitalize mr-1">Location:</span>
                      <span className="text-white font-semibold">{experience.location}</span>
                    </div>
                  </div>

                  <div className={`inline-block px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r ${experience.color} text-white text-xs sm:text-sm font-bold rounded-full mb-4 sm:mb-6`}> {/* Adjusted padding and font size */}
                    {experience.stats}
                  </div>

                  <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8"> {/* Adjusted spacing */}
                    <h4 className="text-sm sm:text-base text-white font-semibold mb-2">Key Achievements:</h4> {/* Adjusted font size */}
                    <ul className="list-none space-y-1 sm:space-y-2 text-gray-300"> {/* Adjusted spacing */}
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-400 flex-shrink-0" /> {/* Adjusted icon size */}
                          <span className="text-xs sm:text-sm">{achievement}</span> {/* Adjusted font size */}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center mt-auto">
                    <button
                      onClick={() => handleNavigateToDetail(experience.detailPath)}
                      className="group relative inline-flex items-center px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-purple-600 to-orange-600 rounded-full hover:from-purple-500 hover:to-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25" // Adjusted padding and font size
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-all duration-300"></div>

                      <span className="relative mr-2">See Details</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 relative group-hover:translate-x-1 transition-all duration-300" /> {/* Adjusted icon size */}
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 opacity-10"> {/* Adjusted size */}
                  <div className={`absolute inset-0 bg-gradient-to-tl ${experience.color} transform rotate-45 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-full`}></div> {/* Adjusted translation */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
