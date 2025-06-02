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

      {/* Floating Elements - Increased number and slightly varied sizes/opacities */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => ( // Jumlah elemen ditingkatkan
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full" // Opacity dikelola via style
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: `${0.1 + Math.random() * 0.4}` // Opacity bervariasi
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto pt-12">
          {/* New Tagline - Menambahkan tagline singkat dan menarik */}
          <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest mb-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Crafting Digital Futures
          </p>

          {/* Main Heading - Menambahkan efek hover halus */}
          <div className="relative mb-3 group transition-transform duration-300 hover:scale-[1.01]">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              Innovating{' '} {/* Tambahkan spasi di sini */}
              <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400"> {/* Hapus class 'block' */}
                Student
              </span>
            </h1>
            <div className="absolute -top-6 -right-6 w-20 h-20 border border-purple-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-orange-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Exploring, building, and learning through code to create impactful digital solutions.
          </p>

          {/* CTA Buttons - Meningkatkan efek hover */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300"></div> {/* Opacity blur ditingkatkan */}
              <a
                href="#projects"
                className="relative block px-8 py-4 border border-purple-500/50 text-white font-medium rounded-xl transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 active:scale-95" // Menambahkan background pada hover
              >
                Explore My Projects
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

      {/* CSS for floating and fade-in animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes fadeInFromBottom {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInFromBottom 0.8s ease-out forwards;
          opacity: 0; /* Memastikan elemen dimulai tidak terlihat */
        }
      `}</style>
    </section>
  );
};

export default Hero;
