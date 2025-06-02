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
        'primary-dark': '#0A0A0A', // Sedikit lebih gelap dari hitam murni untuk kontras
        'accent-purple': '#8B5CF6', // Ungu dominan
        'secondary-orange': '#F97316', // Oranye aksen
        'text-light': '#E0E0E0', // Warna teks terang untuk kontras dengan primary-dark
        'text-muted': '#A0A0A0', // Warna teks sedikit diredam
        'card-bg': '#1A1A1A', // Latar belakang kartu/elemen
        'border-color': '#333333', // Warna border untuk pemisah
      },
      fontFamily: {
        // Anda bisa menambahkan font kustom di sini, misalnya 'Inter', 'Poppins'
        // 'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}