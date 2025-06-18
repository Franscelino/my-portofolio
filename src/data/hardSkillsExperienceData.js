// hardSkillsExperienceData.js
// File ini hanya berisi data untuk pengalaman hard skill.
// Icon direpresentasikan sebagai string nama icon.

const hardSkillsExperiences = [
    {
        type: 'academic',
        title: 'Computer Science Student (Database Specialization)',
        icon: 'BookOpen', // Menggunakan string nama icon
        date: 'August 2022 - Present',
        location: 'BINUS University, Bandung & Jakarta',
        overview: 'Began my Computer Science degree with a strong emphasis on Database Systems. Actively engaged in foundational courses and specialized labs, laying the groundwork for advanced technical understanding.',
        achievements: [
            'Successfully completed core Computer Science curriculum.',
            'Specialized in Database Management, enhancing data structuring and retrieval skills.',
            'Participaged in a mobility program to BINUS Anggrek for advanced database concepts.',
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
    {
        type: 'lisk-bootcamp',
        title: 'Lisk Blockchain Bootcamp Participant',
        icon: 'Zap',
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
    {
        type: 'icp-bootcamp',
        title: 'ICP Blockchain Bootcamp Participant',
        icon: 'LinkIcon', 
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
    {
        type: 'ethjakarta-monad',
        title: 'Ethjakarta: Monad Bootcamp Participant',
        icon: 'Zap', 
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
];

export default hardSkillsExperiences;
