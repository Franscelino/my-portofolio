import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import certificationsData from '../data/certificationsData';

const Certifications = () => {
    const navigate = useNavigate();
    const highlightedCerts = certificationsData.slice(0, 3);

    const handleNavigate = () => {
        navigate('/certifications');
    };

    return (
        <section id="certifications" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-eyebrow mb-4">Credentials</p>
                    <h2 className="section-title">
                        Awards & <span style={{ color: 'var(--color-accent)' }}>Certifications</span>
                    </h2>
                    <div className="w-16 h-px mx-auto mb-6" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                    <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                        A snapshot of my key credentials and competitive achievements.
                    </p>
                </motion.div>

                {/* Certs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                    {highlightedCerts.map((cert, index) => (
                        <motion.div 
                            key={cert.id} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ scale: 1.03 }}
                            className="card-base group flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300 interactive-hover"
                        >
                            {/* Image */}
                            <div className="aspect-video overflow-hidden pointer-events-none">
                                <img 
                                    src={cert.imageUrl} 
                                    alt={cert.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                                />
                            </div>
                            <div className="p-5 sm:p-6 flex flex-col flex-grow pointer-events-none">
                                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                                <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-accent)' }}>{cert.issuer}</p>
                                <p className="text-sm leading-relaxed line-clamp-3 flex-grow" style={{ color: 'var(--color-text-muted)' }}>
                                    {cert.overview}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center"
                >
                    <button
                        onClick={handleNavigate}
                        className="btn-primary group interactive-hover"
                    >
                        <span className="pointer-events-none">View All Certifications</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 pointer-events-none" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;