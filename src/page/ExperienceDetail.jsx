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
    Link as LinkIcon // Renamed Link to LinkIcon to avoid conflict
} from 'lucide-react';

const ExperienceDetail = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [visibleItems, setVisibleItems] = useState(new Set()); // For reveal animation

    // Track mouse position for dynamic background effects
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
            { threshold: 0.1 } // Trigger when 10% of the item is visible
        );

        const elements = document.querySelectorAll('.experience-card');
        elements.forEach((el, index) => {
            el.dataset.index = index; // Assign data-index for observer
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Consolidated and chronologically ordered detailed experiences
    const detailedExperiences = [
        // BINUS Academic Journey
        {
            type: 'academic',
            title: 'Computer Science Student (Database Specialization)',
            icon: <BookOpen className="w-12 h-12" />,
            date: 'August 2022 - Present',
            location: 'BINUS University, Bandung & Jakarta',
            overview: 'Began my Computer Science degree with a strong emphasis on Database Systems. Actively engaged in foundational courses and specialized labs, laying the groundwork for advanced technical understanding.',
            achievements: [
                'Successfully completed core Computer Science curriculum.',
                'Specialized in Database Management, enhancing data structuring and retrieval skills.',
                'Participated in a mobility program to BINUS Anggrek for advanced database concepts.',
                'Engaged in practical computational physics and circuit simulation labs.',
                'Contributed to distributed systems research projects.'
            ],
            skills: ['Database Design', 'SQL Optimization', 'Distributed Systems', 'Data Analysis', 'Research Methodology', 'Java', 'C++', 'Python'],
            impact: 'Developed a comprehensive understanding of modern database architectures and their real-world applications in enterprise systems.',
            lessons: [
                'The importance of theoretical knowledge backed by practical implementation.',
                'How to adapt quickly to new learning environments and methodologies.',
                'The value of interdisciplinary learning in technology fields.'
            ],
            photos: [
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=BINUS+Campus', caption: 'BINUS Bandung Campus - My academic home', description: 'The modern facilities and learning environment at BINUS Bandung' },
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Database+Lab', caption: 'Database Lab Session', description: 'Working on advanced database optimization projects' },
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Mobility+Program', caption: 'Mobility Program at BINUS Anggrek', description: 'Participating in specialized Database courses at the main campus' }
            ]
        },
        // Freshman Leader & Partner
        {
            type: 'freshman-leader',
            title: 'Freshman Leader & Partner',
            icon: <Users className="w-12 h-12" />,
            date: 'August 2022 - September 2023', 
            location: 'BINUS University',
            overview: 'Dedicated time to guiding and mentoring incoming university students, assisting them in their transition to academic and campus life. Played a crucial role in fostering a welcoming and supportive environment for new cohorts.',
            achievements: [
                'Successfully onboarded and guided numerous freshmen into university life.',
                'Provided academic and social support, easing their transition.',
                'Developed strong communication, empathy, and mentorship skills.',
                'Contributed significantly to creating a welcoming university environment for new students.'
            ],
            skills: ['Mentorship', 'Communication', 'Empathy', 'Conflict Resolution', 'Student Support', 'Facilitation'],
            impact: 'Improved the integration experience for new students, enhancing their initial university experience and promoting a sense of belonging.',
            lessons: [
                'The importance of active listening and understanding individual student needs.',
                'How to provide constructive feedback and encouragement.',
                'Building a strong, supportive community within the university setting.'
            ],
            photos: [
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Freshman+Orientation', caption: 'Freshman Orientation Session', description: 'Guiding new students through university policies and resources' },
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Mentoring+Session', caption: 'Group Mentoring Session', description: 'Facilitating discussions and problem-solving among freshmen' }
            ]
        },
        // BNCC Activist: Master of Ceremonies (Study Banding)
        {
            type: 'bncc-activist-mc',
            title: 'BNCC Activist: Master of Ceremonies (Study Banding)',
            icon: <Users className="w-12 h-12" />, 
            date: 'October 2022', 
            location: 'BINUS University & CCI Telkom',
            overview: 'Served as the Master of Ceremonies for a collaborative study banding event between CCI Telkom and BNCC All Region, facilitating smooth transitions and engaging interactions.',
            achievements: [
                'Successfully hosted collaborative study banding event with CCI Telkom and BNCC All Region.',
                'Ensured professional flow and engagement for a large, diverse audience.',
                'Facilitated inter-regional BNCC collaboration and networking.'
            ],
            skills: ['Public Speaking', 'Event Hosting', 'Facilitation', 'Interpersonal Communication', 'Event Management'],
            impact: 'Contributed to a successful collaborative event, strengthening ties between BNCC regions and external organizations, enhancing the club\'s reputation.',
            lessons: [
                'The importance of clear and concise communication in multi-stakeholder events.',
                'Adapting presentation style and energy to keep diverse audiences engaged.'
            ],
            photos: [
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=MC+Study+Banding', caption: 'Hosting Study Banding Event', description: 'Engaging with participants during the collaborative study banding.' },
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=CCI+Collaboration', caption: 'CCI Telkom & BNCC Collaboration', description: 'Networking session with representatives from CCI Telkom.' }
            ]
        },
        // BNCC Activist: Publication Division Member (Opening Season)
        {
            type: 'bncc-activist-pub-os',
            title: 'BNCC Activist: Publication Division Member (Opening Season)',
            icon: <Camera className="w-12 h-12" />, 
            date: 'September 2022', 
            location: 'BINUS Computer Club (BNCC)',
            overview: 'Contributed as a member of the Publication Division for BNCC Opening Season, focusing on creating engaging promotional content and enhancing event visibility.',
            achievements: [
                'Contributed to the visual and written content for BNCC Opening Season promotion.',
                'Helped in increasing event awareness and participant registration through creative campaigns.',
                'Collaborated on designing compelling promotional materials for student outreach.'
            ],
            skills: ['Content Creation', 'Digital Marketing', 'Promotional Design', 'Team Collaboration', 'Visual Communication'],
            impact: 'Played a significant role in successfully launching the BNCC Opening Season and attracting a high number of new members, enhancing the club\'s brand image.',
            lessons: [
                'Understanding the target audience for effective promotional campaigns is crucial.',
                'The importance of consistent visual branding and clear messaging in attracting engagement.'
            ],
            photos: [
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=BNCC+Opening+Season', caption: 'BNCC Opening Season Promotions', description: 'Promotional materials developed for the event.' },
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Promo+Design', caption: 'Creative Design Session', description: 'Collaborating on visual assets for event promotion.' }
            ]
        },
        // BNCC Activist: Event Coordinator (Techbinar)
        {
            type: 'bncc-activist-techbinar-coord',
            title: 'BNCC Activist: Event Coordinator (Techbinar)',
            icon: <Lightbulb className="w-12 h-12" />,
            date: 'November 2022', 
            location: 'BINUS Computer Club (BNCC)',
            overview: 'Coordinated the event division for Techbinar, managing logistics and speaker arrangements for a hybrid event with over 200 participants, both onsite and online.',
            achievements: [
                'Led event division, successfully executing Techbinar with 200+ participants (onsite & online).',
                'Managed end-to-end logistics, including international speaker coordination for a seamless event flow.',
                'Ensured smooth technical execution for both physical and virtual attendees.'
            ],
            skills: ['Event Planning', 'Hybrid Event Management', 'Team Coordination', 'Logistics Management', 'Speaker Relations', 'Problem Solving'],
            impact: 'Contributed significantly to the successful delivery of a major tech seminar, enhancing BNCC\'s reputation and expanding its reach to a wider audience.',
            lessons: [
                'Importance of meticulous planning for hybrid events to ensure a consistent experience for all participants.',
                'Effective task delegation and clear team communication are vital for complex event execution.'
            ],
            photos: [
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Techbinar+Coordination', caption: 'Techbinar Event Coordination', description: 'Overseeing event setup and technical checks.' },
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Virtual+Audience', caption: 'Engaging Online Audience', description: 'Monitoring online participation during Techbinar.' }
            ]
        },
        // BNCC Activist: Event Division Head (Techblast)
        {
            type: 'bncc-activist-techblast-chair',
            title: 'BNCC Activist: Event Division Head (Techblast)',
            icon: <Lightbulb className="w-12 h-12" />, 
            date: 'March 2023', 
            location: 'BINUS Computer Club (BNCC)',
            overview: 'Served as the Head of the Event Division for Techblast, overseeing a large-scale outreach event that successfully engaged over 800 high school students across multiple schools.',
            achievements: [
                'Successfully led Techblast event engaging 800+ high school student participants.',
                'Coordinated multiple school visits and designed interactive sessions tailored for youth engagement.',
                'Managed a large team to ensure smooth event execution across various educational institutions.'
            ],
            skills: ['Large-scale Event Management', 'Team Leadership', 'Youth Engagement', 'Educational Outreach', 'Logistics & Operations'],
            impact: 'Significantly expanded BNCC\'s outreach to high schools, inspiring numerous students to engage with technology and strengthening the club\'s presence in the education sector.',
            lessons: [
                'Strategies for managing large-scale, multi-location events with diverse logistical needs.',
                'Building effective and sustainable partnerships with educational institutions for long-term impact.'
            ],
            photos: [
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Techblast+Event', caption: 'Techblast Event at Schools', description: 'Students participating in Techblast activities.' },
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=School+Engagement', caption: 'Engaging High School Students', description: 'Interactive sessions designed to spark interest in technology.' }
            ]
        },
        // Lisk Bootcamp
        {
            type: 'lisk-bootcamp',
            title: 'Lisk Blockchain Bootcamp Participant',
            icon: <Zap className="w-12 h-12" />,
            date: 'August 2023', 
            location: 'Online',
            overview: 'Completed an intensive online bootcamp focused on the Lisk blockchain platform. Gained practical skills in building decentralized applications (DApps) using the Lisk SDK and explored modular blockchain architectures.',
            achievements: [
                'Gained hands-on experience with Lisk SDK for DApp development.',
                'Understood blockchain interoperability concepts.',
                'Explored custom blockchain creation and sidechain technology.'
            ],
            skills: ['Lisk SDK', 'JavaScript (Blockchain)', 'DApp Development', 'Blockchain Architecture', 'Interoperability'],
            impact: 'Expanded my understanding of specific blockchain frameworks and gained practical experience in a modular blockchain ecosystem.',
            lessons: [
                'The benefits of modular blockchain design for scalability and flexibility.',
                'Hands-on experience accelerates learning in complex technical domains.',
                'Importance of community support in open-source blockchain projects.'
            ],
            photos: [
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Lisk+Bootcamp+Certificate', caption: 'Lisk Bootcamp Certificate', description: 'Proof of completion for the Lisk Blockchain Bootcamp' },
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Lisk+Code', caption: 'Lisk DApp Development Code', description: 'Code snippets from building a sample DApp on Lisk' }
            ]
        },
        // ICP Bootcamp
        {
            type: 'icp-bootcamp',
            title: 'ICP Blockchain Bootcamp Participant',
            icon: <LinkIcon className="w-12 h-12" />, 
            date: 'September 2023',
            location: 'Online',
            overview: 'Participated in a comprehensive online bootcamp covering the Internet Computer Protocol (ICP). Deepened my knowledge of decentralized cloud computing, canister smart contract development, and WebAssembly integration.',
            achievements: [
                'Learned canister smart contract development on ICP using Motoko/Rust.',
                'Understood ICP\'s actor model and WebAssembly integration.',
                'Explored chain-key cryptography for scalable decentralized applications.'
            ],
            skills: ['ICP', 'Canister Smart Contracts', 'Motoko', 'Rust', 'WebAssembly', 'Decentralized Cloud'],
            impact: 'Acquired specialized skills in a unique blockchain paradigm, understanding a new approach to building fully decentralized internet services.',
            lessons: [
                'The potential of a truly decentralized internet computing platform.',
                'Challenges and benefits of developing on a novel blockchain architecture.',
                'Importance of security and scalability in decentralized systems.'
            ],
            photos: [
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=ICP+Bootcamp+Content', caption: 'ICP Bootcamp Learning Material', description: 'Key modules and concepts from the ICP bootcamp' },
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Canister+Development', caption: 'ICP Canister Development', description: 'Example of smart contract code on the Internet Computer' }
            ]
        },
        // BNCC Officer: Mentor (Event Division)
        {
            type: 'bncc-officer-mentor',
            title: 'BNCC Officer: Mentor (Event Division)',
            icon: <Award className="w-12 h-12" />, 
            date: 'September 2023 - Present', 
            location: 'BINUS Computer Club (BNCC)',
            overview: 'Assumed the role of a mentor for activists within the Event Division, guiding them in planning and executing events, including Techbinar with over 500 participants (both onsite and online).',
            achievements: [
                'Mentored a team of activists in organizing large-scale events, leading to successful execution.',
                'Guided the successful execution of Techbinar with 500+ participants (onsite & online).',
                'Fostered skill development and leadership among junior members.',
                'Ensured continuity of high-quality event delivery within the division and upheld BNCC standards.'
            ],
            skills: ['Mentorship', 'Leadership Development', 'Event Oversight', 'Strategic Planning', 'Problem Solving', 'Team Empowerment'],
            impact: 'Empowered a new generation of BNCC event organizers, contributing to the continued success and growth of the organization\'s impactful events and fostering a strong sense of community.',
            lessons: [
                'The art of effective delegation and building trust in team members for greater autonomy.',
                'Cultivating a supportive learning environment is key for budding leaders and their professional growth.',
                'Measuring success extends beyond numbers to include skill development and confidence building in team members.'
            ],
            photos: [
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Mentor+Session', caption: 'Mentoring Session with Activists', description: 'Providing guidance and support to the event division team.' },
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Techbinar+500', caption: 'Techbinar Event (500+ Participants)', description: 'The successful event organized by the mentored team.' },
            ]
        },
        // Ethjakarta Monad Bootcamp
        {
            type: 'ethjakarta-monad',
            title: 'Ethjakarta: Monad Bootcamp Participant',
            icon: <Zap className="w-12 h-12" />, 
            date: 'November 2023',
            location: 'Jakarta, Indonesia',
            overview: 'Attended the Monad bootcamp during Ethjakarta, gaining specialized insights into high-performance, EVM-compatible blockchains. Focused on understanding the architectural optimizations for parallel execution and scalability.',
            achievements: [
                'Gained insights into Monad\'s parallel execution environment.',
                'Understood optimized EVM architecture and scalability solutions.',
                'Networked with blockchain industry leaders and developers at Ethjakarta.'
            ],
            skills: ['EVM', 'Blockchain Scalability', 'Parallel Execution', 'Layer 1 Blockchains', 'Networking'],
            impact: 'Deepened my understanding of advanced blockchain scaling techniques and connected with key players in the Ethereum ecosystem.',
            lessons: [
                'The evolution of EVM-compatible chains to address performance bottlenecks.',
                'Value of direct interaction with industry experts at conferences.',
                'Identifying emerging trends in blockchain technology.'
            ],
            photos: [
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Ethjakarta+Event', caption: 'Ethjakarta Conference Venue', description: 'Attending sessions and workshops at Ethjakarta' },
                { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Monad+Workshop', caption: 'Monad Bootcamp Session', description: 'Learning about Monad\'s technical architecture' }
            ]
        },
    ].sort((a, b) => new Date(a.date.split(' - ')[0].replace(/Present$/, '2099')) - new Date(b.date.split(' - ')[0].replace(/Present$/, '2099'))); // Sort by start date, handling 'Present'

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
                        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                            Detailed <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Experience</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            A closer look at my academic, organizational, and technical endeavors.
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full mt-4"></div>
                    </div>

                    {/* Experience Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {detailedExperiences.map((exp, index) => (
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
                                            {exp.icon}
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
                                                <Camera className="w-5 h-5 mr-2 text-cyan-400" /> Gallery
                                            </h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                {exp.photos.slice(0, 2).map((photo, i) => ( // Show first 2 photos as preview
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
                                                        <span>+{exp.photos.length - 2} more photos</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Key Achievements */}
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
                                    <div className="mb-0"> {/* Removed mb-6 if it's the last section */}
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        </section>
    );
};

export default ExperienceDetail;
