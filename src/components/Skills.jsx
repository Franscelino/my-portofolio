import React from 'react';

const Skills = () => {
  const hardSkills = [
    'HTML', 'CSS', 'JavaScript (JS)', 'PHP', 'MySQL', 'Python', 'Flask', 'SQLite', 'SQLAlchemy',
    'Image Recognition (Fruits-360)', 'Machine Learning (DeepAge)', 'Power BI', 
    'Ethereum & Solana Performance Testing', 'Testnet (Sepolia & Solana Devnet)', 
    'Live Transactions', 'Mempool Analysis', 'Validator Logging'
  ];

  const softSkills = [
    'Creative Problem Solving', 'Continuous Learning', 'Team Collaboration', 
    'Innovation Mindset', 'Adaptability', 'Communication', 'UI/UX Design Principles', 
    'Responsive Web Design', 'Performance Optimization', 'Web Accessibility', 'Technical Writing',
    'Scrum Framework (5 sprints, 14 days)', 'Meeting Coordination', 'Cross-divisional Team Collaboration'
  ];

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements for Skills Section */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 border border-orange-500/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Skills</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Hard Skills Section */}
            <div className="bg-gray-900/40 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <h3 className="relative text-2xl font-semibold text-white mb-6">
                Hard Skills
                <span className="block w-0 h-0.5 bg-gradient-to-r from-purple-400 to-orange-400 transition-all duration-300 group-hover:w-1/4 mt-2"></span>
              </h3>
              <div className="flex flex-wrap gap-3 relative">
                {hardSkills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-orange-400 hover:text-white transition-all duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="bg-gray-900/40 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <h3 className="relative text-2xl font-semibold text-white mb-6">
                Soft Skills
                <span className="block w-0 h-0.5 bg-gradient-to-r from-purple-400 to-orange-400 transition-all duration-300 group-hover:w-1/4 mt-2"></span>
              </h3>
              <div className="flex flex-wrap gap-3 relative">
                {softSkills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-purple-400 hover:text-white transition-all duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
