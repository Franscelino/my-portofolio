import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import allProjectsData from '../data/projectsData';
import { Download, ExternalLink } from 'lucide-react';

const Projects = () => {
    const [imageErrors, setImageErrors] = useState({});

    const handleImageError = (projectId) => {
        setImageErrors(prev => ({
            ...prev,
            [projectId]: true
        }));
    };

    const getPlaceholderUrl = (projectName) => {
        const encodedName = encodeURIComponent(projectName.replace(/\s+/g, '+'));
        return `https://placehold.co/400x250/1f2937/9ca3af?text=${encodedName}`;
    };

    return (
        <section id="projects" className="py-16 sm:py-24 bg-black relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

                {/* Animated circles with improved positioning */}
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 border border-orange-500/10 rounded-full animate-pulse"
                    style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 border border-purple-500/10 rounded-full animate-pulse"
                    style={{ animationDelay: '1.5s' }}></div>

                {/* Additional ambient elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 border border-purple-400/5 rounded-full animate-pulse"
                    style={{ animationDelay: '2s' }}></div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full" style={{
                        backgroundImage: `
                            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Enhanced Section Title */}
                    <div className="text-center mb-12 sm:mb-20">
                        <div className="inline-block mb-3 sm:mb-4">
                            <span className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium">
                                Portfolio
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            My{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                                Projects
                            </span>
                        </h2>
                        <p className="text-sm sm:text-xl text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                            A collection of projects that showcase my skills and passion for creating innovative solutions
                        </p>
                        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                            <div className="w-6 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
                            <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-orange-500"></div>
                            <div className="w-6 h-px bg-gradient-to-r from-orange-500 to-transparent"></div>
                        </div>
                    </div>

                    {/* Enhanced Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        {allProjectsData.map((item, index) => (
                            <Link
                                key={item.id}
                                to={`/projects/${item.id}`}
                                className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 flex flex-col"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Enhanced gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                {/* Glowing edge effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10"></div>

                                {/* Content wrapper to push links to the bottom */}
                                <div className="flex flex-col flex-grow">
                                    {/* Project Thumbnail with enhanced styling */}
                                    {item.thumbnailUrl && (
                                        <div className="relative mb-4 sm:mb-6 rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-orange-400/50 transition-all duration-500">
                                            <div className="aspect-video relative overflow-hidden bg-gray-800">
                                                <img
                                                    src={imageErrors[item.id] ? getPlaceholderUrl(item.name) : item.thumbnailUrl}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                                                    onError={() => handleImageError(item.id)}
                                                    loading="lazy"
                                                />
                                                {/* Image overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Project Title with enhanced animation */}
                                    <h4 className="relative text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-200 transition-colors duration-300">
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-orange-400 transition-all duration-500 group-hover:w-1/3"></span>
                                    </h4>

                                    {/* Enhanced project details */}
                                    <div className="space-y-2 sm:space-y-3 text-gray-300 mb-4 sm:mb-6">
                                        {item.shortDetails?.map((desc, descIndex) => (
                                            <div
                                                key={descIndex}
                                                className="flex items-start group/item hover:text-gray-200 transition-colors duration-300"
                                            >
                                                <div className="flex-shrink-0 mt-0.5 sm:mt-1.5 mr-2 sm:mr-3">
                                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 group-hover/item:scale-125 transition-transform duration-300"></div>
                                                </div>
                                                <span className="text-xs sm:text-sm leading-relaxed">{desc}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Technologies Used */}
                                    {item.technologies && item.technologies.length > 0 && (
                                        <div className="mb-4 sm:mb-6">
                                            <h5 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">Technologies:</h5>
                                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                                {item.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex} className="px-2 py-0.5 bg-gray-800/60 text-gray-300 text-xs rounded-full border border-gray-700">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Links (Repository, Live Demo, and Download Paper) */}
                                <div className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4 mt-auto">
                                    {item.repositoryLink && (
                                        <a
                                            href={item.repositoryLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-800 to-gray-700 border border-orange-500/30 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 hover:from-orange-500/20 hover:to-orange-600/20 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            Repo
                                            <ExternalLink className="w-2.5 h-2.5 sm:w-3 ml-1 sm:ml-2" />
                                        </a>
                                    )}
                                    {item.liveDemoLink && (
                                        <a
                                            href={item.liveDemoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-800 to-purple-700 border border-purple-500/30 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 hover:from-purple-500/20 hover:to-purple-600/20 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M13 14.725V19h5V14.725a.75.75 0 00-.75-.75H13.75a.75.75 0 00-.75.75zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zM12 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM12 7a5 5 0 110 10 5 5 0 010-10zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12 10a2 2 0 110 4 2 2 0 010-4z" />
                                            </svg>
                                            Live Demo
                                            <ExternalLink className="w-2.5 h-2.5 sm:w-3 ml-1 sm:ml-2" />
                                        </a>
                                    )}
                                    {item.paperDownloadLink && (
                                        <a
                                            href={item.paperDownloadLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-teal-600 to-blue-600 border border-teal-500/30 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 hover:from-teal-500/20 hover:to-blue-600/20 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/20 active:scale-95"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                            Download Paper
                                            <ExternalLink className="w-2.5 h-2.5 sm:w-3 ml-1 sm:ml-2" />
                                        </a>
                                    )}
                                </div>

                                {/* Project number indicator */}
                                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 text-xs sm:text-sm font-bold opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Enhanced CTA Button */}
                    <div className="text-center">
                        <Link
                            to="/projects/all-details-summary"
                            className="group relative inline-flex items-center px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-orange-600 text-white font-bold text-base sm:text-lg rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <span className="relative flex items-center">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                                </svg>
                                Explore All Projects
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>

                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-orange-600 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </Link>

                        <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 max-w-md mx-auto">
                            Discover detailed information, technologies used, and live demos of all my projects
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
