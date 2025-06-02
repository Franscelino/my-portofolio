// src/data/projectsData.js
const allProjectsData = [
    {
        id: 'whatage-website', // ID unik untuk URL
        name: 'WhatAge Website',
        imageUrl: 'https://placehold.co/800x500/purple/white?text=WhatAge+Website+Detail', // Gambar yang lebih besar untuk detail
        thumbnailUrl: 'https://placehold.co/400x250/purple/white?text=WhatAge+Website', // Gambar untuk halaman ringkasan
        repositoryLink: 'https://github.com/your-username/whatage-website', // Ganti dengan tautan asli
        shortDetails: ['An age prediction system using the DeepAge model.', 'Implemented with Flask, SQLite, and Vanilla JS.'], // Ringkasan untuk halaman Projects
        fullDescription: `The WhatAge Website is an innovative web application designed to predict a person's age from an uploaded image. It leverages a custom DeepAge machine learning model, ensuring high accuracy and performance. The backend is powered by Flask, handling image processing and model inference, while user data (if applicable) is managed securely with SQLite and SQLAlchemy. The frontend, built with pure Vanilla JavaScript, HTML, and CSS, offers a responsive and intuitive user interface. This project demonstrates practical application of AI in web development and a strong understanding of full-stack integration.`,
        technologies: ['Flask', 'SQLite', 'Vanilla JS', 'DeepAge Model', 'HTML', 'CSS', 'Python'],
    },
    {
        id: 'book-management-system',
        name: 'Book Management System',
        imageUrl: 'https://placehold.co/800x500/orange/white?text=Book+Management+System+Detail',
        thumbnailUrl: 'https://placehold.co/400x250/orange/white?text=Book+Management+System',
        repositoryLink: 'https://github.com/your-username/book-management-system',
        shortDetails: ['A complete CRUD system for book management.', 'Built with PHP and MySQL.'],
        fullDescription: `This Book Management System is a robust web application built with PHP and MySQL, offering full CRUD (Create, Read, Update, Delete) functionality for managing a book collection. It features a secure user authentication system with login, registration, and logout capabilities. The database schema in MySQL is designed to efficiently handle book information and establish clear relationships between users and their owned books. This project showcases strong backend development skills, database management, and secure web practices.`,
        technologies: ['PHP', 'MySQL', 'Authentication', 'CRUD', 'HTML', 'CSS'],
    },
    {
        id: 'blockchain-performance-testing-tool',
        name: 'Blockchain Performance Testing Tool',
        imageUrl: 'https://placehold.co/800x500/blue/white?text=Blockchain+Tool+Detail',
        thumbnailUrl: 'https://placehold.co/400x250/blue/white?text=Blockchain+Tool',
        repositoryLink: 'https://github.com/your-username/blockchain-perf-tool',
        shortDetails: ['A Python-based tool to measure TPS, latency, and gas fees.', 'Compares Ethereum vs. Solana performance.'],
        fullDescription: `The Blockchain Performance Testing Tool is a Python-based utility designed to rigorously evaluate the performance of different blockchain networks, specifically Ethereum and Solana. It automates the process of measuring key metrics such as Transactions Per Second (TPS), transaction latency, and gas fees for various operations. The tool incorporates automated logging to generate detailed reports, allowing for a comparative analysis of blockchain efficiency. This project demonstrates proficiency in blockchain interaction, scripting, and data analysis.`,
        technologies: ['Python', 'Ethereum', 'Solana', 'Web3.py', 'Solana.py', 'Performance Testing'],
    },
    {
        id: 'fruit-image-recognition',
        name: 'Fruit Image Recognition + Nutritional Table',
        imageUrl: 'https://placehold.co/800x500/green/white?text=Fruit+Recognition+Detail',
        thumbnailUrl: 'https://placehold.co/400x250/green/white?text=Fruit+Recognition',
        repositoryLink: 'https://github.com/your-username/fruit-recognition',
        shortDetails: ['ML for fruit image recognition (Fruits-360 dataset).', 'Integrated with nutritional data and dataset visualization.'],
        fullDescription: `This project involves a machine learning application for fruit image recognition, trained on the extensive Fruits-360 dataset. Beyond simple identification, it integrates a nutritional table feature, providing users with instant access to dietary information about the recognized fruit. The project also includes visualizations of the dataset, offering insights into the training data distribution. This showcases skills in machine learning model development, data integration, and user-facing application design.`,
        technologies: ['Machine Learning', 'Python', 'TensorFlow/Keras', 'Fruits-360 Dataset', 'Data Visualization'],
    },
];

export default allProjectsData;
