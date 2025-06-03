import React, { useState, useEffect } from 'react';
import { 
    ArrowLeft, 
    Calendar, 
    MapPin, 
    Users, 
    Award, 
    Target, 
    Lightbulb, 
    Zap,
    Camera,
    ExternalLink,
    Play,
    Heart,
    Star,
    TrendingUp,
    BookOpen, // Added for academic section
    Code, // Added for skills
    Briefcase // Added for general experience
    } from 'lucide-react';

    const ExperienceDetail = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [visibleItems, setVisibleItems] = useState(new Set());

    // Track mouse position for dynamic effects
    useEffect(() => {
        const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Intersection Observer for revealing items
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

        const elements = document.querySelectorAll('[data-index]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const detailedExperiences = [
        {
        type: 'binus',
        title: 'Academic Excellence at BINUS',
        color: 'from-blue-500 to-purple-600',
        icon: <BookOpen className="w-12 h-12" />, // Changed to Lucide icon
        period: '2022 - Present',
        location: 'BINUS University, Bandung',
        overview: 'My journey as a Computer Science student at BINUS has been marked by academic excellence, specialization in Database systems, and active participation in advanced learning programs. Through mobility programs and hands-on research, I\'ve developed a strong foundation in both theoretical concepts and practical applications.',
        images: [
            {
            url: 'https://placehold.co/600x400/1f2937/9ca3af?text=BINUS+Campus',
            caption: 'BINUS Bandung Campus - My academic home',
            description: 'The modern facilities and learning environment at BINUS Bandung'
            },
            {
            url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Database+Lab',
            caption: 'Database Lab Session',
            description: 'Working on advanced database optimization projects'
            },
            {
            url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Mobility+Program',
            caption: 'Mobility Program at BINUS Anggrek',
            description: 'Participating in specialized Database courses at the main campus'
            }
        ],
        experiences: [
            {
            name: 'Computer Science Student - Database Specialization',
            location: 'BINUS Bandung & BINUS Anggrek',
            date: '2022 - Present',
            role: 'Student & Researcher',
            description: 'Pursuing Computer Science with a specialized focus on Database systems. Participated in a prestigious mobility program to BINUS Anggrek campus to deepen knowledge in advanced database concepts and implementation.',
            achievements: [
                'Maintained high academic performance across all semesters',
                'Successfully completed mobility program for Database specialization',
                'Engaged in practical labs covering computational physics and circuit simulation',
                'Participated in distributed systems research projects',
                'Collaborated with international students and faculty'
            ],
            skills: ['Database Design', 'SQL Optimization', 'Distributed Systems', 'Data Analysis', 'Research Methodology'],
            impact: 'Developed comprehensive understanding of modern database architectures and their real-world applications in enterprise systems.',
            lessons: [
                'The importance of theoretical knowledge backed by practical implementation',
                'How to adapt quickly to new learning environments and methodologies',
                'The value of interdisciplinary learning in technology fields'
            ],
            photos: [
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=ERD+Design', caption: 'Database ERD Design Workshop' },
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Circuit+Lab', caption: 'Circuit Simulation Lab' },
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Team+Project', caption: 'Team Project Presentation' }
            ]
            }
        ]
        },
        {
        type: 'bncc',
        title: 'Leadership & Organization at BNCC',
        color: 'from-orange-500 to-red-500',
        icon: <Users className="w-12 h-12" />, // Changed to Lucide icon
        period: '2022 - Present',
        location: 'BINUS Computer Club',
        overview: 'My involvement with BNCC has been transformative, taking on multiple leadership roles from event coordination to content creation. Leading events with 200+ participants and working with international speakers has honed my organizational, communication, and creative skills.',
        images: [
            {
            url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Techbinar+AI',
            caption: 'Techbinar AI Event - 200+ Participants',
            description: 'Successfully coordinated international speakers for AI learning seminar'
            },
            {
            url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Event+Planning',
            caption: 'Behind the Scenes - Event Planning',
            description: 'Planning and coordinating logistics for major tech events'
            },
            {
            url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Content+Studio',
            caption: 'Content Creation Studio',
            description: 'Producing cinematic trailers and promotional content'
            }
        ],
        experiences: [
            {
            name: 'Event Coordinator - Techbinar "Smart Learning Based on AI"',
            location: 'BNCC',
            date: '2023',
            role: 'Lead Coordinator',
            description: 'Spearheaded the organization of a major technology seminar focusing on AI in education. Managed end-to-end event planning, from concept development to execution, including coordination with international speakers.',
            achievements: [
                'Successfully attracted 200+ participants (both onsite and online)',
                'Coordinated with 3 international AI experts as keynote speakers',
                'Managed a team of 15+ volunteers and organizers',
                'Achieved 95% participant satisfaction rate',
                'Generated significant social media engagement and industry recognition'
            ],
            skills: ['Event Management', 'International Coordination', 'Team Leadership', 'Budget Management', 'Marketing Strategy'],
            impact: 'The event became one of BNCC\'s most successful seminars, establishing new standards for future tech events and creating lasting connections with industry professionals.',
            lessons: [
                'How to manage complex projects with multiple stakeholders',
                'The importance of backup plans and crisis management',
                'Building international professional networks in tech industry'
            ],
            photos: [
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Opening+Ceremony', caption: 'Opening Ceremony with International Speakers' },
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Audience+Session', caption: 'Audience Engagement Session' },
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Team+Meeting', caption: 'Team Coordination Meeting' }
            ]
            },
            {
            name: 'Multi-Event Organizer - Techwinter & Techblast',
            location: 'BNCC',
            date: '2022-2023',
            role: 'Event Organizer & Content Developer',
            description: 'Organized multiple technology-focused events aimed at high school students, including workshops, competitions, and tech showcases. Developed promotional materials and managed outreach programs.',
            achievements: [
                'Organized 2 major events reaching 500+ high school students',
                'Developed comprehensive workshop curricula for programming basics',
                'Created engaging promotional campaigns that increased event attendance by 40%',
                'Established partnerships with 10+ high schools in the region',
                'Mentored 50+ students in technology fundamentals'
            ],
            skills: ['Workshop Development', 'Youth Engagement', 'Educational Content Creation', 'Partnership Building', 'Promotional Design'],
            impact: 'Inspired hundreds of high school students to pursue technology careers and strengthened BNCC\'s reputation in the educational community.',
            lessons: [
                'How to communicate complex technical concepts to younger audiences',
                'The power of hands-on learning in technology education',
                'Building sustainable partnerships with educational institutions'
            ],
            photos: [
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=High+School+Workshop', caption: 'High School Workshop Session' },
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Programming+Comp', caption: 'Programming Competition' },
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Student+Mentoring', caption: 'Student Mentoring Session' }
            ]
            },
            {
            name: 'Content Creator - Week of Welcoming',
            location: 'BNCC',
            date: '2022',
            role: 'Creative Director & Video Producer',
            description: 'Led the creative development and production of cinematic event trailers and promotional content for BNCC\'s major welcoming events. Handled everything from concept to final production.',
            achievements: [
                'Produced 5+ cinematic trailers with over 10K combined views',
                'Increased event attendance by 60% through compelling visual content',
                'Established BNCC\'s new visual identity and content standards',
                'Trained junior members in video production and editing',
                'Won internal recognition for outstanding creative contribution'
            ],
            skills: ['Video Production', 'Creative Direction', 'Adobe Creative Suite', 'Storytelling', 'Brand Development'],
            impact: 'Elevated BNCC\'s content quality and brand perception, setting new standards for organizational marketing and member engagement.',
            lessons: [
                'The power of visual storytelling in building community engagement',
                'How to balance creativity with organizational goals',
                'The importance of consistent brand messaging across all content'
            ],
            photos: [
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Video+Production', caption: 'Video Production Setup' },
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Editing+Session', caption: 'Editing Session' },
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Trailer+Screening', caption: 'Final Trailer Screening' }
            ]
            },
            {
            name: 'Public Relations & Partnership Specialist',
            location: 'BNCC',
            date: '2022-Present',
            role: 'PR Manager & Partnership Developer',
            description: 'Developed and maintained strategic partnerships with external organizations while managing BNCC\'s public relations efforts. Created compelling proposals and presentations to secure collaborations.',
            achievements: [
                'Secured partnerships with 8+ major tech companies and organizations',
                'Wrote 15+ successful partnership proposals with 80% acceptance rate',
                'Increased BNCC\'s external visibility through strategic PR campaigns',
                'Delivered presentations to C-level executives and academic leaders',
                'Developed long-term relationships that continue to benefit the organization'
            ],
            skills: ['Business Writing', 'Presentation Skills', 'Relationship Management', 'Strategic Planning', 'Negotiation'],
            impact: 'Significantly expanded BNCC\'s network and resources, enabling larger and more impactful events and programs for the community.',
            lessons: [
                'How to identify and approach potential partners effectively',
                'The art of crafting compelling value propositions',
                'Building and maintaining professional relationships in the tech industry'
            ],
            photos: [
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Partnership+Signing', caption: 'Partnership Signing Ceremony' },
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Corporate+Presentation', caption: 'Corporate Presentation' },
                { url: 'https://placehold.co/400x300/1f2937/9ca3af?text=Networking+Event', caption: 'Networking Event' }
            ]
            }
        ]
        }
    ];

    const handleGoBack = () => {
        window.history.back();
        // Or if using React Router: navigate(-1);
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
        <section id="experience-detail" className="py-32 bg-black relative overflow-hidden min-h-screen section-padding">
        {/* Advanced Background Elements - Menggunakan kelas global untuk konsistensi */}
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
                <span className="text-lg">Back to Overview</span>
                </button>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Last Updated: {new Date().toLocaleDateString()}
                </span>
                </div>
            </div>

            {/* Main Title */}
            <div className="text-center mb-20">
                <h1 className="section-title">
                Detailed <span className="text-gradient-primary">Experience</span>
                </h1>
                <p className="section-subtitle">
                Dive deeper into my academic journey and organizational leadership.
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
            </div>

            {/* Experience Sections */}
            {detailedExperiences.map((section, sectionIndex) => (
                <div key={section.type} className="mb-24 last:mb-0">
                <div 
                    className="flex items-center justify-center md:justify-start mb-12 group cursor-pointer"
                    onMouseEnter={() => setActiveSection(sectionIndex)}
                    onMouseLeave={() => setActiveSection(null)}
                >
                    <div className={`text-6xl mr-6 group-hover:scale-110 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r ${section.color}`}>
                    {section.icon}
                    </div>
                    <div>
                    <h2 className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${section.color} mb-2 group-hover:scale-105 transition-all duration-300`}>
                        {section.title}
                    </h2>
                    <p className="text-gray-400 text-lg flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-gray-500" /> {section.period} &nbsp; | &nbsp; 
                        <MapPin className="w-5 h-5 mr-2 text-gray-500" /> {section.location}
                    </p>
                    <div className={`h-2 w-32 bg-gradient-to-r ${section.color} rounded-full transform origin-left transition-all duration-500 ${activeSection === sectionIndex ? 'scale-x-150' : 'scale-x-100'}`}></div>
                    </div>
                </div>

                <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto md:mx-0">
                    {section.overview}
                </p>

                {/* Overview Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {section.images.map((img, imgIndex) => (
                    <div 
                        key={imgIndex} 
                        className="card-base cursor-pointer hover:scale-[1.02] transform transition-all duration-300"
                        onClick={() => setSelectedImage(img)}
                        data-index={`${sectionIndex}-${imgIndex}`} // For Intersection Observer
                    >
                        <div className="relative h-48 overflow-hidden rounded-xl">
                        <img 
                            src={img.url} 
                            alt={img.caption} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Camera className="w-8 h-8 text-white" />
                        </div>
                        </div>
                        <div className="p-4">
                        <h4 className="text-md font-semibold text-white">{img.caption}</h4>
                        <p className="text-sm text-gray-400">{img.description}</p>
                        </div>
                    </div>
                    ))}
                </div>

                {/* Individual Experiences within the section */}
                <div className="space-y-16">
                    {section.experiences.map((exp, expIndex) => (
                    <div 
                        key={expIndex} 
                        className="card-base p-8 hover:shadow-purple-500/10 relative overflow-hidden"
                        data-index={`${sectionIndex}-${expIndex}-detail`} // For Intersection Observer
                    >
                        {/* Card glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        
                        <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition-all duration-300">
                            {exp.name}
                        </h3>
                        <p className="text-xl text-gray-300 mb-2 flex items-center">
                            <Briefcase className="w-5 h-5 mr-2 text-gray-500" /> {exp.role}
                        </p>
                        <p className="text-md text-gray-400 mb-4 flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" /> {exp.location} &nbsp; | &nbsp; 
                            <Calendar className="w-4 h-4 mr-2 text-gray-500" /> {exp.date}
                        </p>
                        
                        <p className="text-gray-300 leading-relaxed mb-6">
                            {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-purple-400" /> Key Achievements
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
                            <Code className="w-5 h-5 mr-2 text-orange-400" /> Skills Utilized
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
                            <TrendingUp className="w-5 h-5 mr-2 text-green-400" /> Impact
                            </h4>
                            <p className="text-gray-300 leading-relaxed">{exp.impact}</p>
                        </div>

                        {/* Lessons Learned */}
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" /> Lessons Learned
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

                        {/* Photos */}
                        {exp.photos && exp.photos.length > 0 && (
                            <div>
                            <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                                <Camera className="w-5 h-5 mr-2 text-cyan-400" /> Gallery
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {exp.photos.map((photo, i) => (
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
                            </div>
                            </div>
                        )}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Image Modal */}
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        </section>
    );
};

export default ExperienceDetail;
