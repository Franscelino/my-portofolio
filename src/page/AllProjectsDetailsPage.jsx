import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import allProjectsData from '../data/projectsData';
import { Code, ExternalLink, Play, Camera, Lightbulb, Zap, ArrowLeft, FileText, Star, ArrowRight, Download, ChevronRight, Home } from 'lucide-react';
import Navbar from '../components/Navbar';

const AllProjectsDetailsPage = ({ isSummaryPage }) => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);

    const project = isSummaryPage ? null : allProjectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id, isSummaryPage]);

    const ImageModal = ({ image, onClose }) => {
        if (!image) return null;
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(11, 11, 11, 0.95)' }} onClick={onClose}>
                <div className="max-w-4xl max-h-[90vh] relative">
                    <img src={image.url} alt={image.caption} className="w-full h-full object-contain rounded-lg"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1A1A1A/8A8A8A?text=Image+Not+Found'; }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 rounded-b-lg" style={{ background: 'linear-gradient(to top, rgba(11,11,11,0.9), transparent)' }}>
                        <h3 className="text-sm sm:text-lg font-semibold text-white mb-1">{image.caption}</h3>
                        <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-muted)' }}>{image.description}</p>
                    </div>
                    <button onClick={onClose} className="absolute top-2 right-2 text-white hover:text-[var(--color-accent)] text-xl sm:text-2xl transition-colors">×</button>
                </div>
            </div>
        );
    };

    // Breadcrumb component
    const Breadcrumb = ({ items }) => (
        <nav className="flex items-center gap-2 text-xs sm:text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    {i > 0 && <ChevronRight className="w-3 h-3 flex-shrink-0" />}
                    {item.to ? (
                        <Link to={item.to} className="transition-colors duration-300 hover:text-[var(--color-accent)] interactive-hover">{item.label}</Link>
                    ) : (
                        <span className="text-white font-medium">{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );

    // Summary page
    if (isSummaryPage) {
        return (
            <>
                <Navbar hideNavItems={true} />
                <section className="py-16 sm:py-24 relative overflow-hidden text-white section-padding min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        <Breadcrumb items={[
                            { label: 'Home', to: '/' },
                            { label: 'Projects' },
                        ]} />

                        <h1 className="section-title text-center mb-12">
                            All <span style={{ color: 'var(--color-accent)' }}>Projects</span>
                        </h1>

                        {allProjectsData.length === 0 ? (
                            <div className="text-center py-10">
                                <p className="text-sm sm:text-lg" style={{ color: 'var(--color-text-muted)' }}>No projects found.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                {allProjectsData.map((projectItem) => (
                                    <Link key={projectItem.id} to={`/projects/${projectItem.id}`} className="card-base p-4 sm:p-6 group flex flex-col interactive-hover">
                                        {projectItem.thumbnailUrl && (
                                            <div className="mb-3 sm:mb-4 rounded-lg overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
                                                <img src={projectItem.thumbnailUrl} alt={projectItem.name}
                                                    className="w-full h-28 sm:h-36 object-cover transition-transform duration-500 group-hover:scale-105"
                                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/1A1A1A/8A8A8A?text=Image'; }}
                                                />
                                            </div>
                                        )}
                                        <h2 className="text-base sm:text-xl font-bold text-white mb-2">{projectItem.name}</h2>
                                        <p className="text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: 'var(--color-text-muted)' }}>{projectItem.fullDescription}</p>
                                        {projectItem.technologies && projectItem.technologies.length > 0 && (
                                            <div className="mb-4">
                                                <div className="flex flex-wrap gap-1">
                                                    {projectItem.technologies.slice(0, 5).map((tech, techIndex) => (
                                                        <span key={techIndex} className="px-2 py-0.5 text-xs rounded" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex justify-end mt-auto">
                                            <span className="inline-flex items-center text-xs sm:text-sm transition-colors duration-300" style={{ color: 'var(--color-accent)' }}>
                                                View Details <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1 sm:ml-2" />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
                </section>
            </>
        );
    }

    // Single project detail page
    if (project) {
        return (
            <>
                <Navbar hideNavItems={true} />
                <section className="py-16 sm:py-24 relative overflow-hidden text-white section-padding min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                        <Breadcrumb items={[
                            { label: 'Home', to: '/' },
                            { label: 'Projects', to: '/projects/all-details-summary' },
                            { label: project.name },
                        ]} />

                        <h1 className="section-title text-center mb-10 sm:mb-12 text-3xl sm:text-4xl md:text-5xl">
                            {project.name}
                        </h1>

                        {project.imageUrl && (
                            <div className="mb-8 sm:mb-10 rounded-lg overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
                                <img src={project.imageUrl} alt={project.name} className="w-full h-auto object-cover"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x500/1A1A1A/8A8A8A?text=Image'; }}
                                />
                            </div>
                        )}

                        {/* Action buttons */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                            {project.liveDemoLink && (
                                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs sm:text-sm">
                                    <Zap className="w-4 h-4 mr-2" /> Live Demo <ExternalLink className="w-3 h-3 ml-2" />
                                </a>
                            )}
                            {project.repositoryLink && (
                                <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs sm:text-sm">
                                    <Code className="w-4 h-4 mr-2" /> View Repository <ExternalLink className="w-3 h-3 ml-2" />
                                </a>
                            )}
                            {project.paperDownloadLink && (
                                <a href={project.paperDownloadLink} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs sm:text-sm">
                                    <Download className="w-4 h-4 mr-2" /> Download Paper <ExternalLink className="w-3 h-3 ml-2" />
                                </a>
                            )}
                        </div>
                        
                        {/* Overview */}
                        {project.fullDescription && (
                            <div className="mb-8 sm:mb-10">
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                                    <FileText className="w-5 h-5 mr-2 sm:mr-3" style={{ color: 'var(--color-accent)' }} /> Overview
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: 'var(--color-text-muted)' }}>
                                    {project.fullDescription.split('\n').map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Key Features/Findings */}
                        {project.features && project.features.length > 0 && (
                            <div className="mb-8 sm:mb-10">
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                                    <Star className="w-5 h-5 mr-2 sm:mr-3" style={{ color: 'var(--color-accent)' }} /> {project.id.includes('paper') ? 'Key Findings' : 'Key Features'}
                                </h2>
                                <ul className="list-none space-y-2 sm:space-y-3">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 mr-2 sm:mr-3" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                                            <span className="text-sm sm:text-base" style={{ color: 'var(--color-text-muted)' }}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technologies */}
                        {project.technologies && project.technologies.length > 0 && (
                            <div className="mb-8 sm:mb-10">
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                                    <Code className="w-5 h-5 mr-2 sm:mr-3" style={{ color: 'var(--color-accent)' }} /> Technologies & Tools
                                </h2>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm rounded-lg transition-colors duration-200" style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Challenges */}
                        {project.challenges && project.challenges.length > 0 && (
                            <div className="mb-8 sm:mb-10">
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                                    <Zap className="w-5 h-5 mr-2 sm:mr-3" style={{ color: 'var(--color-accent)' }} /> Challenges
                                </h2>
                                <ul className="list-none space-y-2 sm:space-y-3">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 mr-2 sm:mr-3" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                                            <span className="text-sm sm:text-base" style={{ color: 'var(--color-text-muted)' }}>{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Learnings */}
                        {project.learnings && project.learnings.length > 0 && (
                            <div className="mb-8 sm:mb-10">
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                                    <Lightbulb className="w-5 h-5 mr-2 sm:mr-3" style={{ color: 'var(--color-accent)' }} /> Learnings & Future Work
                                </h2>
                                <ul className="list-none space-y-2 sm:space-y-3">
                                    {project.learnings.map((learning, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 mr-2 sm:mr-3" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                                            <span className="text-sm sm:text-base" style={{ color: 'var(--color-text-muted)' }}>{learning}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div className="mb-8 sm:mb-10">
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                                    <Camera className="w-5 h-5 mr-2 sm:mr-3" style={{ color: 'var(--color-accent)' }} /> {project.id.includes('paper') ? 'Key Figures' : 'Project Gallery'}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    {project.gallery.map((image, index) => (
                                        <div key={index}
                                            className="relative group cursor-pointer rounded-lg overflow-hidden aspect-video transition-all duration-300 interactive-hover"
                                            style={{ border: '1px solid var(--color-border)' }}
                                            onClick={() => setSelectedImage(image)}
                                        >
                                            <img src={image.url} alt={image.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(11, 11, 11, 0.6)' }}>
                                                <Play className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-xs sm:text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(11,11,11,0.8), transparent)' }}>
                                                {image.caption}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="text-center mt-8 sm:mt-12">
                            <Link to="/projects/all-details-summary" className="btn-primary group">
                                Back to Projects <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                    <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
                </section>
            </>
        );
    }

    // Not found
    return (
        <>
            <Navbar hideNavItems={true} />
            <section className="py-24 relative overflow-hidden min-h-screen flex items-center justify-center text-white" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <p className="text-lg mb-8" style={{ color: 'var(--color-text-muted)' }}>The project you are looking for does not exist.</p>
                    <Link to="/#projects" className="btn-primary">Back to Projects</Link>
                </div>
            </section>
        </>
    );
};

export default AllProjectsDetailsPage;