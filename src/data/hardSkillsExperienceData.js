const hardSkillsExperiences = [
    {
        type: 'academic',
        title: 'Computer Science Student (Database Specialization)',
        icon: 'BookOpen',
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
            { url: '/database1.jpg', caption: 'Database Design Class', description: 'Working on a database schema design project.' },
            { url: '/database2.jpg', caption: 'SQL Optimization Lab', description: 'Practicing advanced SQL query optimization techniques.' },
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=BINUS+Campus', caption: 'BINUS Bandung Campus - My academic home', description: 'The modern facilities and learning environment at BINUS Bandung' },
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
            { url: '/lisk1.png', caption: 'Lisk Bootcamp Certificate', description: 'Proof of completion for the Lisk Blockchain Bootcamp' },
            { url: '/lisk2.png', caption: 'Lisk DApp Development Code', description: 'Code snippets from building a sample DApp on Lisk' }
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
        date: '24 May - 7 June 2025 - Present',
        location: 'Jakarta, Indonesia',
        overview: 'Attended the Monad bootcamp during Ethjakarta, gaining specialized insights into high-performance, EVM-compatible blockchains. Focused on understanding the architectural optimizations for parallel execution and scalability. Actively utilized Hardhat for smart contract development exercises during the bootcamp.',
        achievements: [
            'Gained insights into Monad\'s parallel execution environment and high-performance EVM architecture.',
            'Understood advanced scalability solutions for Layer 1 blockchains.',
            'Applied Hardhat for practical smart contract development and testing within the Monad context.',
            'Networked with blockchain industry leaders and developers at Ethjakarta.'
        ],
        skills: ['EVM', 'Blockchain Scalability', 'Parallel Execution', 'Layer 1 Blockchains', 'Networking', 'Hardhat'],
        impact: 'Deepened my understanding of advanced blockchain scaling techniques and connected with key players in the Ethereum ecosystem. Enhanced practical skills in smart contract development using industry-standard tools like Hardhat.',
        lessons: [
            'The evolution of EVM-compatible chains to address performance bottlenecks.',
            'Value of direct interaction with industry experts at conferences and hands-on tool experience.',
            'Identifying emerging trends in blockchain technology and efficient development workflows.'
        ],
        photos: [
            { url: '/monad1.png', caption: 'Ethjakarta Monad Bootcamp Session', description: 'Participants engaging in a Monad bootcamp session during Ethjakarta.' },
            { url: '/monad2.png', caption: 'Hardhat Development Environment', description: 'Demonstrating smart contract development using Hardhat in the Monad bootcamp.' }
        ]
    },
    {
        type: 'swiftui-workshop',
        title: 'SwiftUI Development Workshop Participant',
        icon: 'Code',
        date: 'June 2025',
        location: 'BINUS Anggrek, R. 711A & Zoom (Hybrid)',
        overview: 'Participated in an "Introduction to Swift Development" workshop, focusing on building user interfaces with SwiftUI. Gained foundational knowledge and practical experience in declarative UI programming for Apple platforms.',
        achievements: [
            'Acquired fundamental skills in SwiftUI for modern iOS/macOS app development.',
            'Learned declarative UI principles and practices.',
            'Gained practical experience through hands-on coding exercises in Swift.',
            'Understood the basics of Swift programming language for application logic.'
        ],
        skills: ['SwiftUI', 'Swift', 'iOS Development', 'macOS Development', 'Declarative UI', 'Mobile Development'],
        impact: 'Expanded my programming skill set to include Apple ecosystem development, providing a new avenue for creating intuitive and visually appealing applications.',
        lessons: [
            'The efficiency and elegance of declarative UI frameworks like SwiftUI.',
            'The importance of understanding platform-specific design guidelines.',
            'Hands-on practice is essential for mastering new programming paradigms and SDKs.'
        ],
        photos: [
            { url: '/apple.jpg', caption: 'BNCC Workshop: Introduction to Swift Development', description: 'Promotional poster for the SwiftUI workshop featuring the speaker, Juli Yanti from Apple Developer Academy.' },
            { url: '/apple1.png', caption: 'SwiftUI Coding Session', description: 'Screenshot from a hands-on coding session during the SwiftUI workshop.' }
        ]
    },
];

export default hardSkillsExperiences;