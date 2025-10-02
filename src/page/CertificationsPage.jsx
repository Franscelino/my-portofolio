import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Award, BookOpen, Code, Users, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import certificationsData from '../data/certificationsData';

const CertificationsPage = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());

    const iconComponents = {
        BookOpen: BookOpen,
        Users: Users,
        Award: Award,
        Code: Code,
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
    
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <>
            <Navbar hideNavItems={true} />
            <section id="certifications-detail" className="py-24 bg-black relative overflow-hidden min-h-screen section-padding">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-orange-900/10"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <button
                            onClick={handleGoBack}
                            className="flex items-center text-white hover:text-purple-400 transition-all duration-300 group text-sm sm:text-base mb-8"
                        >
                            <ArrowLeft className="w-5 mr-2 group-hover:-translate-x-1 transition-all duration-300" />
                            Back to Home
                        </button>
                        <div className="text-center mb-16">
                            <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">
                                Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Awards</span>
                            </h1>
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                                A collection of my professional certifications, competition awards, and key achievements.
                            </p>
                            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full mt-4"></div>
                        </div>
                        <div className="space-y-8">
                            {certificationsData.map((cert, index) => {
                                const IconComponent = iconComponents[cert.icon];
                                return (
                                    <div
                                        key={cert.id}
                                        data-index={index}
                                        className={`cert-card bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden transform opacity-0 translate-y-10 transition-all duration-700 ease-out ${visibleItems.has(index) ? 'opacity-100 translate-y-0' : ''}`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        {/* === GAMBAR DITAMBAHKAN DI SINI === */}
                                        {cert.imageUrl && (
                                            <div className="mb-6 rounded-lg overflow-hidden border border-gray-700/50 shadow-lg">
                                                <img 
                                                    src={cert.imageUrl} 
                                                    alt={`Certificate for ${cert.title}`}
                                                    className="w-full h-auto object-contain"
                                                />
                                            </div>
                                        )}
                                        {/* === AKHIR BAGIAN GAMBAR === */}

                                        <div className="flex items-start">
                                            <div className="text-4xl mr-5 flex-shrink-0 text-purple-400">
                                                {IconComponent && <IconComponent className="w-12 h-12" />}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-400 flex items-center mb-1">
                                                    <Calendar className="w-4 mr-2" /> {cert.date}
                                                </p>
                                                <h3 className="text-2xl font-bold text-white mb-1">
                                                    {cert.title}
                                                </h3>
                                                <p className="text-md text-gray-300 font-semibold mb-4">{cert.issuer}</p>
                                                <p className="text-gray-300 leading-relaxed mb-6">{cert.overview}</p>
                                                <div className="mb-6">
                                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                                                        <Award className="w-5 mr-2 text-yellow-400" /> Key Achievements
                                                    </h4>
                                                    <ul className="list-none space-y-2 text-gray-300">
                                                        {cert.achievements.map((item, i) => (
                                                            <li key={i} className="flex items-start">
                                                                <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0 mt-2 mr-3"></span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {cert.skills.map((skill, i) => (
                                                        <span key={i} className="px-4 py-2 bg-gray-800/60 rounded-full text-sm text-gray-300 border border-gray-700">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                                {cert.credentialUrl && (
                                                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-6 text-purple-400 hover:text-orange-400 transition-colors duration-300">
                                                        View Credential <ExternalLink className="w-4 h-4 ml-2" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CertificationsPage;