import React, { useState, useEffect } from 'react';
import { Code, Database, Palette, Users, Zap, Brain, Globe, Trophy } from 'lucide-react';

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
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Responsive Design', 'UI/UX Principles'],
      color: "from-blue-500 to-cyan-400",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-8 h-8" />,
      skills: ['PHP', 'Python', 'Flask', 'MySQL', 'SQLite', 'SQLAlchemy'],
      color: "from-green-500 to-emerald-400",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: ['Image Recognition', 'Machine Learning', 'DeepAge', 'Fruits-360', 'Python AI'],
      color: "from-purple-500 to-pink-400",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop"
    },
    {
      title: "Blockchain & Analytics",
      icon: <Zap className="w-8 h-8" />,
      skills: ['Ethereum Testing', 'Solana Performance', 'Testnet', 'Mempool Analysis', 'Power BI'],
      color: "from-orange-500 to-red-400",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop"
    },
    {
      title: "Creative & Design",
      icon: <Palette className="w-8 h-8" />,
      skills: ['UI/UX Design', 'Creative Problem Solving', 'Innovation Mindset', 'Web Accessibility'],
      color: "from-pink-500 to-rose-400",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
    },
    {
      title: "Leadership & Collaboration",
      icon: <Users className="w-8 h-8" />,
      skills: ['Team Collaboration', 'Scrum Framework', 'Meeting Coordination', 'Technical Writing'],
      color: "from-indigo-500 to-blue-400",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
    }
  ];

  const achievements = [
    { icon: <Globe className="w-6 h-6" />, text: "5+ Web Applications Built", color: "text-blue-400" },
    { icon: <Trophy className="w-6 h-6" />, text: "14-Day Sprint Cycles", color: "text-green-400" },
    { icon: <Zap className="w-6 h-6" />, text: "Blockchain Testing Expert", color: "text-orange-400" },
    { icon: <Brain className="w-6 h-6" />, text: "AI Model Implementation", color: "text-purple-400" }
  ];

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
              A comprehensive showcase of technical expertise and creative abilities, 
              spanning from cutting-edge web development to advanced machine learning implementations.
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
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
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



      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-20" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-20" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-20" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-bounce opacity-20" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default Skills;