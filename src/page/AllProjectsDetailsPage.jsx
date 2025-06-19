import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import allProjectsData from '../data/projectsData';
import { Code, ExternalLink, Play, Camera, Lightbulb, Zap, ArrowLeft, Heart, Star, TrendingUp, ArrowRight, Download } from 'lucide-react';
import Navbar from '../components/Navbar';

const AllProjectsDetailsPage = ({ isSummaryPage }) => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);

    const project = isSummaryPage ? null : allProjectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("AllProjectsDetailsPage loaded. isSummaryPage:", isSummaryPage);
        console.log("Projects data length:", allProjectsData.length);
        if (isSummaryPage && allProjectsData.length === 0) {
            console.warn("allProjectsData is empty when rendering summary page!");
        }
    }, [id, isSummaryPage]);

    const ImageModal = ({ image, onClose }) => {
        if (!image) return null;

        return (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
                <div className="max-w-4xl max-h-[90vh] relative">
                    <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found'; }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 rounded-b-lg">
                        <h3 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">{image.caption}</h3>
                        <p className="text-xs sm:text-sm text-gray-300">{image.description}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-white hover:text-gray-300 text-xl sm:text-2xl"
                    >
                        ×
                    </button>
                </div>
            </div>
        );
    };

    if (isSummaryPage) {
        return (
            <>
                <Navbar hideNavItems={true} />
                <section className="py-16 sm:py-24 bg-black relative overflow-hidden text-white section-padding">
                    <div className="animated-bg-elements">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                        <div className="blob-effect top-1/4 right-1/4 w-40 h-40 sm:w-48 sm:h-48 bg-orange-500/10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="blob-effect bottom-1/4 left-1/4 w-48 h-48 sm:w-56 sm:h-56 bg-purple-500/10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                        <div className="particle-effect top-1/2 left-1/2 w-1.5 h-1.5 sm:w-2 bg-purple-400 animate-bounce opacity-30"></div>
                        <div className="particle-effect top-1/3 right-1/4 w-1.5 h-1.5 sm:w-2 bg-orange-400 animate-bounce opacity-30" style={{animationDelay: '1s'}}></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div className="max-w-4xl mx-auto bg-gray-900/40 rounded-xl p-6 sm:p-8 md:p-12 border border-gray-700 shadow-2xl">
                            <Link to="/#projects" className="inline-flex items-center text-purple-400 hover:text-orange-400 transition-colors duration-300 mb-6 sm:mb-8 text-sm sm:text-base">
                                <ArrowLeft className="w-4 sm:w-5 h-5 mr-1 sm:mr-2" />
                                Back to Projects Summary
                            </Link>

                            <h1 className="section-title text-center mb-10 sm:mb-12 text-3xl sm:text-4xl">
                                All <span className="text-gradient-primary">Projects</span>
                            </h1>

                            {allProjectsData.length === 0 ? (
                                <div className="text-center py-8 sm:py-10">
                                    <p className="text-sm sm:text-lg text-gray-400">No projects found. Please add data to projectsData.js.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                    {allProjectsData.map((projectItem) => (
                                        <Link
                                            key={projectItem.id}
                                            to={`/projects/${projectItem.id}`}
                                            className="card-base p-4 sm:p-6 hover:shadow-lg relative overflow-hidden flex flex-col justify-between"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                                            {projectItem.thumbnailUrl && (
                                                <div className="mb-3 sm:mb-4 rounded-lg overflow-hidden border border-gray-700 group-hover:border-orange-400 transition-colors duration-300">
                                                    <img
                                                        src={projectItem.thumbnailUrl}
                                                        alt={projectItem.name}
                                                        className="w-full h-28 sm:h-32 object-cover object-center"
                                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/gray/white?text=Image+Not+Available'; }}
                                                    />
                                                </div>
                                            )}

                                            <h2 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">
                                                {projectItem.name}
                                            </h2>

                                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                                                {projectItem.fullDescription}
                                            </p>

                                            {projectItem.technologies && projectItem.technologies.length > 0 && (
                                                <div className="mb-3 sm:mb-4">
                                                    <h3 className="text-xs font-semibold text-white mb-0.5 sm:mb-1">Tech:</h3>
                                                    <div className="flex flex-wrap gap-1">
                                                        {projectItem.technologies.map((tech, techIndex) => (
                                                            <span key={techIndex} className="px-1.5 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex justify-end mt-auto">
                                                <span className="inline-flex items-center text-purple-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm">
                                                    View Details
                                                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1 sm:ml-2" />
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
                </section>
            </>
        );
    }

    if (project) {
        return (
            <>
                <Navbar hideNavItems={true} />
                <section className="py-16 sm:py-24 bg-black relative overflow-hidden text-white section-padding">
                    <div className="animated-bg-elements">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                        <div className="blob-effect top-1/4 right-1/4 w-40 h-40 sm:w-48 sm:h-48 bg-orange-500/10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="blob-effect bottom-1/4 left-1/4 w-48 h-48 sm:w-56 sm:h-56 bg-purple-500/10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                        <div className="particle-effect top-1/2 left-1/2 w-1.5 h-1.5 sm:w-2 bg-purple-400 animate-bounce opacity-30"></div>
                        <div className="particle-effect top-1/3 right-1/4 w-1.5 h-1.5 sm:w-2 bg-orange-400 animate-bounce opacity-30" style={{animationDelay: '1s'}}></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div className="max-w-4xl mx-auto bg-gray-900/40 rounded-xl p-6 sm:p-8 md:p-12 border border-gray-700 shadow-2xl">
                            <Link to="/#projects" className="inline-flex items-center text-purple-400 hover:text-orange-400 transition-colors duration-300 mb-6 sm:mb-8 text-sm sm:text-base">
                                <ArrowLeft className="w-4 h-4 sm:w-5 mr-1 sm:mr-2" />
                                Back to Projects Summary
                            </Link>

                            <h1 className="section-title text-center mb-10 sm:mb-12 text-3xl sm:text-4xl md:text-5xl font-black">
                                {project.name}
                            </h1>

                            {project.imageUrl && (
                                <div className="mb-8 sm:mb-10 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.name}
                                        className="w-full h-auto object-cover"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x500/gray/white?text=Image+Not+Available'; }}
                                    />
                                </div>
                            )}

                            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10">
                                {project.liveDemoLink && (
                                    <a
                                        href={project.liveDemoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base"
                                    >
                                        <Zap className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2" />
                                        Live Demo
                                        <ExternalLink className="w-3 h-3 sm:w-4 ml-1.5 sm:ml-2" />
                                    </a>
                                )}
                                {project.repositoryLink && (
                                    <a
                                        href={project.repositoryLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base"
                                    >
                                        <Code className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2" />
                                        View Repository
                                        <ExternalLink className="w-3 h-3 sm:w-4 ml-1.5 sm:ml-2" />
                                    </a>
                                )}
                                {project.paperDownloadLink && (
                                    <a
                                        href={project.paperDownloadLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-teal-600 to-blue-600 border border-teal-500/30 text-white font-bold text-xs sm:text-base rounded-full transition-all duration-300 hover:from-teal-500 hover:to-blue-500 hover:shadow-lg hover:shadow-teal-500/25 active:scale-95"
                                    >
                                        <Download className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2" />
                                        Download Paper
                                        <ExternalLink className="w-3 h-3 sm:w-4 ml-1.5 sm:ml-2" />
                                    </a>
                                )}
                            </div>

                            {project.fullDetails && (
                                <div className="mb-8 sm:mb-10">
                                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                                        <Heart className="w-5 h-5 sm:w-6 mr-2 sm:mr-3 text-red-400" /> Overview
                                    </h2>
                                    <div className="text-sm sm:text-lg text-gray-300 leading-relaxed space-y-3 sm:space-y-4">
                                        {Array.isArray(project.fullDetails) ? project.fullDetails.map((block, index) => {
                                            if (block.type === 'paragraph') {
                                                return <p key={index}>{block.content}</p>;
                                            } else if (block.type === 'heading') {
                                                return <h3 key={index} className="text-lg sm:text-2xl font-semibold text-white mt-4 sm:mt-6 mb-2 sm:mb-3">{block.content}</h3>;
                                            } else if (block.type === 'image') {
                                                return (
                                                    <div key={index} className="my-4 sm:my-6">
                                                        <img
                                                            src={block.src}
                                                            alt={block.alt}
                                                            className="w-full rounded-lg border border-gray-700 shadow-md"
                                                        />
                                                        {block.caption && <p className="text-xs sm:text-sm text-center text-gray-400 mt-1 sm:mt-2">{block.caption}</p>}
                                                    </div>
                                                );
                                            }
                                            return null;
                                        }) : <p>{project.fullDetails}</p>}
                                    </div>
                                </div>
                            )}

                            {project.features && project.features.length > 0 && (
                                <div className="mb-8 sm:mb-10">
                                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                                        <Star className="w-5 h-5 sm:w-6 mr-2 sm:mr-3 text-yellow-400" /> Key Findings
                                    </h2>
                                    <ul className="list-none space-y-2 sm:space-y-3 text-gray-300">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 sm:w-2.5 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 flex-shrink-0 mt-1.5 sm:mt-2 mr-2 sm:mr-3"></span>
                                                <span className="text-sm sm:text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.technologies && project.technologies.length > 0 && (
                                <div className="mb-8 sm:mb-10">
                                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                                        <Code className="w-5 h-5 sm:w-6 mr-2 sm:mr-3 text-cyan-400" /> Technologies & Tools
                                    </h2>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 sm:px-5 sm:py-2 bg-gray-800/60 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-700 hover:border-blue-500 transition-colors duration-200">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {project.challenges && project.challenges.length > 0 && (
                                <div className="mb-8 sm:mb-10">
                                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                                        <Zap className="w-5 h-5 sm:w-6 mr-2 sm:mr-3 text-red-400" /> Challenges
                                    </h2>
                                    <ul className="list-none space-y-2 sm:space-y-3 text-gray-300">
                                        {project.challenges.map((challenge, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 sm:w-2.5 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex-shrink-0 mt-1.5 sm:mt-2 mr-2 sm:mr-3"></span>
                                                <span className="text-sm sm:text-base">{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.learnings && project.learnings.length > 0 && (
                                <div className="mb-8 sm:mb-10">
                                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                                        <Lightbulb className="w-5 h-5 sm:w-6 mr-2 sm:mr-3 text-yellow-400" /> Learnings & Future Work
                                    </h2>
                                    <ul className="list-none space-y-2 sm:space-y-3 text-gray-300">
                                        {project.learnings.map((learning, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 sm:w-2.5 rounded-full bg-gradient-to-r from-green-400 to-teal-400 flex-shrink-0 mt-1.5 sm:mt-2 mr-2 sm:mr-3"></span>
                                                <span className="text-sm sm:text-base">{learning}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.gallery && project.gallery.length > 0 && (
                                <div className="mb-8 sm:mb-10">
                                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                                        <Camera className="w-5 h-5 sm:w-6 mr-2 sm:mr-3 text-blue-400" /> Key Figures
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        {project.gallery.map((image, index) => (
                                            <div
                                                key={index}
                                                className="relative group cursor-pointer rounded-lg overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 aspect-video"
                                                onClick={() => setSelectedImage(image)}
                                            >
                                                <img
                                                    src={image.url}
                                                    alt={image.caption}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <Play className="w-6 sm:w-8 h-8 text-white" />
                                                </div>
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-3 text-xs sm:text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    {image.caption}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="text-center mt-8 sm:mt-12">
                                <Link to="/projects/all-details-summary" className="btn-primary inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold">
                                    Back to Projects Summary
                                    <ArrowRight className="w-4 sm:w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
                </section>
            </>
        );
    }

    return (
        <>
            <Navbar hideNavItems={true} />
            <section className="py-24 bg-black relative overflow-hidden min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <p className="text-lg text-gray-400 mb-8">The project you are looking for does not exist or an invalid ID was provided.</p>
                    <Link to="/#projects" className="btn-primary">
                        Back to Projects Summary
                    </Link>
                </div>
            </section>
        </>
    );
};

export default AllProjectsDetailsPage;
