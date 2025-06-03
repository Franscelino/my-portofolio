// src/data/projectsData.js
const allProjectsData = [
    {
        id: 'whatage-website', // ID unik untuk URL
        name: 'WhatAge Website',
        imageUrl: 'https://placehold.co/800x500/purple/white?text=WhatAge+Website+Detail', // Gambar yang lebih besar untuk detail
        thumbnailUrl: 'https://placehold.co/400x250/purple/white?text=WhatAge+Website', // Gambar untuk halaman ringkasan
        repositoryLink: 'https://github.com/your-username/whatage-website', // Ganti dengan tautan asli
        liveDemoLink: 'https://whatage.vercel.app/', // Contoh tautan live demo
        shortDetails: [
            'An age prediction system using the DeepAge model.',
            'Implemented with Flask, SQLite, and Vanilla JS.',
            'Responsive and intuitive user interface.'
        ], // Ringkasan untuk halaman Projects
        fullDescription: `The WhatAge Website is an innovative web application designed to predict a person's age from an uploaded image. It leverages a custom DeepAge machine learning model, ensuring high accuracy and performance. The backend is powered by Flask, handling image processing and model inference, while user data (if applicable) is managed securely with SQLite and SQLAlchemy. The frontend, built with pure Vanilla JavaScript, HTML, and CSS, offers a responsive and intuitive user interface. This project demonstrates practical application of AI in web development and a strong understanding of full-stack integration.`,
        technologies: ['Flask', 'SQLite', 'Vanilla JS', 'DeepAge Model', 'HTML', 'CSS', 'Python'],
        features: [
            'Real-time age prediction from image uploads',
            'Secure data handling with SQLite',
            'Efficient backend processing with Flask',
            'Clean and responsive frontend design',
            'Easy-to-use interface for image submission'
        ],
        challenges: [
            'Optimizing model inference speed for web deployment',
            'Ensuring cross-browser compatibility for frontend',
            'Handling various image formats and sizes gracefully'
        ],
        learnings: [
            'Deepened understanding of Flask framework and its ecosystem',
            'Improved skills in integrating machine learning models into web apps',
            'Gained experience in frontend performance optimization'
        ],
        gallery: [
            { url: 'https://placehold.co/600x400/purple/white?text=WhatAge+Screenshot+1', caption: 'Homepage with upload interface' },
            { url: 'https://placehold.co/600x400/purple/white?text=WhatAge+Screenshot+2', caption: 'Prediction result display' },
            { url: 'https://placehold.co/600x400/purple/white?text=WhatAge+Screenshot+3', caption: 'Mobile view responsiveness' }
        ]
    },
    {
        id: 'book-management-system',
        name: 'Book Management System',
        imageUrl: 'https://placehold.co/800x500/orange/white?text=Book+Management+System+Detail',
        thumbnailUrl: 'https://placehold.co/400x250/orange/white?text=Book+Management+System',
        repositoryLink: 'https://github.com/your-username/book-management-system',
        liveDemoLink: 'https://book-management.vercel.app/', // Contoh tautan live demo
        shortDetails: [
            'A complete CRUD system for book management.',
            'Built with PHP and MySQL.',
            'Features user authentication and search.'
        ],
        fullDescription: `This Book Management System is a robust web application built with PHP and MySQL, offering full CRUD (Create, Read, Update, Delete) functionality for managing a book collection. It features a secure user authentication system with login, registration, and logout capabilities. The database schema in MySQL is designed to efficiently handle book information and establish clear relationships between users and their owned books. This project showcases strong backend development skills, database management, and secure web practices.`,
        technologies: ['PHP', 'MySQL', 'Authentication', 'CRUD', 'HTML', 'CSS'],
        features: [
            'User registration, login, and logout',
            'Add, view, edit, and delete book records',
            'Search and filter books by various criteria',
            'Admin panel for managing users and books',
            'Responsive design for desktop and mobile'
        ],
        challenges: [
            'Implementing secure password hashing and session management',
            'Optimizing database queries for large datasets',
            'Ensuring input validation to prevent SQL injection'
        ],
        learnings: [
            'Mastered secure PHP development practices',
            'Gained expertise in relational database design with MySQL',
            'Understood the importance of user experience in data management systems'
        ],
        gallery: [
            { url: 'https://placehold.co/600x400/orange/white?text=BMS+Screenshot+1', caption: 'Book listing page' },
            { url: 'https://placehold.co/600x400/orange/white?text=BMS+Screenshot+2', caption: 'Add new book form' },
            { url: 'https://placehold.co/600x400/orange/white?text=BMS+Screenshot+3', caption: 'User dashboard' }
        ]
    },
    {
        id: 'blockchain-performance-testing-tool',
        name: 'Blockchain Performance Testing Tool',
        imageUrl: 'https://placehold.co/800x500/blue/white?text=Blockchain+Tool+Detail',
        thumbnailUrl: 'https://placehold.co/400x250/blue/white?text=Blockchain+Tool',
        repositoryLink: 'https://github.com/your-username/blockchain-perf-tool',
        liveDemoLink: null, // Mungkin tidak ada live demo untuk alat ini
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
        liveDemoLink: 'https://fruit-recognition.vercel.app/', // Contoh tautan live demo
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
];

export default allProjectsData;
