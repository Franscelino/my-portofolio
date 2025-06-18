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
    Link as LinkIcon 
} from 'lucide-react';
// PENTING: Periksa dan sesuaikan jalur ini berdasarkan lokasi ACTUAL file Navbar.jsx Anda.
// Jika HardSkillsExperiencePage.jsx ada di 'src/page/' dan Navbar.jsx ada di 'src/components/', maka '../components/Navbar' sudah BENAR.
import Navbar from '../components/Navbar'; 
// PENTING: Periksa dan sesuaikan jalur ini berdasarkan lokasi ACTUAL file hardSkillsExperienceData.js Anda.
// Jika HardSkillsExperiencePage.jsx ada di 'src/page/' dan hardSkillsExperienceData.js ada di 'src/data/', maka '../data/hardSkillsExperienceData' sudah BENAR.
import hardSkillsExperiences from '../data/hardSkillsExperienceData'; 

const HardSkillsExperiencePage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [visibleItems, setVisibleItems] = useState(new Set()); 

    // Objek untuk memetakan nama string icon ke komponen Lucide React yang sebenarnya
    // Pastikan semua nama string icon yang digunakan di hardSkillsExperienceData.js ada di sini
    const iconComponents = {
        BookOpen: BookOpen,
        Users: Users,
        Camera: Camera,
        Lightbulb: Lightbulb,
        Zap: Zap,
        LinkIcon: LinkIcon, // Digunakan jika ada icon 'LinkIcon' di data
        Award: Award,
        TrendingUp: TrendingUp,
        Code: Code,
        Briefcase: Briefcase,
        // Tambahkan ikon lain yang Anda gunakan di hardSkillsExperienceData.js di sini
    };

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

    // Urutkan data hard skills
    const sortedExperiences = [...hardSkillsExperiences].sort((a, b) => 
        new Date(a.date.split(' - ')[0].replace(/Present$/, '2099')) - 
        new Date(b.date.split(' - ')[0].replace(/Present$/, '2099'))
    );

    const handleGoBack = () => {
        // Asumsi ini akan kembali ke halaman sebelumnya atau ringkasan pengalaman
        // Anda mungkin ingin mengarahkan ini ke rute spesifik, misalnya: navigate('/#experience');
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
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                        <h3 className="text-white font-semibold text-lg mb-2">{image.caption}</h3>
                        <p className="text-gray-300">{image.description}</p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
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
            <section id="hard-skills-experience-detail" className="py-32 bg-black relative overflow-hidden min-h-screen section-padding">
                {/* Advanced Background Elements */}
                <div className="animated-bg-elements">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/20 animate-pulse"></div>
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-900/10 via-transparent to-transparent"></div>
                    </div>

                    <div className="absolute top-1/4 right-1/6 w-72 h-72 border-2 border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
                        <div className="absolute inset-4 border border-orange-500/30 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-1/3 left-1/5 w-48 h-48 border border-blue-500/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
                    
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-ping"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        ></div>
                    ))}

                    <div 
                        className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-1000 ease-out"
                        style={{
                            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
                            left: mousePosition.x - 192,
                            top: mousePosition.y - 192,
                        }}
                    ></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Navigation Header */}
                        <div className="flex items-center justify-between mb-12">
                            <button
                                onClick={handleGoBack}
                                className="flex items-center text-white hover:text-purple-400 transition-all duration-300 group"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-all duration-300" />
                                <span className="text-lg">Kembali ke Ringkasan Pengalaman</span>
                            </button>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    Terakhir Diperbarui: {new Date().toLocaleDateString()}
                                </span>
                            </div>
                        </div>

                        {/* Main Title */}
                        <div className="text-center mb-20">
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                                Pengalaman <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Hard Skill</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Detail perjalanan akademik dan pelatihan teknis saya.
                            </p>
                            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full mt-4"></div>
                        </div>

                        {/* Experience Cards Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {sortedExperiences.map((exp, index) => {
                                const IconComponent = iconComponents[exp.icon];
                                return (
                                <div 
                                    key={index} 
                                    className={`experience-card bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden transform opacity-0 translate-y-10 transition-all duration-700 ease-out ${visibleItems.has(index) ? 'opacity-100 translate-y-0' : ''}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {/* Card glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        {/* Icon and Title */}
                                        <div className="flex items-center mb-6">
                                            <div className="text-5xl mr-4 flex-shrink-0 text-white">
                                                {/* Render icon jika ditemukan */}
                                                {IconComponent && <IconComponent className="w-12 h-12" />}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-white mb-1">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-sm text-gray-400 flex items-center">
                                                    <Calendar className="w-4 h-4 mr-2" /> {exp.date}
                                                    <span className="mx-2 text-gray-600">|</span>
                                                    <MapPin className="w-4 h-4 mr-2" /> {exp.location}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Overview */}
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {exp.overview}
                                        </p>

                                        {/* Photos Section */}
                                        {exp.photos && exp.photos.length > 0 && (
                                            <div className="mb-6">
                                                <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                    <Camera className="w-5 h-5 mr-2 text-cyan-400" /> Galeri
                                                </h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {exp.photos.slice(0, 2).map((photo, i) => ( 
                                                        <div 
                                                            key={i} 
                                                            className="relative group cursor-pointer rounded-lg overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                                                            onClick={() => setSelectedImage(photo)}
                                                        >
                                                            <img 
                                                                src={photo.url} 
                                                                alt={photo.caption} 
                                                                className="w-full h-32 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                                                            />
                                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                <Play className="w-6 h-6 text-white" />
                                                            </div>
                                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                {photo.caption}
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {exp.photos.length > 2 && (
                                                        <div className="flex items-center justify-center text-gray-400 text-sm mt-2">
                                                            <span>+{exp.photos.length - 2} foto lainnya</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Key Achievements */}
                                        <div className="mb-6">
                                            <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                <Award className="w-5 h-5 mr-2 text-purple-400" /> Pencapaian Utama
                                            </h4>
                                            <ul className="list-none space-y-2 text-gray-300">
                                                {exp.achievements.map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0 mt-2 mr-3"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Skills */}
                                        <div className="mb-6">
                                            <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                <Code className="w-5 h-5 mr-2 text-orange-400" /> Skill yang Digunakan
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {exp.skills.map((skill, i) => (
                                                    <span key={i} className="px-4 py-2 bg-gray-800/60 rounded-full text-sm text-gray-300 border border-gray-700 hover:border-purple-500 transition-colors duration-200">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Impact */}
                                        <div className="mb-6">
                                            <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                <TrendingUp className="w-5 h-5 mr-2 text-green-400" /> Dampak
                                            </h4>
                                            <p className="text-gray-300 leading-relaxed">{exp.impact}</p>
                                        </div>

                                        {/* Lessons Learned */}
                                        <div className="mb-0"> 
                                            <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" /> Pelajaran yang Diambil
                                            </h4>
                                            <ul className="list-none space-y-2 text-gray-300">
                                                {exp.lessons.map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex-shrink-0 mt-2 mr-3"></span>
                                                        {item}
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

                {/* Image Modal */}
                <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
            </section>
        </>
    );
};

export default HardSkillsExperiencePage;
