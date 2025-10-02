import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import projectsData from '../data/projectsData';

const Projects = () => {
    const navigate = useNavigate();
    const highlightedProjects = projectsData.slice(0, 4);

    return (
        <section id="projects" className="py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* === KONTEN DIBUNGKUS UNTUK MEMBUATNYA LEBIH RAMPING === */}
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-white">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Projects</span></h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">A selection of projects that showcase my skills and passion.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {highlightedProjects.map(project => (
                            <div
                                key={project.id}
                                onClick={() => navigate(`/projects/${project.id}`)}
                                className="relative group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex flex-col transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-2 overflow-hidden cursor-pointer shadow-lg"
                            >
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                    <div className="absolute inset-0 rounded-2xl animate-spin-slow-reverse" style={{ background: 'conic-gradient(from 0deg at 50% 50%, #8b5cf6, transparent 30%, #f97316, transparent 70%, #8b5cf6)' }}></div>
                                </div>
                                <div className="absolute inset-0 rounded-2xl z-10 bg-gray-900/80 group-hover:bg-gray-900/90 transition-colors duration-300"></div>
                                
                                <div className="relative z-20 p-4 flex flex-col flex-grow">
                                    {project.thumbnailUrl && (
                                        <div className="mb-4 rounded-lg overflow-hidden border border-gray-700/50 shadow-md">
                                            <img
                                                src={project.thumbnailUrl}
                                                alt={`Thumbnail for ${project.name}`}
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    )}

                                    <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">{project.shortDetails.join(' ')}</p>

                                    <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-700/50">
                                        {project.repositoryLink && (
                                            <a
                                                href={project.repositoryLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.liveDemoLink && (
                                            <a
                                                href={project.liveDemoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => navigate('/projects/all-details-summary')}
                            className="btn-primary inline-flex items-center px-8 py-4 text-base font-bold group"
                        >
                            <span>View All Projects</span>
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;