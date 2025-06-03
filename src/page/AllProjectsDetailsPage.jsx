import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import allProjectsData from '../data/projectsData'; // Pastikan jalur ini benar
import { Code, ExternalLink, Play, Camera, Lightbulb, Zap, ArrowLeft, Heart, Star, TrendingUp, ArrowRight } from 'lucide-react';

const AllProjectsDetailsPage = ({ isSummaryPage }) => { // Menerima prop isSummaryPage
  const { id } = useParams(); // Ambil ID proyek dari URL
  const [selectedImage, setSelectedImage] = useState(null);

  // Jika ini adalah halaman ringkasan, kita tidak perlu mencari proyek berdasarkan ID.
  // Jika bukan halaman ringkasan, cari proyek berdasarkan ID.
  const project = isSummaryPage ? null : allProjectsData.find(p => p.id === id);

  useEffect(() => {
    // Scroll ke bagian paling atas halaman saat komponen di-render
    window.scrollTo(0, 0);
    // Tambahkan log untuk debugging
    console.log("AllProjectsDetailsPage loaded. isSummaryPage:", isSummaryPage);
    console.log("Projects data length:", allProjectsData.length);
    if (isSummaryPage && allProjectsData.length === 0) {
      console.warn("allProjectsData is empty when rendering summary page!");
    }
  }, [id, isSummaryPage]); // Tambahkan 'id' dan 'isSummaryPage' sebagai dependensi

  const ImageModal = ({ image, onClose }) => {
    if (!image) return null;
    
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="max-w-4xl max-h-[90vh] relative">
          <img 
            src={image.url} 
            alt={image.caption}
            className="w-full h-full object-contain rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
            <h3 className="text-white font-semibold text-lg mb-2">{image.caption}</h3>
            <p className="text-gray-300">{image.description}</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>
      </div>
    );
  };

  // Render mode ringkasan semua proyek
  if (isSummaryPage) {
    return (
      <section className="py-24 bg-black relative overflow-hidden text-white section-padding">
        {/* Background Elements */}
        <div className="animated-bg-elements">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          <div className="blob-effect top-1/4 right-1/4 w-48 h-48 bg-orange-500/10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="blob-effect bottom-1/4 left-1/4 w-56 h-56 bg-purple-500/10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="particle-effect top-1/2 left-1/2 w-2 h-2 bg-purple-400 animate-bounce opacity-30"></div>
          <div className="particle-effect top-1/3 right-1/4 w-2 h-2 bg-orange-400 animate-bounce opacity-30" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-gray-900/40 rounded-xl p-8 md:p-12 border border-gray-700 shadow-2xl">
            {/* Back Button */}
            <Link to="/#projects" className="inline-flex items-center text-purple-400 hover:text-orange-400 transition-colors duration-300 mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects Summary
            </Link>

            <h1 className="section-title text-center mb-12">
              All <span className="text-gradient-primary">Projects</span>
            </h1>

            {/* Tambahkan pengecekan jika allProjectsData kosong */}
            {allProjectsData.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-lg text-gray-400">No projects found. Please add data to projectsData.js.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allProjectsData.map((projectItem) => (
                  <Link
                    key={projectItem.id}
                    to={`/projects/${projectItem.id}`} // Link ke halaman detail proyek spesifik
                    className="card-base p-6 hover:shadow-lg relative overflow-hidden flex flex-col justify-between"
                  >
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    {/* Project Image */}
                    {projectItem.thumbnailUrl && (
                      <div className="mb-4 rounded-lg overflow-hidden border border-gray-700 group-hover:border-orange-400 transition-colors duration-300">
                        <img 
                          src={projectItem.thumbnailUrl} 
                          alt={projectItem.name} 
                          className="w-full h-32 object-cover object-center"
                          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/gray/white?text=Image+Not+Available'; }}
                        />
                      </div>
                    )}

                    {/* Project Title */}
                    <h2 className="text-xl font-bold text-white mb-2">
                      {projectItem.name}
                    </h2>

                    {/* Short Description */}
                    <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {projectItem.fullDescription}
                    </p>

                    {/* Technologies Used */}
                    {projectItem.technologies && projectItem.technologies.length > 0 && (
                      <div className="mb-4">
                        <h3 className="text-xs font-semibold text-white mb-1">Tech:</h3>
                        <div className="flex flex-wrap gap-1">
                          {projectItem.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* View Details Link */}
                    <div className="flex justify-end mt-auto"> {/* mt-auto untuk push ke bawah */}
                      <span className="inline-flex items-center text-purple-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Render mode detail proyek tunggal (jika project tidak null)
  if (project) {
    return (
      <section className="py-24 bg-black relative overflow-hidden text-white section-padding">
        {/* Background Elements */}
        <div className="animated-bg-elements">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          <div className="blob-effect top-1/4 right-1/4 w-48 h-48 bg-orange-500/10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="blob-effect bottom-1/4 left-1/4 w-56 h-56 bg-purple-500/10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="particle-effect top-1/2 left-1/2 w-2 h-2 bg-purple-400 animate-bounce opacity-30"></div>
          <div className="particle-effect top-1/3 right-1/4 w-2 h-2 bg-orange-400 animate-bounce opacity-30" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-gray-900/40 rounded-xl p-8 md:p-12 border border-gray-700 shadow-2xl">
            {/* Back Button */}
            <Link to="/#projects" className="inline-flex items-center text-purple-400 hover:text-orange-400 transition-colors duration-300 mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects Summary
            </Link>

            <h1 className="section-title text-center mb-12">
              {project.name}
            </h1>

            {/* Project Image/Thumbnail */}
            {project.imageUrl && (
              <div className="mb-10 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                <img 
                  src={project.imageUrl} 
                  alt={project.name} 
                  className="w-full h-auto object-cover" 
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x500/gray/white?text=Image+Not+Available'; }}
                />
              </div>
            )}

            {/* Project Links (Live Demo & Repository) */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {project.liveDemoLink && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Live Demo
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              )}
              {project.repositoryLink && (
                <a
                  href={project.repositoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center"
                >
                  <Code className="w-5 h-5 mr-2" />
                  View Repository
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              )}
            </div>

            {/* Full Description */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-400" /> Overview
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-yellow-400" /> Key Features
                </h2>
                <ul className="list-none space-y-3 text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 flex-shrink-0 mt-2 mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-3 text-cyan-400" /> Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-5 py-2 bg-gray-800/60 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-blue-500 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges Faced */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-red-400" /> Challenges
                </h2>
                <ul className="list-none space-y-3 text-gray-300">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex-shrink-0 mt-2 mr-3"></span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Learnings */}
            {project.learnings && project.learnings.length > 0 && (
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3 text-yellow-400" /> Learnings
                </h2>
                <ul className="list-none space-y-3 text-gray-300">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-green-400 to-teal-400 flex-shrink-0 mt-2 mr-3"></span>
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Project Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Camera className="w-6 h-6 mr-3 text-blue-400" /> Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative group cursor-pointer rounded-lg overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image.url} 
                        alt={image.caption} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Summary Button at bottom */}
            <div className="text-center mt-12">
              <Link to="/projects/all-details-summary" className="btn-primary">
                Back to Projects Summary
              </Link>
            </div>
          </div>
        </div>
        {/* Image Modal */}
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      </section>
    );
  }

  // Fallback if no project is found and not in summary mode (should ideally not happen with correct routing)
  return (
    <section className="py-24 bg-black relative overflow-hidden min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-lg text-gray-400 mb-8">The project you are looking for does not exist or an invalid ID was provided.</p>
        <Link to="/#projects" className="btn-primary">
          Back to Projects Summary
        </Link>
      </div>
    </section>
  );
};

export default AllProjectsDetailsPage;
