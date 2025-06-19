import React, { useState, useEffect } from 'react';
import {
    ArrowLeft,
    Calendar,
    MapPin,
    Users,
    Award,
    Lightbulb,
    Zap,
    Camera,
    ExternalLink,
    Play,
    TrendingUp,
    BookOpen,
    Code,
    Briefcase,
    Link as LinkIcon,
    Mic
} from 'lucide-react';
import Navbar from '../components/Navbar';
import softSkillsExperiences from '../data/softSkillsExperienceData';

const SoftSkillsExperiencePage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [visibleItems, setVisibleItems] = useState(new Set());

    const iconComponents = {
        BookOpen: BookOpen,
        Users: Users,
        Camera: Camera,
        Lightbulb: Lightbulb,
        Zap: Zap,
        LinkIcon: LinkIcon,
        Award: Award,
        TrendingUp: TrendingUp,
        Code: Code,
        Briefcase: Briefcase,
        Mic: Mic,
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        console.log("Soft Skills Experiences Data:", softSkillsExperiences);
        if (softSkillsExperiences && softSkillsExperiences.length === 0) {
            console.warn("softSkillsExperiences array is empty. Check softSkillsExperienceData.js content.");
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
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

    const handleGoBack = () => {
        window.history.back();
    };

    const ImageModal = ({ image, onClose }) => {
        if (!image) return null;

        return (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
                <div className="max-w-4xl max-h-[90vh] relative">
                    <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found";
                        }}
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

    return (
        <>
            <Navbar hideNavItems={true} />
            <section id="soft-skills-experience-detail" className="py-16 sm:py-24 bg-black relative overflow-hidden min-h-screen section-padding">
                <div className="animated-bg-elements">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/20 animate-pulse"></div>
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-900/10 via-transparent to-transparent"></div>
                    </div>

                    <div className="absolute w-64 h-64 rounded-full pointer-events-none transition-all duration-1000 ease-out"
                        style={{
                            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
                            left: mousePosition.x - 192,
                            top: mousePosition.y - 192,
                        }}
                    ></div>

                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-8 sm:mb-12">
                            <button
                                onClick={handleGoBack}
                                className="flex items-center text-white hover:text-purple-400 transition-all duration-300 group text-sm sm:text-base"
                            >
                                <ArrowLeft className="w-4 h-4 sm:w-5 mr-1 sm:mr-2" />
                                Back to Experience Summary
                            </button>

                            <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-400">
                                <span className="flex items-center">
                                    <Calendar className="w-3 h-3 sm:w-4 mr-1" />
                                    Last Updated: {new Date().toLocaleDateString('en-US')}
                                </span>
                            </div>
                        </div>

                        <div className="text-center mb-16 sm:mb-20">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Soft Skill</span> Experiences
                            </h1>
                            <p className="text-sm sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                                Detailed insights into my leadership, organizational, and personal development roles.
                            </p>
                            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full mt-3 sm:mt-4"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                            {sortedExperiences.map((exp, index) => {
                                const IconComponent = iconComponents[exp.icon];
                                return (
                                <div
                                    key={index}
                                    className={`experience-card bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden transform opacity-0 translate-y-10 transition-all duration-700 ease-out ${visibleItems.has(index) ? 'opacity-100 translate-y-0' : ''}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center mb-4 sm:mb-6">
                                            <div className="text-4xl sm:text-5xl mr-3 sm:mr-4 flex-shrink-0 text-white">
                                                {IconComponent && <IconComponent className="w-10 h-10 sm:w-12" />}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-400 flex items-center">
                                                    <Calendar className="w-3 h-3 sm:w-4 mr-1 sm:mr-2" /> {exp.date}
                                                    <span className="mx-1.5 sm:mx-2 text-gray-600">|</span>
                                                    <MapPin className="w-3 h-3 sm:w-4 mr-1 sm:mr-2" /> {exp.location}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                                            {exp.overview}
                                        </p>

                                        {exp.photos && exp.photos.length > 0 && (
                                            <div className="mb-4 sm:mb-6">
                                                <h4 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-3 flex items-center">
                                                    <Camera className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2 text-cyan-400" /> Gallery
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                                                    {exp.photos.map((photo, i) => (
                                                        <div
                                                            key={i}
                                                            className="relative group cursor-pointer rounded-lg overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 aspect-video"
                                                            onClick={() => setSelectedImage(photo)}
                                                        >
                                                            <img
                                                                src={photo.url}
                                                                alt={photo.caption}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                onError={(e) => {
                                                                    e.target.onerror = null;
                                                                    e.target.src = "https://placehold.co/600x400/1f2937/9ca3af?text=Image+Not+Found";
                                                                }}
                                                            />
                                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                <Play className="w-5 h-5 sm:w-6 text-white" />
                                                            </div>
                                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1.5 sm:p-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                {photo.caption}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="mb-4 sm:mb-6">
                                            <h4 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-3 flex items-center">
                                                <Award className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2 text-purple-400" /> Key Achievements
                                            </h4>
                                            <ul className="list-none space-y-1.5 sm:space-y-2 text-gray-300">
                                                {exp.achievements.map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="w-1.5 h-1.5 sm:w-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0 mt-1.5 sm:mt-2 mr-2 sm:mr-3"></span>
                                                        <span className="text-sm sm:text-base">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-4 sm:mb-6">
                                            <h4 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-3 flex items-center">
                                                <Code className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2 text-orange-400" /> Skills Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                                {exp.skills.map((skill, i) => (
                                                    <span key={i} className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-800/60 rounded-full text-xs sm:text-sm text-gray-300 border border-gray-700 hover:border-purple-500 transition-colors duration-200">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-4 sm:mb-6">
                                            <h4 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-3 flex items-center">
                                                <TrendingUp className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2 text-green-400" /> Impact
                                            </h4>
                                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{exp.impact}</p>
                                        </div>

                                        <div className="mb-0">
                                            <h4 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-3 flex items-center">
                                                <Lightbulb className="w-4 h-4 sm:w-5 mr-1.5 sm:mr-2 text-yellow-400" /> Lessons Learned
                                            </h4>
                                            <ul className="list-none space-y-1.5 sm:space-y-2 text-gray-300">
                                                {exp.lessons.map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="w-1.5 h-1.5 sm:w-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex-shrink-0 mt-1.5 sm:mt-2 mr-2 sm:mr-3"></span>
                                                        <span className="text-sm sm:text-base">{item}</span>
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
                </div>

                <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
            </section>
        </>
    );
};

export default SoftSkillsExperiencePage;
