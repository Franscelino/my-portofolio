import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="relative mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Creative
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                Developer
              </span>
            </h1>
            <div className="absolute -top-6 -right-6 w-20 h-20 border border-purple-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-orange-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Crafting digital experiences through code, creativity, and continuous learning
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
              <a
                href="#projects"
                className="relative block px-8 py-4 border border-purple-500/50 text-white font-medium rounded-xl transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/5 active:scale-95"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-max left-1/2 transform -translate-x-1/2 animate-bounce place-items-end">
            <div className="flex flex-col items-center space-y-2">
              <ChevronDownIcon className="w-6 h-6 text-gray-400" />
              <div className="w-px h-8 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;