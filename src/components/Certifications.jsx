import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import certificationsData from '../data/certificationsData';

const Certifications = () => {
    const navigate = useNavigate();
    const highlightedCerts = certificationsData.slice(0, 3);

    const handleNavigate = () => {
        navigate('/certifications');
    };

    return (
        <section id="certifications" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-orange-900/10"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Certifications</span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            A snapshot of my key credentials and competitive achievements.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {highlightedCerts.map((cert) => (
                            <div key={cert.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex flex-col group overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-2">
                                {/* === GAMBAR DITAMBAHKAN DI SINI === */}
                                <div className="aspect-video overflow-hidden">
                                    <img 
                                        src={cert.imageUrl} 
                                        alt={cert.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                    <p className="text-sm font-semibold text-gray-400 mb-4">{cert.issuer}</p>
                                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 flex-grow">
                                        {cert.overview}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <button
                            onClick={handleNavigate}
                            className="btn-primary inline-flex items-center px-8 py-4 text-base font-bold group"
                        >
                            <span>View All Certifications</span>
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;