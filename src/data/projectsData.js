// src/data/projectsData.js
const allProjectsData = [
    {
        id: 'nextpath-ai-career',
        name: 'Nextpath AI Career Finder',
        imageUrl: '/public/Nexpathlanding.png',
        thumbnailUrl: '/public/Nexpathlanding.png',
        repositoryLink: 'https://github.com/BRYAN1309/IN-FEST-2025.git',
        liveDemoLink: 'https://nextpath.my.id',
        shortDetails: [
            'AI-powered platform for personalized career recommendations.',
            'Features AI chatbot, curated articles, and goal tracking.',
            'Built with React, Tailwind CSS, and TypeScript.'
        ],
        fullDescription: `Nextpath is an innovative AI-powered web application designed to help users discover career paths that align with their skills, interests, and goals. It offers a comprehensive suite of features, including an intelligent AI chatbot for interactive career guidance, a rich library of articles for industry insights, and a personalized goal-setting and tracking system to guide users through their career development. Built with modern web technologies like React, Tailwind CSS, and TypeScript, Nextpath provides a responsive, intuitive, and engaging user experience. The application demonstrates strong capabilities in frontend development, API integration, and leveraging AI for practical solutions.`,
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'AI/ML Integration', 'RESTful APIs'],
        features: [
            'AI Chatbot: Interactive conversational agent for career advice.',
            'Personalized Article Recommendations: Curated content based on user interests.',
            'Career Goal Tracking: Set and monitor career milestones.',
            'Intuitive User Interface: Clean and responsive design for seamless navigation.',
            'Secure User Authentication: (If applicable, mention specific method, e.g., OAuth, JWT)',
            'Robust Backend Integration: Seamless communication with AI models and data services.'
        ],
        challenges: [
            'Integrating diverse AI models for accurate career matching and chatbot responses.',
            'Optimizing API calls for real-time responsiveness and data retrieval.',
            'Ensuring data privacy and security for user career information.',
            'Managing complex state across various interactive features (chatbot, goals).'
        ],
        learnings: [
            'Deepened expertise in React development, including state management and component architecture.',
            'Mastered advanced Tailwind CSS for responsive and visually appealing designs.',
            'Gained significant experience in integrating and consuming AI/ML APIs.',
            'Improved skills in TypeScript for building robust and scalable applications.',
            'Learned effective strategies for structuring complex front-end projects with Vite.'
        ],
        gallery: [
            { url: '/public/Nextpathdashboard.png', caption: 'Nextpath Dashboard', description: 'Personalized user dashboard with career insights.' },
            { url: '/public/Nextpathchatbot.png', caption: 'AI Chatbot Feature', description: 'Interactive AI chatbot for instant career guidance.' },
            { url: '/public/articles.png', caption: 'Career Articles Section', description: 'Curated articles providing industry knowledge and trends.' },
            { url: '/public/Nextpathgoal.png', caption: 'Personalized Goals Tracking', description: 'Feature to set and monitor career development goals.' }
        ]
    },
    {
        id: 'clovio-online-fashion-store', // ID unik untuk proyek ini
        name: 'Clovio - E-commerce Fashion Store',
        imageUrl: '/public/Clovio1.jpg', // Placeholder image
        thumbnailUrl: '/public/Clovio1.jpg', // Placeholder image
        repositoryLink: 'https://github.com/Franscelino/clovio-repo', // Ganti dengan link GitHub Clovio Anda
        liveDemoLink: null, // Ganti dengan link live demo jika ada
        shortDetails: [
            'Full-stack e-commerce platform for a custom clothing brand.',
            'Features product catalog, shopping cart, checkout, and admin dashboard.',
            'Built with React.js (Frontend) and Laravel (Backend) with MySQL.'
        ],
        fullDescription: `Clovio is a comprehensive online fashion store developed as a campus project, aimed at creating a dedicated web presence for a custom clothing brand. As the frontend developer, I was responsible for crafting a modern, intuitive, and responsive user interface using React.js, Tailwind CSS, and JSX. The platform boasts key e-commerce functionalities including a dynamic product catalog with search and filter options, detailed product pages, a seamless shopping cart experience, and a secure checkout process with payment integration. On the backend, Laravel handles robust API communication and data management with MySQL, supporting features like admin dashboards for product and order management. This project demonstrates proficiency in building full-stack applications, managing complex UI states, and integrating RESTful APIs.`,
        technologies: ['React.js', 'Tailwind CSS', 'JSX', 'Vite', 'Laravel', 'MySQL', 'RESTful APIs', 'E-commerce'],
        features: [
            'Product Catalog: Browse and filter clothing items by category, price, etc.',
            'Product Detail Pages: View high-resolution images, descriptions, and size options.',
            'Shopping Cart: Add, remove, and update quantities of items in the cart.',
            'Secure Checkout Process: Multi-step checkout flow with order summary.',
            'Payment Integration: (Optional: Sebutkan metode pembayaran jika spesifik, misal: Midtrans, Stripe)',
            'User Authentication & Authorization: Secure login, registration, and user profiles.',
            'Admin Dashboard: Manage products, orders, users, and site content.',
            'Responsive Design: Optimized for seamless viewing on desktop and mobile devices.'
        ],
        challenges: [
            'Integrating frontend (React) with backend (Laravel) APIs for smooth data flow.',
            'Implementing complex state management for shopping cart and checkout processes.',
            'Ensuring robust security measures for user authentication and payment transactions.',
            'Optimizing database queries for efficient product retrieval and order processing.',
            'Designing an intuitive and visually appealing UI/UX for an e-commerce platform.'
        ],
        learnings: [
            'Enhanced skills in building scalable React applications with complex component interactions.',
            'Gained practical experience in integrating third-party payment gateways.',
            'Deepened understanding of Laravel framework for API development and database management.',
            'Improved collaboration skills within a team setting for a full-stack project.',
            'Learned best practices for e-commerce design and functionality.'
        ],
        gallery: [
            { url: '/public/Clovio1.jpg', caption: 'Clovio Homepage', description: 'The Main View of Landing Page.' },
            { url: '/public/Clovio2.jpg', caption: 'Login Register Page', description: 'User login and registration page.' },
            { url: '/public/Clovio3.jpg', caption: 'Category Page', description: 'Summary of product categories.' },
            { url: '/public/Clovio4.jpg', caption: 'Catalog Page', description: 'Product catalog view for admin.' },
            { url: '/public/Clovio5.jpg', caption: 'Order History', description: 'User order history view.' },
            { url: '/public/Clovio6.jpg', caption: 'Shopping Cart Page', description: 'Checkout process with order summary.' },
            { url: '/public/Clovio7.jpg', caption: 'Checkout Page', description: 'Checkout page with order summary.' },
            { url: '/public/Clovio8.jpg', caption: 'Admin Dashboard', description: 'Admin dashboard for managing products and orders.' }
        ]
    },
    {
        id: 'whatage-website',
        name: 'WhatAge Website',
        imageUrl: '/public/whatage1.png',
        thumbnailUrl: '/public/whatage1.png',
        repositoryLink: 'https://github.com/dustinmondegreen/WhatAge.git',
        shortDetails: [
            'An age prediction system using the DeepAge model.',
            'Implemented with Flask, SQLite, and Vanilla JS.',
            'Responsive and intuitive user interface.'
        ],
        fullDescription: `The WhatAge Website is an innovative web application designed to predict a person's age from an uploaded data. It leverages a custom DeepAge machine learning model, ensuring high accuracy and performance. The backend is powered by Flask, handling image processing and model inference, while user data (if applicable) is managed securely with SQLite and SQLAlchemy. The frontend, built with pure Vanilla JavaScript, HTML, and CSS, offers a responsive and intuitive user interface. This project demonstrates practical application of AI in web development and a strong understanding of full-stack integration.`,
        technologies: ['Flask', 'SQLite', 'Vanilla JS', 'DeepAge Model', 'HTML', 'CSS', 'Python'],
        features: [
            'Real-time age prediction from data uploads',
            'Secure data handling with SQLite',
            'Efficient backend processing with Flask',
            'Clean and responsive frontend design',
            'Easy-to-use interface for data submission'
        ],
        challenges: [
            'Optimizing model inference speed for web deployment',
            'Ensuring cross-browser compatibility for frontend',
            'Handling various data formats and sizes gracefully'
        ],
        learnings: [
            'Deepened understanding of Flask framework and its ecosystem',
            'Improved skills in integrating machine learning models into web apps',
            'Gained experience in frontend performance optimization'
        ],
        gallery: [
            { url: '/public/whatage1.png', caption: 'Homepage with upload interface' },
            { url: '/public/whatage2.png', caption: 'Prediction result display' },
            { url: '/public/whatage3.png', caption: 'Mobile view responsiveness' },
            { url: '/public/whatage4.png', caption: 'Mobile view responsiveness' }
        ]
    },
    {
        id: 'blockchain-performance-analysis-paper',
        name: 'Ethereum vs. Solana: A Comparative Study of Blockchain Architecture on Performance, Security, and Ecosystem Development',
        imageUrl: '/public/ethsol1.png',
        thumbnailUrl: '/public/ethsol1.png',
        paperDownloadLink: 'uploaded:PROCS-ICCSCI 2025_Kelompok28 (1).pdf', // Link to your uploaded PDF
        shortDetails: [
            'Comparative study of Ethereum and Solana blockchain architectures.',
            'Analyzes performance (TPS, latency, gas fees), consensus mechanisms, security, and DApp ecosystem.',
            'Accepted at 9th International Conference on Computer Science and Computational Intelligence 2025 (ICCSCI 2025).'
        ],
        fullDescription: `Blockchain technology has emerged as a breakthrough in decentralized systems. The development of applications, systems, programs, and financial solutions can now be managed in a decentralized manner, revolutionizing the previously centralized paradigm. In this new system, performance, scalability, transaction costs, and network security present both challenges and compelling topics for research. This paper conducts a comparative analysis through experiments and evaluations of Ethereum and Solana, the two largest Layer 1 blockchain networks today. The comparison focuses on performance, consensus mechanisms, security, and ecosystem development. Performance is assessed through Transactions Per Second (TPS) and latency, while gas fees are compared under different network conditions. The study also analyzes Ethereum's Proof-of-Stake (PoS) versus Solana's Proof-of-History (PoH)+PoS consensus mechanisms. Network security is examined by reviewing historical vulnerabilities and corresponding responses. The DApp (Decentralized Application) ecosystem is evaluated based on Adoption Efficiency Index (AEI) and sector specialization (DeFi, NFT, gaming). Through this analysis, the paper aims to provide a deeper understanding of the differences, strengths, and weaknesses of both networks, helping developers choose the most suitable blockchain platform.`,
        technologies: [
            'Blockchain Technology',
            'Ethereum',
            'Solana',
            'Proof-of-Stake (PoS)',
            'Proof-of-History (PoH)',
            'Decentralized Applications (DApps)',
            'Performance Analysis',
            'Security Analysis',
            'Ecosystem Evaluation',
            'Academic Research'
        ],
        features: [
            'Comparative performance analysis (TPS, latency, gas fees).',
            'Evaluation of consensus mechanisms: PoS (Ethereum) vs PoH+PoS (Solana).',
            'Review of historical vulnerabilities and security responses for both networks.',
            'Analysis of DApp ecosystem development, including Adoption Efficiency Index (AEI) and sector specialization.',
            'Insights for developers in choosing suitable blockchain platforms.'
        ],
        challenges: [
            'Addressing the blockchain trilemma (decentralization, security, scalability).',
            'Comparing network conditions and transaction costs accurately.',
            'Analyzing complex consensus mechanisms and their implications.',
            'Reviewing and categorizing historical security incidents effectively.',
            'Evaluating diverse DApp ecosystems based on adoption and specialization.'
        ],
        learnings: [
            'Gained in-depth understanding of Ethereum and Solana architectures and their trade-offs.',
            'Developed expertise in evaluating blockchain performance, security, and ecosystem dynamics.',
            'Learned to conduct comparative research on complex decentralized systems.',
            'Acquired insights into real-world challenges and solutions in blockchain development.',
            'Understood the strategic considerations for blockchain platform selection.'
        ],
        gallery: [
            { url: '/public/ethsol2.png', caption: 'Performance Comparison - Sequential Transactions', description: 'Combined visualization of TPS, Latency, and Gas Fee for sequential transactions on Ethereum and Solana (Fig. 1).' },
            { url: '/public/ethsol3.png', caption: 'Performance Comparison - Parallel Transactions', description: 'Combined visualization of TPS, Latency, and Gas Fee for parallel transactions on Ethereum and Solana (Fig. 2).' },
            { url: '/public/ethsol4.png', caption: 'Transaction-level Latency and Gas Fee - Sequential', description: 'Transaction-level comparison of latency and gas fees for Ethereum and Solana in sequential execution (Fig. 3).' },
            { url: '/public/ethsol5.png', caption: 'Distribution of Solana Leaders', description: 'Bar chart showing the distribution of block proposers on the Solana network (Fig. 4).' },
            { url: '/public/ethsol6.png', caption: 'Distribution of Ethereum Proposers', description: 'Bar chart illustrating the distribution of block proposers on the Ethereum network (Fig. 5).' },
            { url: '/public/ethsol7.png', caption: 'Block Delay Time Comparison: Ethereum vs Solana', description: 'Line graph comparing block delay times between Ethereum and Solana (Fig. 6).' },
            { url: '/public/ethsol8.png', caption: 'Average TTA & TTP of Incidents: Solana vs Ethereum', description: 'Bar chart comparing the average Time to Acknowledge (TTA) and Time to Patch (TTP) for security incidents on Solana and Ethereum (Fig. 7a).' },
            { url: '/public/ethsol9.png', caption: 'Average Incident Transparency: Solana vs Ethereum', description: 'Bar chart illustrating the average incident transparency levels for Solana and Ethereum (Fig. 7b).' }
        ]
    },
];

export default allProjectsData;
