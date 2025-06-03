import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Calendar, MapPin, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Experience = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Track mouse position for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const experiences = [
    {
      type: 'binus',
      title: 'Academic Excellence',
      color: 'from-blue-500 to-purple-600',
      icon: '🎓',
      summary: 'Computer Science at BINUS with Database specialization',
      stats: 'Ongoing Studies',
      achievements: [
        'Database Specialization Program',
        'Mobility Program Participant',
        'Advanced Labs & Research'
      ],
      keyMetrics: {
        duration: 'Ongoing',
        location: 'BINUS Bandung',
        focus: 'Database Systems'
      }
    },
    {
      type: 'bncc',
      title: 'Leadership & Organization',
      color: 'from-orange-500 to-red-500',
      icon: '🚀',
      summary: 'Event coordination and content creation at BNCC',
      stats: '200+ Event Participants',
      achievements: [
        'International Speaker Coordination',
        'Multi-Event Organization',
        'Cinematic Content Production',
        'Strategic Partnership Development'
      ],
      keyMetrics: {
        participants: '200+',
        events: '4+ Major Events',
        role: 'Lead Coordinator'
      }
    },
  ];

  const handleSeeMore = () => {
    navigate('/experience-detail'); // Use navigate to go to the new route
  };

  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden min-h-screen">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-orange-900/10"></div>
        <div className="absolute top-1/4 right-1/6 w-48 h-48 border border-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-32 h-32 border border-orange-500/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        
        {/* Floating particles */}
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

        {/* Mouse follower effect */}
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
          {/* Landing Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              My 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 ml-4">
                Experience
              </span>
            </h2>
            <div className="flex justify-center space-x-2 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Journey through academic excellence and organizational leadership
            </p>
          </div>

          {/* Experience Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-orange-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">200+</div>
              <div className="text-sm text-gray-400">Event Participants</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-pink-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-pink-400 mb-2">4+</div>
              <div className="text-sm text-gray-400">Major Events</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
          </div>

          {/* Condensed Experience Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
                onMouseEnter={() => setActiveSection(index)}
                onMouseLeave={() => setActiveSection(null)}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4 group-hover:scale-110 transition-all duration-300">
                      {experience.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${experience.color} group-hover:scale-105 transition-all duration-300`}>
                        {experience.title}
                      </h3>
                      <div className={`h-1 w-16 bg-gradient-to-r ${experience.color} rounded-full mt-2 transform origin-left transition-all duration-500 ${activeSection === index ? 'scale-x-150' : 'scale-x-100'}`}></div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-300 text-lg mb-6 group-hover:text-white transition-all duration-300">
                    {experience.summary}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {Object.entries(experience.keyMetrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-400 capitalize mr-2">{key}:</span>
                        <span className="text-white font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats Badge */}
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${experience.color} text-white text-sm font-bold rounded-full mb-6`}>
                    {experience.stats}
                  </div>

                  {/* Preview Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm mb-3">Key Achievements:</h4>
                    {experience.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-all duration-300">
                        <Award className="w-3 h-3 mr-2 text-yellow-400 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                    {experience.achievements.length > 3 && (
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <span>+{experience.achievements.length - 3} more achievements</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10">
                  <div className={`absolute inset-0 bg-gradient-to-tl ${experience.color} transform rotate-45 translate-x-4 translate-y-4 rounded-full`}></div>
                </div>

                {/* View Details Link */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200" />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to know the full story?
              </h3>
              <p className="text-gray-400 mb-8">
                Dive deeper into my journey with detailed descriptions, project photos, 
                behind-the-scenes stories, and comprehensive insights into each experience.
              </p>
            </div>

            {/* See More Button */}
            <button
              onClick={handleSeeMore}
              className="group relative inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-orange-600 rounded-full hover:from-purple-500 hover:to-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
            >
              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
              
              <span className="relative mr-3">Explore Detailed Experience</span>
              <ArrowRight className="w-6 h-6 relative group-hover:translate-x-1 transition-all duration-300" />
            </button>
            
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Detailed Timeline</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Project Photos</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>Team Stories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
