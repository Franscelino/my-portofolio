import React, { useState, useEffect } from 'react';
import { Code, Database, Brain, Users, Zap, Server } from 'lucide-react';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillCategories = [
    {
      title: "Blockchain Development",
      icon: <Zap className="w-6 h-6" />,
      skills: [
        'Solidity',
        'Smart Contracts',
        'Hardhat',
        'Ethereum Testnets',
        'DApps Development',
        'Web3.js',
        'Metamask Integration',
        'Token Standards (ERC-20, ERC-721)',
        'Solana Performance Analysis',
        'Decentralized Finance (DeFi)'
      ],
      color: "from-orange-500 to-red-400",
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        'Exploratory Data Analysis (EDA)',
        'Data Preprocessing',
        'Scikit-learn',
        'TensorFlow',
        'Keras',
        'YOLO (Object Detection)',
        'Pandas & NumPy',
        'Matplotlib & Seaborn',
        'Feature Engineering',
        'Model Evaluation',
        'Computer Vision'
      ],
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "Database & Data Engineering",
      icon: <Database className="w-6 h-6" />,
      skills: [
        'Database Design',
        'SQL (MySQL/SQLite)',
        'PostgreSQL',
        'MongoDB',
        'Data Pipelines (Kafka)',
        'Data Modeling',
        'Big Data Query',
        'Database Optimization',
        'Apache Spark'
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'CSS',
        'HTML',
        'Responsive Design',
        'UI/UX Design',
        'React Hooks',
      ],
      color: "from-indigo-500 to-blue-400",
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        'Node.js',
        'Express.js',
        'Python (Flask/Django)',
        'PHP (Laravel)',
        'RESTful APIs',
        'API Design',
        'Authentication & Authorization',
        'Microservices',
        'Docker',
        'AWS/Cloud Services',
      ],
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Soft Skills & Project Management",
      icon: <Users className="w-6 h-6" />,
      skills: [
        'Team Collaboration',
        'Agile Methodologies (Scrum)',
        'Problem Solving',
        'Technical Documentation',
        'Code Review',
        'Mentoring & Teaching',
        'Project Planning',
        'Communication Skills',
        'Leadership',
        'Time Management',
        'Critical Thinking',
        'Adaptability'
      ],
      color: "from-pink-500 to-rose-400",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative py-16 sm:py-24">
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 pt-8 sm:pt-16 pb-8 sm:pb-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 sm:mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 max-w-xl mx-auto px-4">
            Technical expertise gained through education, bootcamps, and real-world projects.
          </p>
        </div>
      </div>

      <div className="relative z-10 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 sm:p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-1 sm:space-y-2 max-h-64 sm:max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between py-1.5 px-2 sm:py-2 sm:px-3 bg-gray-800/40 rounded-lg border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200"
                    >
                      <span className="text-xs sm:text-sm text-gray-300">{skill}</span>
                      <div
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${category.color} ${activeSkill === index ? 'opacity-100' : 'opacity-30'} transition-opacity duration-300`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-5 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400/20 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-5 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Skills;
