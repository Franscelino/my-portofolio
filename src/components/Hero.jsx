import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0); // Memastikan halaman scroll ke atas saat dimuat

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 section-padding py-24 sm:py-32 md:py-40"> {/* Added responsive padding */}
      {/* Dynamic Background Elements - Menggunakan kelas global untuk konsistensi */}
      <div className="animated-bg-elements">
        {/* Mouse follower blob - disesuaikan agar tidak terlalu besar di mobile */}
        <div
          className="blob-effect w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
          style={{
            left: mousePosition.x / 15,
            top: mousePosition.y / 15,
          }}
        />
        {/* Other blobs - disesuaikan ukurannya agar tidak terlalu memenuhi layar mobile */}
        <div className="blob-effect top-10 left-5 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-500/5 to-blue-500/5 animate-pulse"></div>
        <div className="blob-effect bottom-10 right-5 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-orange-500/5 to-red-500/5 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="blob-effect top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-cyan-500/3 to-purple-500/3 animate-pulse" style={{animationDelay: '2s'}}></div>
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
        <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-20 sm:h-20 border border-purple-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 border border-orange-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 sm:w-12 sm:h-12 border border-pink-500/20 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto pt-12">
          {/* Enhanced Tagline */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6"> {/* Adjusted spacing */}
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 animate-pulse" /> {/* Adjusted icon size */}
              <p className="text-xs sm:text-base text-gray-400 uppercase tracking-widest"> {/* Adjusted font size */}
                Crafting Digital Futures
              </p>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 animate-pulse" style={{animationDelay: '0.5s'}} /> {/* Adjusted icon size */}
            </div>
          </div>

          {/* Main Heading with Enhanced Effects - Menggunakan kelas global untuk teks gradien */}
          <div className={`relative mb-6 sm:mb-8 group transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> {/* Adjusted spacing */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 sm:mb-6 leading-tight relative"> {/* Adjusted font sizes for better mobile scaling */}
              <span className="inline-block transition-transform duration-300">
                Innovating{' '}
              </span>
              <span className="inline-block text-gradient-primary animate-gradient">
                Student
              </span>
            </h1>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 opacity-0 group-hover:opacity-100 transition-all duration-500"> {/* Adjusted position */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30 animate-pulse"> {/* Adjusted size */}
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" /> {/* Adjusted icon size */}
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"> {/* Adjusted position */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-500/30 animate-pulse"> {/* Adjusted size */}
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" /> {/* Adjusted icon size */}
              </div>
            </div>
          </div>

          {/* Enhanced Subtitle - Menggunakan kelas global untuk teks gradien */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4"> {/* Adjusted font size and added padding */}
              Exploring, building, and <span className="text-gradient-primary font-semibold">learning through code</span> to create impactful digital solutions.
            </p>
          </div>

          {/* Enhanced CTA Button - Menggunakan kelas global btn-primary */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-16 sm:mb-20"> {/* Adjusted spacing */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 scale-110"></div>
                <button className="relative px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-purple-500/10 to-orange-500/10 backdrop-blur-sm border border-purple-500/50 text-white font-semibold rounded-2xl transition-all duration-300 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-orange-500/20 hover:scale-105 active:scale-95 flex items-center gap-2 sm:gap-3"> {/* Adjusted padding and gap */}
                  <span>Explore My Website</span>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full animate-pulse"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> {/* Adjusted position */}
            <div className="flex flex-col items-center space-y-2 sm:space-y-3 group cursor-pointer"> {/* Adjusted spacing */}
              <div className="mb-2 text-xs text-gray-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"> {/* Adjusted spacing */}
                Scroll Down
              </div>

              <div className="relative">
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 animate-bounce group-hover:text-purple-400 transition-colors duration-300" /> {/* Adjusted icon size */}
                <div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 w-px h-12 sm:h-16 bg-gradient-to-b from-purple-500/50 via-pink-500/30 to-transparent"></div> {/* Adjusted height and position */}
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
