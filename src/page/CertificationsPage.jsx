import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Award, BookOpen, Code, Users, ExternalLink, Database, BarChart, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import certificationsData from '../data/certificationsData';

const CertificationsPage = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());

    const iconComponents = {
        BookOpen, Users, Award, Code, Database, BarChart,
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.1 }
        );
        const elements = document.querySelectorAll('.cert-card');
        elements.forEach((el, index) => {
            el.dataset.index = index;
            observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar hideNavItems={true} />
            <section id="certifications-detail" className="py-24 relative overflow-hidden min-h-screen section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs sm:text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
                        <Link to="/" className="transition-colors duration-300 hover:text-[var(--color-accent)] interactive-hover">Home</Link>
                        <ChevronRight className="w-3 h-3 flex-shrink-0" />
                        <span className="text-white font-medium">Certifications</span>
                    </nav>

                    <div className="text-center mb-16">
                        <p className="text-eyebrow mb-4">Credentials</p>
                        <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-wide">
                            Certifications & <span style={{ color: 'var(--color-accent)' }}>Awards</span>
                        </h1>
                        <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                            A collection of my professional certifications, competition awards, and key achievements.
                        </p>
                        <div className="w-16 h-px mx-auto mt-4" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                    </div>

                    <div className="space-y-8">
                        {certificationsData.map((cert, index) => {
                            const IconComponent = iconComponents[cert.icon];
                            return (
                                <div
                                    key={cert.id}
                                    data-index={index}
                                    className={`cert-card card-base p-6 sm:p-8 relative overflow-hidden transform opacity-0 translate-y-10 transition-all duration-700 ease-out ${visibleItems.has(index) ? 'opacity-100 translate-y-0' : ''}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {/* Certificate Image */}
                                    {cert.imageUrl && (
                                        <div className="mb-6 rounded-lg overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
                                            <img
                                                src={cert.imageUrl}
                                                alt={`Certificate for ${cert.title}`}
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    )}

                                    <div className="flex items-start">
                                        <div className="text-4xl mr-5 flex-shrink-0" style={{ color: 'var(--color-accent)' }}>
                                            {IconComponent && <IconComponent className="w-10 h-10 sm:w-12 sm:h-12" />}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs sm:text-sm flex items-center mb-1" style={{ color: 'var(--color-text-muted)' }}>
                                                <Calendar className="w-3 h-3 sm:w-4 mr-2" /> {cert.date}
                                            </p>
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{cert.title}</h3>
                                            <p className="text-sm sm:text-base font-semibold mb-4" style={{ color: 'var(--color-accent)' }}>{cert.issuer}</p>
                                            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>{cert.overview}</p>

                                            {/* Achievements */}
                                            <div className="mb-6">
                                                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center">
                                                    <Award className="w-4 h-4 sm:w-5 mr-2" style={{ color: 'var(--color-accent)' }} /> Key Achievements
                                                </h4>
                                                <ul className="list-none space-y-2">
                                                    {cert.achievements.map((item, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 mr-3" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                                                            <span className="text-sm sm:text-base" style={{ color: 'var(--color-text-muted)' }}>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Skills */}
                                            <div className="flex flex-wrap gap-2">
                                                {cert.skills.map((skill, i) => (
                                                    <span key={i} className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg text-xs sm:text-sm" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {cert.credentialUrl && (
                                                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                                                    className="inline-flex items-center mt-6 transition-colors duration-300 interactive-hover"
                                                    style={{ color: 'var(--color-accent)' }}
                                                >
                                                    View Credential <ExternalLink className="w-4 h-4 ml-2 pointer-events-none" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CertificationsPage;