import React, { useState, useEffect } from 'react';
import { Code, Database, Palette, Users, Zap, Brain, Globe, Trophy, Server, GraduationCap } from 'lucide-react'; // Added Server and GraduationCap for more specific icons

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillCategories = [
    {
      title: "Blockchain Development",
      icon: <Zap className="w-8 h-8" />,
      skills: ['Solidity', 'Hardhat', 'Smart Contracts', 'Ethereum Testnets', 'Solana Performance Analysis', 'Decentralized Applications (DApps)'],
      color: "from-orange-500 to-red-400",
      // Removed image property
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: ['Exploratory Data Analysis (EDA)', 'Data Preprocessing', 'Scikit-learn', 'TensorFlow', 'YOLO (Object Detection)'],
      color: "from-purple-500 to-pink-400",
      // Removed image property
    },
    {
      title: "Database & Data Engineering",
      icon: <Database className="w-8 h-8" />,
      skills: ['Database Design', 'SQL (MySQL/SQLite)', 'Data Pipelines (Kafka)', 'ETL Processes', 'Data Modeling'],
      color: "from-blue-500 to-cyan-400",
      // Removed image property
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'UI/UX Principles'],
      color: "from-indigo-500 to-blue-400",
      // Removed image property
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: ['Node.js', 'Python (Flask)', 'PHP (Laravel)', 'RESTful APIs', 'API Design'],
      color: "from-green-500 to-emerald-400",
      // Removed image property
    },
    {
      title: "Soft Skills & Project Management",
      icon: <Users className="w-8 h-8" />,
      skills: ['Team Collaboration', 'Agile Methodologies (Scrum)', 'Problem Solving', 'Technical Documentation', 'UI/UX Design Concepts'],
      color: "from-pink-500 to-rose-400",
      // Removed image property
    }
  ];

  const achievements = [
    { icon: <GraduationCap className="w-6 h-6" />, text: "Lisk & ICP Bootcamp Certificate Recipient", color: "text-purple-400" },
    { icon: <Globe className="w-6 h-6" />, text: "Developed AI-Powered Career Finder Web App (NextPath)", color: "text-blue-400" },
    { icon: <Zap className="w-6 h-6" />, text: "Conducted Comparative Blockchain Performance Analysis (Solana vs Ethereum)", color: "text-orange-400" },
    { icon: <Database className="w-6 h-6" />, text: "Experienced in Data Pipeline & Database Management (Kafka)", color: "text-emerald-400" },
    { icon: <Brain className="w-6 h-6" />, text: "Implemented ML Techniques for EDA & Predictive Modeling", color: "text-pink-400" }
  ];

  // getPlaceholderUrl function is no longer needed as images are removed.

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        />
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Skills</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A comprehensive display of technical expertise and creative abilities gained through education, bootcamps, and real-world projects.
            </p>
            
            {/* Achievement Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
                  <span className={achievement.color}>{achievement.icon}</span>
                  <span className="text-gray-300 text-sm font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600 transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                {/* Icon at the top, replacing the image */}
                <div className="p-6 pb-0 flex justify-center lg:justify-start">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-4">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between py-2 px-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all duration-200"
                      >
                        <span className="text-gray-300 text-sm font-medium">{skill}</span>
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: `${skillIndex * 50}ms` }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements (unchanged as they are background animations) */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-20" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-20" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-20" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-bounce opacity-20" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default Skills;
