import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import projectsData from '../data/projectsData';

const Projects = () => {
    const navigate = useNavigate();
    const highlightedProjects = projectsData.slice(0, 4);

    return (
        <section id="projects" className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-eyebrow mb-4">Selected works</p>
                    <h2 className="section-title">
                        My <span style={{ color: 'var(--color-accent)' }}>Projects</span>
                    </h2>
                    <div className="w-16 h-px mx-auto mb-6" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                    <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                        A selection of projects that showcase my skills and passion.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
                    {highlightedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            onClick={() => navigate(`/projects/${project.id}`)}
                            className="card-base group flex flex-col cursor-pointer hover:-translate-y-1 transition-all duration-300 interactive-hover"
                        >
                            {/* Thumbnail with hover scale */}
                            {project.thumbnailUrl && (
                                <div className="overflow-hidden rounded-t-lg" style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        src={project.thumbnailUrl}
                                        alt={`Thumbnail for ${project.name}`}
                                        className="w-full h-48 sm:h-56 object-cover"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 pointer-events-none">{project.name}</h3>
                                <p className="text-sm mb-4 flex-grow line-clamp-3 pointer-events-none" style={{ color: 'var(--color-text-muted)' }}>
                                    {project.shortDetails.join(' ')}
                                </p>

                                {/* Links row */}
                                <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                                    <div className="flex items-center space-x-4 relative z-30">
                                        {project.repositoryLink && (
                                            <a
                                                href={project.repositoryLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="transition-colors duration-300 interactive-hover"
                                                style={{ color: 'var(--color-text-muted)' }}
                                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                                            >
                                                <Github size={18} className="pointer-events-none" />
                                            </a>
                                        )}
                                        {project.liveDemoLink && (
                                            <a
                                                href={project.liveDemoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="transition-colors duration-300 interactive-hover"
                                                style={{ color: 'var(--color-text-muted)' }}
                                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                                            >
                                                <ExternalLink size={18} className="pointer-events-none" />
                                            </a>
                                        )}
                                    </div>
                                    <span className="text-xs uppercase tracking-wider font-medium transition-colors duration-300 pointer-events-none" style={{ color: 'var(--color-text-muted)' }}>
                                        View Project →
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects CTA */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center"
                >
                    <button
                        onClick={() => navigate('/projects/all-details-summary')}
                        className="btn-primary group interactive-hover"
                    >
                        <span className="pointer-events-none">View All Projects</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 pointer-events-none" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;