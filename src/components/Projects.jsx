import React from 'react';
import { Link } from 'react-router-dom';
import allProjectsData from '../data/projectsData'; // Import data proyek

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements for Projects Section */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-orange-500/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 border border-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Projects</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
          </div>

          {/* Projects Grid (Summary View) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {allProjectsData.map((item, index) => (
              <div key={item.id} className="bg-gray-900/40 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg relative overflow-hidden">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Project Thumbnail Image */}
                {item.thumbnailUrl && (
                  <div className="mb-4 rounded-lg overflow-hidden border border-gray-700 group-hover:border-orange-400 transition-colors duration-300">
                    <img 
                      src={item.thumbnailUrl} // Menggunakan thumbnailUrl
                      alt={item.name} 
                      className="w-full h-40 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/gray/white?text=Image+Not+Available'; }}
                    />
                  </div>
                )}

                <h4 className="relative text-xl font-semibold text-white mb-2">
                  {item.name}
                  <span className="block w-0 h-0.5 bg-gradient-to-r from-purple-400 to-orange-400 transition-all duration-300 group-hover:w-1/4 mt-2"></span>
                </h4>
                
                <ul className="relative space-y-2 text-gray-300 text-sm list-none pl-0 mb-4">
                  {item.shortDetails.map((desc, descIndex) => ( // Menggunakan shortDetails
                    <li key={descIndex} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 mr-3 mt-1 flex-shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Optional: Direct Repository Link (if still desired on summary) */}
                {item.repositoryLink && (
                  <div className="flex justify-end mt-4"> {/* Pindahkan ke kanan */}
                    <a
                      href={item.repositoryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 border border-orange-500/50 text-white text-xs font-medium rounded-lg transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 active:scale-95"
                    >
                      Repo
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* See All Projects Details Button at the very bottom */}
          <div className="text-center mt-16">
            <Link
              to="/projects/all-details" // Link ke halaman detail semua proyek
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              See All Projects Details
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
