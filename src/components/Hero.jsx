import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 section-padding">
      {/* Dynamic Background Elements - Menggunakan kelas global untuk konsistensi */}
      <div className="animated-bg-elements">
        <div 
          className="blob-effect w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
          style={{
            left: mousePosition.x / 15,
            top: mousePosition.y / 15,
          }}
        />
        <div className="blob-effect top-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-blue-500/5 animate-pulse"></div>
        <div className="blob-effect bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="blob-effect top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/3 to-purple-500/3 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Enhanced Floating Elements - Menggunakan kelas global untuk konsistensi */}
      <div className="animated-bg-elements">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle-effect animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Geometric Shapes - Menggunakan kelas global untuk konsistensi */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-purple-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-16 border border-orange-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border border-pink-500/20 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto pt-12">
          {/* Enhanced Tagline */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest">
                Crafting Digital Futures
              </p>
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>
          </div>

          {/* Main Heading with Enhanced Effects - Menggunakan kelas global untuk teks gradien */}
          <div className={`relative mb-8 group transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight relative">
              <span className="inline-block transition-transform duration-300">
                Innovating{' '}
              </span>
              <span className="inline-block text-gradient-primary animate-gradient">
                Student
              </span>
            </h1>
            
            {/* Floating Icons */}
            <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30 animate-pulse">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-500/30 animate-pulse">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
            </div>
          </div>

          {/* Enhanced Subtitle - Menggunakan kelas global untuk teks gradien */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Exploring, building, and <span className="text-gradient-primary font-semibold">learning through code</span> to create impactful digital solutions.
            </p>
          </div>

          {/* Enhanced CTA Button - Menggunakan kelas global btn-primary */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-20">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 scale-110"></div>
                <button className="relative px-10 py-4 bg-gradient-to-r from-purple-500/10 to-orange-500/10 backdrop-blur-sm border border-purple-500/50 text-white font-semibold rounded-2xl transition-all duration-300 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-orange-500/20 hover:scale-105 active:scale-95 flex items-center gap-3">
                  <span>Explore My Website</span>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full animate-pulse"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col items-center space-y-3 group cursor-pointer">
              <div className="bottom-20 mb-4 text-xs text-gray-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Scroll Down
              </div>

              <div className="relative">
                <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce group-hover:text-purple-400 transition-colors duration-300" />
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-purple-500/50 via-pink-500/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations (tetap di sini karena spesifik untuk Hero) */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-15px) translateX(5px) rotate(90deg); 
          }
          50% { 
            transform: translateY(-25px) translateX(-5px) rotate(180deg); 
          }
          75% { 
            transform: translateY(-15px) translateX(5px) rotate(270deg); 
          }
        }
        
        @keyframes gradient {
          0%, 100% { 
            background-position: 0% 50%; 
          }
          50% { 
            background-position: 100% 50%; 
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
