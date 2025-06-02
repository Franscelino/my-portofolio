import React, { useEffect } from 'react'; // Import useEffect
import { Link } from 'react-router-dom';
import allProjectsData from '../data/projectsData'; // Import data proyek

const AllProjectsDetailsPage = () => {
  useEffect(() => {
    // Scroll ke bagian paling atas halaman saat komponen di-render
    window.scrollTo(0, 0);
  }, []); // Array dependensi kosong agar hanya berjalan sekali saat mount

  return (
    <section className="py-24 bg-black relative overflow-hidden text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 border border-orange-500/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900/40 rounded-xl p-8 md:p-12 border border-gray-700 shadow-2xl">
          {/* Back Button */}
          <Link to="/#projects" className="inline-flex items-center text-purple-400 hover:text-orange-400 transition-colors duration-300 mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Projects Summary
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Projects</span>
          </h1>

          {/* Projects Grid - Changed to 2-column format */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Changed from space-y-16 to grid and gap */}
            {allProjectsData.map((project, index) => (
              <div key={project.id} className="bg-gray-900/40 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg relative overflow-hidden"> {/* Removed border-b and pb-12 */}
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Project Image */}
                {project.imageUrl && (
                  <div className="mb-6 rounded-lg overflow-hidden border border-gray-700 group-hover:border-orange-400 transition-colors duration-300">
                    <img 
                      src={project.imageUrl} 
                      alt={project.name} 
                      className="w-full h-40 object-cover object-center" // Adjusted height for grid view
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x500/gray/white?text=Image+Not+Available'; }}
                    />
                  </div>
                )}

                {/* Project Title */}
                <h2 className="text-2xl font-bold text-white mb-3"> {/* Adjusted heading size for grid */}
                  {project.name}
                </h2>

                {/* Full Description - Shortened for summary in grid, or keep full for detail page if not too long */}
                <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3"> {/* Added line-clamp for brevity */}
                  {project.fullDescription}
                </p>

                {/* Key Features/Details */}
                {project.shortDetails && project.shortDetails.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-white mb-2">Key Highlights:</h3> {/* Adjusted heading size */}
                    <ul className="space-y-1 text-gray-300 text-xs list-none pl-0"> {/* Adjusted text size and spacing */}
                      {project.shortDetails.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 mr-2 mt-1 flex-shrink-0"></span> {/* Adjusted bullet size */}
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Used */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-base font-semibold text-white mb-2">Technologies Used:</h3> {/* Adjusted heading size */}
                    <div className="flex flex-wrap gap-2"> {/* Adjusted gap */}
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"> {/* Adjusted padding and text size */}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Repository Link */}
                {project.repositoryLink && (
                  <a
                    href={project.repositoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-purple-500/50 text-white text-sm font-medium rounded-xl transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 active:scale-95"
                  >
                    View Full Repository
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProjectsDetailsPage;
