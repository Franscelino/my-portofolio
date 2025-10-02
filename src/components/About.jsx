import React, { useState, useEffect } from 'react';
// 1. Import ikon Download
import { Heart, Coffee, Code2, Lightbulb, Users, BookOpen, MapPin, Download } from 'lucide-react';

const About = () => {
  // ... (semua hooks dan konstanta data tidak berubah) ...
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('journey');

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      content: "Growth never stops earning, building, and improving each day. “Excellence is a habit.”  ~Aristotle Aristotle"
    },
    goals: {
      title: "My Goals",
      content: "I want to create impactful solutions in blockchain and AI, working with teams that drive innovation while keeping technology simple and valuable."
    }
  };


  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* ... (kode header dan gambar profile tidak berubah) ... */}
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
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

                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                    <div className={`relative group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="relative flex justify-center items-center mb-8">
                            <div className="relative p-3 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-orange-600/30 rounded-3xl backdrop-blur-sm border border-gray-700/50 shadow-2xl transition-all duration-500 group-hover:scale-105">
                                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-gray-800">
                                    <img
                                    src="/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover object-center transform transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0"></div>
                                </div>

                                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-bounce">
                                    <Code2 className="w-6 h-6 text-white" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 animate-bounce">
                                    <Lightbulb className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>

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
                
                    <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Technology</span> Student
                            </h3>

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

                            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                                <h4 className="text-xl font-semibold text-white mb-4">{tabContent[activeTab].title}</h4>
                                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                    {tabContent[activeTab].content}
                                </p>
                            </div>
                        </div>
                        
                        {/* === 2. TAMBAHKAN TOMBOL DOWNLOAD CV DI SINI === */}
                        <div className="pt-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">Based in Indonesia</span>
                            </div>
                            <a 
                                href="/Franscelino_Melvyn_CV.pdf" 
                                download="Franscelino_Melvyn_CV.pdf"
                                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 group"
                            >
                                <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>

                {/* ... (kode passion/interests tidak berubah) ... */}
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