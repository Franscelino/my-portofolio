import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft, Calendar, MapPin, Users, Award, Lightbulb, Zap, Camera,
    Play, TrendingUp, BookOpen, Code, Briefcase, ChevronRight, Mic,
    Link as LinkIcon
} from 'lucide-react';
import Navbar from '../components/Navbar';
import softSkillsExperiences from '../data/softSkillsExperienceData';

const SoftSkillsExperiencePage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleItems, setVisibleItems] = useState(new Set());

    const iconComponents = {
        BookOpen, Users, Camera, Lightbulb, Zap, LinkIcon, Award, TrendingUp, Code, Briefcase, Mic,
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
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
        const elements = document.querySelectorAll('.experience-card');
        elements.forEach((el, index) => {
            el.dataset.index = index;
            observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const sortedExperiences = [...softSkillsExperiences].sort((a, b) =>
        new Date(a.date.split(' - ')[0].replace(/Present$/, '2099')) -
        new Date(b.date.split(' - ')[0].replace(/Present$/, '2099'))
    );

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

    return (
        <>
            <Navbar hideNavItems={true} />
            <section id="soft-skills-experience-detail" className="py-16 sm:py-24 relative overflow-hidden min-h-screen section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs sm:text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
                        <Link to="/" className="transition-colors duration-300 hover:text-[var(--color-accent)] interactive-hover">Home</Link>
                        <ChevronRight className="w-3 h-3 flex-shrink-0" />
                        <Link to="/#experience" className="transition-colors duration-300 hover:text-[var(--color-accent)] interactive-hover">Experience</Link>
                        <ChevronRight className="w-3 h-3 flex-shrink-0" />
                        <span className="text-white font-medium">Soft Skills</span>
                    </nav>

                    <div className="text-center mb-16 sm:mb-20">
                        <p className="text-eyebrow mb-4">Leadership & organization</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-wide">
                            <span style={{ color: 'var(--color-accent)' }}>Soft Skill</span> Experiences
                        </h1>
                        <p className="text-sm sm:text-lg max-w-2xl mx-auto px-4" style={{ color: 'var(--color-text-muted)' }}>
                            Detailed insights into my leadership, organizational, and personal development roles.
                        </p>
                        <div className="w-16 h-px mx-auto mt-4" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        {sortedExperiences.map((exp, index) => {
                            const IconComponent = iconComponents[exp.icon];
                            return (
                                <div
                                    key={index}
                                    className={`experience-card card-base p-6 sm:p-8 relative overflow-hidden transform opacity-0 translate-y-10 transition-all duration-700 ease-out ${visibleItems.has(index) ? 'opacity-100 translate-y-0' : ''}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative z-10">
                                        <div className="flex items-center mb-4 sm:mb-6">
                                            <div className="mr-3 sm:mr-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }}>
                                                {IconComponent && <IconComponent className="w-10 h-10 sm:w-12 sm:h-12" />}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">{exp.title}</h3>
                                                <p className="text-xs sm:text-sm flex items-center" style={{ color: 'var(--color-text-muted)' }}>
                                                    <Calendar className="w-3 h-3 sm:w-4 mr-1 sm:mr-2" /> {exp.date}
                                                    <span className="mx-1.5 sm:mx-2" style={{ color: 'var(--color-border)' }}>|</span>
                                                    <MapPin className="w-3 h-3 sm:w-4 mr-1 sm:mr-2" /> {exp.location}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6" style={{ color: 'var(--color-text-muted)' }}>{exp.overview}</p>

                                        {/* Gallery */}
                                        {exp.photos && exp.photos.length > 0 && (
                                            <div className="mb-4 sm:mb-6">
                                                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center">
                                                    <Camera className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2" style={{ color: 'var(--color-accent)' }} /> Gallery
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                                                    {exp.photos.map((photo, i) => (
                                                        <div key={i}
                                                            className="relative group cursor-pointer rounded-lg overflow-hidden aspect-video transition-all duration-300 interactive-hover"
                                                            style={{ border: '1px solid var(--color-border)' }}
                                                            onClick={() => setSelectedImage(photo)}
                                                        >
                                                            <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1A1A1A/8A8A8A?text=Image+Not+Found'; }}
                                                            />
                                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(11, 11, 11, 0.5)' }}>
                                                                <Play className="w-5 h-5 sm:w-6 text-white" />
                                                            </div>
                                                            <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(11,11,11,0.8), transparent)' }}>
                                                                {photo.caption}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Achievements */}
                                        <div className="mb-4 sm:mb-6">
                                            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center">
                                                <Award className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2" style={{ color: 'var(--color-accent)' }} /> Key Achievements
                                            </h4>
                                            <ul className="list-none space-y-1.5 sm:space-y-2">
                                                {exp.achievements.map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 mr-2 sm:mr-3" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                                                        <span className="text-sm sm:text-base" style={{ color: 'var(--color-text-muted)' }}>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Skills */}
                                        <div className="mb-4 sm:mb-6">
                                            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center">
                                                <Code className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2" style={{ color: 'var(--color-accent)' }} /> Skills Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                                {exp.skills.map((skill, i) => (
                                                    <span key={i} className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg text-xs sm:text-sm transition-colors duration-200" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Impact */}
                                        <div className="mb-4 sm:mb-6">
                                            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center">
                                                <TrendingUp className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2" style={{ color: 'var(--color-accent)' }} /> Impact
                                            </h4>
                                            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{exp.impact}</p>
                                        </div>

                                        {/* Lessons */}
                                        <div>
                                            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center">
                                                <Lightbulb className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2" style={{ color: 'var(--color-accent)' }} /> Lessons Learned
                                            </h4>
                                            <ul className="list-none space-y-1.5 sm:space-y-2">
                                                {exp.lessons.map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 mr-2 sm:mr-3" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                                                        <span className="text-sm sm:text-base" style={{ color: 'var(--color-text-muted)' }}>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
            </section>
        </>
    );
};

export default SoftSkillsExperiencePage;
