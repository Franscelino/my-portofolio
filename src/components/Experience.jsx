import React from 'react';

const Experience = () => {
  // Data for your BINUS and BNCC experiences
  const experiences = [
    {
      type: 'binus',
      title: 'BINUS Experience',
      items: [
        {
          name: 'Computer Science Student',
          location: 'BINUS Bandung',
          date: 'Ongoing', // Anda bisa mengubah ini ke tanggal mulai/selesai jika ada
          details: [
            'Participated in a mobility program to BINUS Anggrek to deepen knowledge in Database specialization.',
            'Actively engaged in practical labs and self-study, including computational physics, basic circuit simulation, and distributed systems.',
          ],
        },
      ],
    },
    {
      type: 'bncc',
      title: 'Organizational Experience (BNCC)',
      items: [
        {
          name: 'Event Coordinator – Techbinar “Smart Learning Based on AI”',
          location: 'BNCC',
          details: [
            'Conceptualized, managed logistics, and invited international speakers for an event with 200+ onsite and online participants.',
          ],
        },
        {
          name: 'Event Organizer – Techwinter & Techblast',
          location: 'BNCC',
          details: [
            'Developed promotional materials, organized workshops, and showcased to high schools.',
          ],
        },
        {
          name: 'Content Creator – Week of Welcoming',
          location: 'BNCC',
          details: [
            'Produced cinematic and professional event trailers for BNCC.',
          ],
        },
        {
          name: 'Public Relations & Partnership',
          location: 'BNCC',
          details: [
            'Wrote partnership proposals, delivered presentations, and crafted engaging promotional captions.',
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements for Experience Section */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-orange-500/10 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 border border-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Experience</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
          </div>

          {/* Dynamic Experience Sections */}
          <div className="space-y-16"> {/* Increased gap between sections */}
            {experiences.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {/* Section Category Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center md:text-left">
                  {section.title}
                  <span className="block w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto md:mx-0 mt-3 rounded-full"></span>
                </h3>

                {/* Items within each section (timeline style) */}
                <div className="relative border-l-2 border-gray-700 ml-4 md:ml-0 md:pl-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="mb-12 relative group">
                      {/* Timeline dot/marker */}
                      <div className="absolute -left-3 top-0 mt-1 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 z-10 border-2 border-black transition-all duration-300 group-hover:scale-125"></div>
                      
                      {/* Experience Card */}
                      <div className="bg-gray-900/40 rounded-xl p-6 pl-10 md:pl-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-lg relative overflow-hidden">
                        {/* Subtle gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                        <h4 className="relative text-xl font-semibold text-white mb-2">
                          {item.name}
                          <span className="block w-0 h-0.5 bg-gradient-to-r from-purple-400 to-orange-400 transition-all duration-300 group-hover:w-1/4 mt-2"></span>
                        </h4>
                        {item.location && <p className="relative text-lg text-gray-300 mb-1">{item.location}</p>}
                        {item.date && <p className="relative text-sm text-gray-400 mb-4">{item.date}</p>}
                        
                        <ul className="relative space-y-2 text-gray-300 text-sm list-none pl-0">
                          {item.details.map((desc, descIndex) => (
                            <li key={descIndex} className="flex items-start">
                              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 mr-3 mt-1 flex-shrink-0"></span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
