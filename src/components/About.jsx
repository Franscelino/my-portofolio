import React, { useState, useEffect } from 'react';
import { Heart, Coffee, Code2, Lightbulb, Users, BookOpen, Award, MapPin } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('journey');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '3+', label: 'Years Learning', icon: <BookOpen className="w-5 h-5" /> },
    { number: '15+', label: 'Projects Built', icon: <Code2 className="w-5 h-5" /> },
    { number: '5+', label: 'Technologies', icon: <Lightbulb className="w-5 h-5" /> },
    { number: '100%', label: 'Passion', icon: <Heart className="w-5 h-5" /> }
  ];

  const interests = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Blockchain Development', desc: 'Deep understanding of decentralized applications and smart contracts' },
    { icon: <Lightbulb className="w-6 h-6" />, title: 'AI & Machine Learning', desc: 'Exploring intelligent solutions and automation' },
    { icon: <Users className="w-6 h-6" />, title: 'Team Collaboration', desc: 'Working together to achieve common goals' },
    { icon: <Coffee className="w-6 h-6" />, title: 'Continuous Learning', desc: 'Always eager to discover new technologies' }
  ];

  const tabContent = {
    journey: {
      title: "My Journey",
      content: "My venture into technology sparked from innate curiosity. From computer science fundamentals, I gravitated towards the disruptive potential of blockchain and the intelligence of AI. Each project and new skill acquired refined my passion, transforming intricate concepts into functional innovations."
    },
    philosophy: {
      title: "My Philosophy",
      content: "I see myself as a work in progress, constantly striving to become a better version of who I was yesterday. Whether it's learning a new tech stack, organizing an event, or simplifying complex ideas into action, growth never stops.\n\n“We are what we repeatedly do. Excellence, then, is not an act, but a habit.”\n— Aristotle"
    },
    goals: {
      title: "My Goals",
      content: "I aspire to forge meaningful advancements in blockchain and AI, crafting solutions that are both technically robust and intuitively impactful. My objective is to collaborate with visionary teams, continuously expanding my expertise to contribute to pioneering endeavors. Ultimately, I aim to simplify complexity and cultivate lasting value in the digital sphere."
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 border border-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 border border-orange-500/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-30" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-20" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Title */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Profile Section */}
            <div className={`relative group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Enhanced Profile Image */}
              <div className="relative flex justify-center items-center mb-8">
                <div className="relative p-3 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-orange-600/30 rounded-3xl backdrop-blur-sm border border-gray-700/50 shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-gray-800 group-hover:border-purple-400 transition-all duration-500">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-bounce">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 animate-bounce">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group/stat">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-purple-400 group-hover/stat:text-pink-400 transition-colors duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Technology</span> Student
                </h3>

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.keys(tabContent).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-purple-500 to-orange-500 text-white'
                          : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      {tabContent[tab].title}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h4 className="text-xl font-semibold text-white mb-4">{tabContent[activeTab].title}</h4>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {tabContent[activeTab].content}
                  </p>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Based in Indonesia</span>
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              What I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Passionate</span> About
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <div key={index} className="group bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-purple-400 mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    {interest.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
