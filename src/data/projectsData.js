// src/data/projectsData.js
const allProjectsData = [
    {
        id: 'nextpath-ai-career',
        name: 'Nextpath AI Career Finder',
        imageUrl: '/Nexpathlanding.png', // Corrected path
        thumbnailUrl: '/Nexpathlanding.png', // Corrected path
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
            'Ensuring data privacy and security for user information.',
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
            { url: '/Nextpathdashboard.png', caption: 'Nextpath Dashboard', description: 'Personalized user dashboard with career insights.' }, // Corrected path
            { url: '/Nextpathchatbot.png', caption: 'AI Chatbot Feature', description: 'Interactive AI chatbot for instant career guidance.' }, // Corrected path
            { url: '/articles.png', caption: 'Career Articles Section', description: 'Curated articles providing industry knowledge and trends.' }, // Corrected path
            { url: '/Nextpathgoal.png', caption: 'Personalized Goals Tracking', description: 'Feature to set and monitor career development goals.' } // Corrected path
        ]
    },
    {
        id: 'clovio-online-fashion-store',
        name: 'Clovio - E-commerce Fashion Store',
        imageUrl: '/Clovio1.jpg', // Corrected path
        thumbnailUrl: '/Clovio1.jpg', // Corrected path
        repositoryLink: 'https://github.com/Franscelino/clovio-repo',
        liveDemoLink: null,
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
            'Payment Integration: (Optional: Mention specific method, e.g., Midtrans, Stripe)',
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
            { url: '/Clovio1.jpg', caption: 'Clovio Homepage', description: 'The Main View of Landing Page.' }, // Corrected path
            { url: '/Clovio2.jpg', caption: 'Login Register Page', description: 'User login and registration page.' }, // Corrected path
            { url: '/Clovio3.jpg', caption: 'Category Page', description: 'Summary of product categories.' }, // Corrected path
            { url: '/Clovio4.jpg', caption: 'Catalog Page', description: 'Product catalog view for admin.' }, // Corrected path
            { url: '/Clovio5.jpg', caption: 'Order History', description: 'User order history view.' }, // Corrected path
            { url: '/Clovio6.jpg', caption: 'Shopping Cart Page', description: 'Checkout process with order summary.' }, // Corrected path
            { url: '/Clovio7.jpg', caption: 'Checkout Page', description: 'Checkout page with order summary.' }, // Corrected path
            { url: '/Clovio8.jpg', caption: 'Admin Dashboard', description: 'Admin dashboard for managing products and orders.' } // Corrected path
        ]
    },
    {
        id: 'whatage-website',
        name: 'WhatAge Website',
        imageUrl: '/whatage1.png', // Corrected path
        thumbnailUrl: '/whatage1.png', // Corrected path
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
            { url: '/whatage1.png', caption: 'Homepage with upload interface' }, // Corrected path
            { url: '/whatage2.png', caption: 'Prediction result display' }, // Corrected path
            { url: '/whatage3.png', caption: 'Mobile view responsiveness' }, // Corrected path
            { url: '/whatage4.png', caption: 'Mobile view responsiveness' } // Corrected path
        ]
    },
    {
        id: 'blockchain-performance-analysis-paper',
        name: 'Ethereum vs. Solana: A Comparative Study of Blockchain Architecture on Performance, Security, and Ecosystem Development',
        imageUrl: '/ethsol1.png', // Corrected path
        thumbnailUrl: '/ethsol1.png', // Corrected path
        paperDownloadLink: 'uploaded:PROCS-ICCSCI 2025_Kelompok28 (1).pdf',
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
            { url: '/ethsol2.png', caption: 'Performance Comparison - Sequential Transactions', description: 'Combined visualization of TPS, Latency, and Gas Fee for sequential transactions on Ethereum and Solana (Fig. 1).' }, // Corrected path
            { url: '/ethsol3.png', caption: 'Performance Comparison - Parallel Transactions', description: 'Combined visualization of TPS, Latency, and Gas Fee for parallel transactions on Ethereum and Solana (Fig. 2).' }, // Corrected path
            { url: '/ethsol4.png', caption: 'Transaction-level Latency and Gas Fee - Sequential', description: 'Transaction-level comparison of latency and gas fees for Ethereum and Solana in sequential execution (Fig. 3).' }, // Corrected path
            { url: '/ethsol5.png', caption: 'Distribution of Solana Leaders', description: 'Bar chart showing the distribution of block proposers on the Solana network (Fig. 4).' }, // Corrected path
            { url: '/ethsol6.png', caption: 'Distribution of Ethereum Proposers', description: 'Bar chart illustrating the distribution of block proposers on the Ethereum network (Fig. 5).' }, // Corrected path
            { url: '/ethsol7.png', caption: 'Block Delay Time Comparison: Ethereum vs Solana', description: 'Line graph comparing block delay times between Ethereum and Solana (Fig. 6).' }, // Corrected path
            { url: '/ethsol8.png', caption: 'Average TTA & TTP of Incidents: Solana vs Ethereum', description: 'Bar chart comparing the average Time to Acknowledge (TTA) and Time to Patch (TTP) for security incidents on Solana and Ethereum (Fig. 7a).' }, // Corrected path
            { url: '/ethsol9.png', caption: 'Average Incident Transparency: Solana vs Ethereum', description: 'Bar chart illustrating the average incident transparency levels for Solana and Ethereum (Fig. 7b).' } // Corrected path
        ]
    },
    {
        id: 'decentralized-voting-dapp',
        name: 'Decentralized Voting System - Full Stack DApp',
        imageUrl: '/vote1.png', // Corrected path
        thumbnailUrl: '/vote1.png', // Corrected path
        repositoryLink: 'https://github.com/Franscelino/Decentralization-Vote.git',
        liveDemoLink: null,
        shortDetails: [
            'Secure and transparent decentralized voting system on the blockchain.',
            'Built with Solidity smart contracts, React + Vite + Tailwind CSS frontend.',
            'Deployed to Ethereum Sepolia testnet.'
        ],
        fullDescription: `This project is a complete decentralized voting application (DApp) designed for fair, transparent, and immutable elections using blockchain technology. The core of this DApp is a Solidity smart contract deployed to the Ethereum Sepolia Testnet, which manages poll creation, vote recording, and result calculation. Each vote is recorded per wallet address to ensure unique voting, and voting results are displayed as visual percentages accessible to everyone after the poll ends. The frontend is built using React.js with Vite for fast bundling, and Tailwind CSS for responsive and modern styling. Users can connect their MetaMask wallets, create new polls, cast their votes, and view results in real-time or after the poll concludes. This project emphasizes core functionality: robust smart contract implementation, seamless frontend-backend integration, and an intuitive user interface for a decentralized voting experience.`,
        technologies: [
            'Solidity',
            'Hardhat',
            'Ethers.js',
            'React.js',
            'Vite',
            'Tailwind CSS',
            'MetaMask',
            'Sepolia Testnet',
            'Blockchain'
        ],
        features: [
            'Poll Creation by Anyone: Any user can create new polls.',
            'Anonymous Voting: Votes are recorded per wallet address, but option preferences remain anonymous.',
            'Vote Verification: Each address can only vote once per poll.',
            'Visual Result Display: Voting results are displayed in percentages for each option.',
            'Universal Result Access: Poll results are viewable by everyone after the poll ends.',
            'MetaMask Integration: Easy wallet connectivity for blockchain interaction.',
            'Blockchain Transparency: All vote transactions are recorded on the Sepolia Testnet.'
        ],
        challenges: [
            'Ensuring the security and immutability of the voting smart contract.',
            'Managing real-time state synchronization between the blockchain and the frontend.',
            'Optimizing gas costs for smart contract operations.',
            'Developing an intuitive UI/UX for complex blockchain interactions.'
        ],
        learnings: [
            'In-depth understanding of the smart contract development lifecycle with Hardhat.',
            'Mastering Ethers.js integration with React applications for DApp interaction.',
            'Implementing best practices for smart contract security and gas cost management.',
            'Experience building a fully decentralized full-stack application.',
            'Improved skills in debugging and troubleshooting blockchain issues.'
        ],
        gallery: [
            { url: '/vote1.png', caption: 'DApp Main View', description: 'Homepage of the voting system.' }, // Corrected path
            { url: '/vote2.png', caption: 'Voting Details and Options', description: 'Poll details and available options.' }, // Corrected path
            { url: '/vote3.png', caption: 'Poll Creation Form', description: 'Interface for creating a new poll.' }, // Corrected path
            { url: '/vote4.png', caption: 'MetaMask Transaction Confirmation', description: 'MetaMask pop-up for transaction confirmation.' }, // Corrected path
            { url: '/vote5.png', caption: 'Poll Results Display (Bar Chart)', description: 'Visual representation of voting results after the poll ends.' }, // Corrected path
            { url: '/vote6.png', caption: 'Poll Results Display (Percentages)', description: 'Voting results with percentages for each option.' }, // Corrected path
            { url: '/vote7.png', caption: 'User Voting Status', description: 'Indication of whether the user has voted.' }, // Corrected path
            { url: '/vote8.png', caption: 'Error/Success Messages', description: 'Notifications to the user about operation status.' }, // Corrected path
            { url: '/vote9.png', caption: 'Responsive Design (Mobile)', description: 'DApp interface optimized for mobile devices.' } // Corrected path
        ]
    },
    {
        id: 'ai-age-prediction-paper',
        name: 'AI Age Prediction: A Comparative Study of XGBoost, CatBoost, and TabNet',
        imageUrl: '/age1.png', // Corrected path
        thumbnailUrl: '/age1.png', // Corrected path
        paperDownloadLink: 'https://placehold.co/600x400/1f2937/9ca3af?text=AI+Paper+Download',
        shortDetails: [
            'Academic paper comparing XGBoost, CatBoost, and TabNet for age prediction.',
            'Explores performance, interpretability, and feature importance of different models.',
            'Contributes to the field of AI for demographic analysis.'
        ],
        fullDescription: `This academic paper presents a comparative analysis of three prominent machine learning models—XGBoost, CatBoost, and TabNet—for the task of age prediction. The research investigates the strengths and weaknesses of each model in terms of predictive accuracy, training efficiency, and interpretability when applied to demographic data. Through extensive experimentation and evaluation, the paper provides insights into which models perform optimally under various conditions, highlighting their unique advantages in handling tabular data for complex prediction tasks like age estimation. This study aims to contribute valuable knowledge to the AI community, particularly in the domain of explainable AI and robust model selection for real-world applications.`,
        technologies: [
            'Python',
            'Machine Learning',
            'XGBoost',
            'CatBoost',
            'TabNet',
            'Data Analysis',
            'Predictive Modeling',
            'Feature Engineering',
            'Model Evaluation',
            'Academic Research'
        ],
        features: [
            'Comparative analysis of state-of-the-art tree-based and neural network models.',
            'Detailed performance metrics (e.g., MAE, RMSE) for age prediction.',
            'Analysis of model interpretability and feature importance for each algorithm.',
            'Identification of optimal model configurations for age prediction tasks.',
            'Contribution to understanding AI applications in demographic data analysis.'
        ],
        challenges: [
            'Handling diverse and potentially noisy demographic datasets for robust training.',
            'Optimizing hyperparameters for each model to achieve peak performance.',
            'Ensuring fairness and mitigating bias in age prediction models.',
            'Interpreting complex model decisions (especially for TabNet) for practical insights.',
            'Comparative visualization of diverse model outputs for clear analysis.'
        ],
        learnings: [
            'Deepened understanding of ensemble methods (XGBoost, CatBoost) and neural networks (TabNet).',
            'Proficiency in advanced data preprocessing and feature engineering techniques.',
            'Developed skills in rigorous experimental design and statistical analysis for academic papers.',
            'Gained insights into the practical considerations and ethical implications of AI in sensitive domains like age prediction.',
            'Improved academic writing and research presentation skills.'
        ],
        gallery: [
            { url: '/age1.png', caption: 'Model Performance Comparison (MAE)', description: 'Mean Absolute Error comparison across XGBoost, CatBoost, and TabNet for age prediction.' }, // Corrected path
            { url: '/age2.png', caption: 'Feature Importance - XGBoost', description: 'Visualization of key features influencing XGBoost age predictions.' }, // Corrected path
            { url: '/age3.png', caption: 'Feature Importance - CatBoost', description: 'Visualization of key features influencing CatBoost age predictions.' }, // Corrected path
            { url: '/age4.png', caption: 'TabNet Attentive Transformer Output', description: 'Illustrating TabNet\'s attention mechanism on input features.' }, // Corrected path
            { url: '/age5.png', caption: 'Prediction Distribution vs. Actual Age', description: 'Scatter plot or histogram comparing predicted age distribution with actual age distribution.' }, // Corrected path
            { url: '/age6.png', caption: 'Training Loss Over Epochs (TabNet)', description: 'Graph showing the training and validation loss progression for TabNet.' }, // Corrected path
            { url: '/age7.png', caption: 'Model Training Time Comparison', description: 'Bar chart comparing the training duration for each of the three models.' }, // Corrected path
            { url: '/age8.png', caption: 'Age Prediction Error Analysis', description: 'Analysis of prediction errors across different age groups.' }, // Corrected path
            { url: '/age9.png', caption: 'Overall Model Architecture', description: 'High-level diagram of the AI age prediction system architecture.' } // Corrected path
        ]
    }
];

export default allProjectsData;
