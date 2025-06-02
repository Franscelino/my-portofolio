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
            {/* Profile Image - Enhanced Creative Design */}
            <div className="relative group order-2 md:order-1 flex justify-center items-center">
              <div className="relative p-2 bg-gradient-to-br from-purple-600/50 to-orange-600/50 rounded-full shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Inner border for subtle effect */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black group-hover:border-purple-400 transition-all duration-500">
                  <img 
                    src="/profile.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay for subtle color tint on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative elements around the image */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-orange-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-pulse"></div>
                <div className="absolute top-1/4 right-0 w-8 h-8 bg-purple-300 rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-all duration-700 delay-300"></div>
                <div className="absolute bottom-1/4 left-0 w-6 h-6 bg-orange-300 rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-all duration-700 delay-400"></div>
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

              {/* Skills Preview - Kept as is, assuming it's still desired */}
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
              
              {/* CTA section removed as requested */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
