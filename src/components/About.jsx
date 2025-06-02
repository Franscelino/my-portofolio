import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 border border-purple-500/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 border border-orange-500/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Me</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative group order-2 md:order-1">
              <div className="relative">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 border border-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Image container */}
                <div className="relative border border-gray-700 rounded-3xl p-1 hover:border-purple-500/50 transition-all duration-300">
                  <div className="bg-gray-900/50 rounded-3xl p-6">
                    <img 
                      src="/profile.jpg" 
                      alt="Profile" 
                      className="w-full max-w-sm mx-auto rounded-2xl transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Minimal decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border border-purple-400/30 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border border-orange-400/30 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 md:order-2">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Passionate Technology Student
                </h3>
                
                <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
                  <p>
                    I am a technology student who enjoys learning, building, and experimenting through various projects. This portfolio contains the results of my journey and process in the world of digital development.
                  </p>
                  <p>
                    I believe that process is an important part of any work, and I am always open to new opportunities and collaborations.
                  </p>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                {['Creative Problem Solving', 'Continuous Learning', 'Team Collaboration', 'Innovation Mindset'].map((skill, index) => (
                  <div key={skill} className="group">
                    <div className="relative p-3 bg-gray-900/30 rounded-lg border border-gray-700 transition-all duration-300 hover:border-purple-500/40 hover:bg-gray-800/30">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <p className="relative text-xs font-medium text-gray-300 text-center">{skill}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-purple-500/50 text-white font-medium rounded-xl transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/5 active:scale-95"
                >
                  Let's Collaborate
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;