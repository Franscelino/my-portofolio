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
        id: 'clovio-online-fashion-store', // ID unik untuk proyek ini
        name: 'Clovio - E-commerce Fashion Store',
        imageUrl: '/public/Clovio1.png', // Placeholder image
        thumbnailUrl: '/public/Clovio1.png', // Placeholder image
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
            { url: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Clovio+Homepage', caption: 'Clovio Homepage', description: 'Tampilan utama toko dengan katalog produk.' },
            { url: 'https://placehold.co/600x400/F97316/FFFFFF?text=Clovio+Product+Detail', caption: 'Product Detail Page', description: 'Halaman detail produk dengan deskripsi dan opsi.' },
            { url: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Clovio+Shopping+Cart', caption: 'Shopping Cart', description: 'Ringkasan keranjang belanja sebelum checkout.' },
            { url: 'https://placehold.co/600x400/F97316/FFFFFF?text=Clovio+Admin+Dashboard', caption: 'Admin Dashboard', description: 'Tampilan dashboard admin untuk manajemen produk.' },
        ]
    },
    {
        id: 'Building in Lisk L2 of Ethereum',
        name: 'Blockchain Performance Testing Tool',
        imageUrl: 'https://placehold.co/800x500/blue/white?text=Blockchain+Tool+Detail',
        thumbnailUrl: 'https://placehold.co/400x250/blue/white?text=Blockchain+Tool',
        repositoryLink: 'https://github.com/your-username/blockchain-perf-tool',
        liveDemoLink: null,
        shortDetails: [
            'A Python-based tool to measure TPS, latency, and gas fees.',
            'Compares Ethereum vs. Solana performance.',
            'Generates detailed performance reports.'
        ],
        fullDescription: `The Blockchain Performance Testing Tool is a Python-based utility designed to rigorously evaluate the performance of different blockchain networks, specifically Ethereum and Solana. It automates the process of measuring key metrics such as Transactions Per Second (TPS), transaction latency, and gas fees for various operations. The tool incorporates automated logging to generate detailed reports, allowing for a comparative analysis of blockchain efficiency. This project demonstrates proficiency in blockchain interaction, scripting, and data analysis.`,
        technologies: ['Python', 'Ethereum', 'Solana', 'Web3.py', 'Solana.py', 'Performance Testing', 'Data Analysis'],
        features: [
            'Automated TPS and latency measurements',
            'Gas fee analysis for smart contract interactions',
            'Comparative reports for different blockchain networks',
            'Customizable test scenarios',
            'Detailed logging and data export'
        ],
        challenges: [
            'Accurately simulating real-world network conditions',
            'Handling asynchronous operations and network delays',
            'Parsing and analyzing complex blockchain transaction data'
        ],
        learnings: [
            'Gained deep insights into blockchain performance bottlenecks',
            'Improved scripting and automation skills in Python',
            'Understood the nuances of interacting with different blockchain APIs'
        ],
        gallery: [
            { url: 'https://placehold.co/600x400/blue/white?text=Blockchain+Tool+Screenshot+1', caption: 'Tool CLI interface' },
            { url: 'https://placehold.co/600x400/blue/white?text=Blockchain+Tool+Screenshot+2', caption: 'Performance graph example' },
            { url: 'https://placehold.co/600x400/blue/white?text=Blockchain+Tool+Screenshot+3', caption: 'Report generation output' }
        ]
    },
    {
        id: 'fruit-image-recognition',
        name: 'Fruit Image Recognition + Nutritional Table',
        imageUrl: 'https://placehold.co/800x500/green/white?text=Fruit+Recognition+Detail',
        thumbnailUrl: 'https://placehold.co/400x250/green/white?text=Fruit+Recognition',
        repositoryLink: 'https://github.com/your-username/fruit-recognition',
        liveDemoLink: 'https://fruit-recognition.vercel.app/',
        shortDetails: [
            'ML for fruit image recognition (Fruits-360 dataset).',
            'Integrated with nutritional data and dataset visualization.',
            'User-friendly interface for image submission.'
        ],
        fullDescription: `This project involves a machine learning application for fruit image recognition, trained on the extensive Fruits-360 dataset. Beyond simple identification, it integrates a nutritional table feature, providing users with instant access to dietary information about the recognized fruit. The project also includes visualizations of the dataset, offering insights into the training data distribution. This showcases skills in machine learning model development, data integration, and user-facing application design.`,
        technologies: ['Machine Learning', 'Python', 'TensorFlow/Keras', 'Fruits-360 Dataset', 'Data Visualization', 'Streamlit (or Flask/React)'],
        features: [
            'Accurate fruit identification from images',
            'Display of nutritional information for recognized fruits',
            'Interactive dataset visualizations',
            'Support for various fruit types',
            'Simple image upload and processing'
        ],
        challenges: [
            'Achieving high accuracy with diverse image inputs',
            'Efficiently loading and processing large datasets',
            'Integrating external nutritional APIs (if applicable)'
        ],
        learnings: [
            'Enhanced understanding of image classification techniques',
            'Gained experience in data preprocessing for ML models',
            'Learned how to present complex ML outputs in a user-friendly way'
        ],
        gallery: [
            { url: 'https://placehold.co/600x400/green/white?text=Fruit+App+Screenshot+1', caption: 'Fruit recognition interface' },
            { url: 'https://placehold.co/600x400/green/white?text=Fruit+App+Screenshot+2', caption: 'Nutritional table display' },
            { url: 'https://placehold.co/600x400/green/white?text=Fruit+App+Screenshot+3', caption: 'Dataset visualization' }
        ]
    },
    {
        id: 'blockchain-performance-analysis-paper',
        name: 'Performance Analysis of Blockchain Platforms: Hyperledger Fabric and Ethereum',
        // Anda perlu membuat gambar thumbnail untuk paper ini.
        // Bisa berupa kolase grafik, infografis ringkasan, atau sampul paper yang didesain ulang.
        imageUrl: '/images/blockchain-paper-detail.png', // Ganti dengan path gambar detail Anda
        thumbnailUrl: '/images/blockchain-paper-thumbnail.png', // Ganti dengan path thumbnail Anda
        repositoryLink: 'https://www.researchgate.net/publication/346579114', // Link ke ResearchGate atau repositori paper Anda
        liveDemoLink: 'https://www.researchgate.net/publication/346579114', // Link langsung ke file PDF paper jika ada, atau ResearchGate
        shortDetails: [
            'Empirical evaluation comparing Hyperledger Fabric and Ethereum blockchain platforms.',
            'Analyzes performance metrics: success rate, latency, throughput, and resource consumption.',
            'Concludes on the superiority of Hyperledger Fabric in most aspects.',
        ],
        fullDescription: `This research conducts an empirical study to evaluate the performance of two prominent blockchain platforms: Hyperledger Fabric and Ethereum. The evaluation is based on measuring key metrics including success rate, average latency, throughput, and resource consumption. The study employed Hyperledger Caliper, a blockchain performance benchmarking tool, to execute 100 transactions for each platform. The findings offer valuable insights for practitioners in selecting the ideal blockchain platform based on application requirements.`,
        technologies: [
            'Blockchain Technology',
            'Hyperledger Fabric',
            'Ethereum',
            'Performance Evaluation',
            'Data Analysis',
            'Academic Research',
            'Hyperledger Caliper'
        ],
        features: [
            'In-depth comparison of Hyperledger Fabric and Ethereum performance.',
            'Analysis of success rate across different smart contract functions.',
            'Detailed evaluation of average transaction latency.',
            'Measurement and comparison of network throughput.',
            'Assessment of resource (memory and CPU) consumption.',
            'Insights into factors affecting blockchain platform selection for enterprise applications.',
        ],
        challenges: [
            'Conducting a fair empirical evaluation of distinct blockchain platforms.',
            'Ensuring consistent and comparable testing conditions across different platform versions.',
            'Interpreting complex performance data to draw meaningful conclusions.',
            'Addressing the limitations of performance benchmarking tools in capturing real-world scenarios.',
        ],
        learnings: [
            'Gained a deep understanding of blockchain performance characteristics and bottlenecks.',
            'Developed expertise in utilizing blockchain benchmarking tools like Hyperledger Caliper.',
            'Learned to critically analyze and present empirical data from complex distributed systems.',
            'Understood the trade-offs between different blockchain architectures and their implications for enterprise adoption.',
        ],
        gallery: [
            {
                url: '/images/blockchain-paper-fig5.png', // Ganti dengan path gambar Fig 5
                caption: 'Success Rates of Hyperledger Fabric and Ethereum',
                description: 'Grafik ini menunjukkan tingkat keberhasilan transaksi dari Hyperledger Fabric dan Ethereum untuk fungsi Open, Query, dan Transfer. Ethereum mencapai 100% tingkat keberhasilan untuk fungsi Transfer, sementara Fabric memiliki tingkat keberhasilan transfer di bawah 50% untuk sebagian besar versinya, kecuali Fabric 1.4.4.'
            },
            {
                url: '/images/blockchain-paper-fig6.png', // Ganti dengan path gambar Fig 6
                caption: 'Average Latency of Hyperledger Fabric and Ethereum',
                description: 'Menampilkan latensi rata-rata untuk setiap platform. Ethereum memiliki latensi rata-rata lebih dari 4 kali lipat dari Hyperledger Fabric untuk fungsi Open.'
            },
            {
                url: '/images/blockchain-paper-fig7.png', // Ganti dengan path gambar Fig 7
                caption: 'Throughput of Hyperledger Fabric and Ethereum',
                description: 'Menggambarkan throughput (transaksi per detik) dari kedua platform. Sebagian besar versi Hyperledger Fabric menunjukkan throughput yang lebih tinggi daripada Ethereum.'
            },
            {
                url: '/images/blockchain-paper-fig8.png', // Ganti dengan path gambar Fig 8
                caption: 'Average Memory Consumption of Hyperledger Fabric and Ethereum',
                description: 'Grafik ini menunjukkan konsumsi memori rata-rata. Ethereum mengonsumsi memori hingga 20 kali lebih banyak dibandingkan Hyperledger Fabric.'
            },
            {
                url: '/images/blockchain-paper-fig9.png', // Ganti dengan path gambar Fig 9
                caption: 'Average CPU Usage of Hyperledger Fabric and Ethereum',
                description: 'Visualisasi penggunaan CPU rata-rata. Ethereum mengonsumsi lebih banyak daya CPU dibandingkan Hyperledger Fabric, terutama untuk fungsi Query dan Transfer.'
            },
            // Tambahkan gambar-gambar lain dari paper jika relevan (misalnya, diagram arsitektur)
        ]
    },
];

export default allProjectsData;