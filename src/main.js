// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        colors: {
            'primary-dark': '#1A1A1A', // Hitam utama
            'accent-purple': '#8B5CF6', // Ungu dominan
            'secondary-orange': '#F97316', // Oranye aksen
        },
        // Anda bisa menambahkan font, breakpoint, dll. di sini
        },
    },
    plugins: [],
}