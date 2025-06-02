import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      name: 'Email',
      value: 'francelinomelvyn@gmail.com',
      link: 'mailto:francelinomelvyn@gmail.com',
      icon: (
        <svg className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.9 5.26a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      value: 'franscelinomelvynn',
      link: 'https://www.instagram.com/franscelinomelvynn', // Ganti dengan tautan Instagram Anda yang sebenarnya
      icon: (
        <svg className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 16h4c2.21 0 4-1.79 4-4v-4c0-2.21-1.79-4-4-4h-4c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4z" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="16.5" cy="7.5" r="1.5" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      value: 'Franscelino Melvyn',
      link: 'https://www.linkedin.com/in/franscelino-melvyn-5874a1292', // Tautan LinkedIn diperbarui
      icon: (
        <svg className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.563c0-1.336-.027-3.054-1.852-3.054-1.853 0-2.136 1.445-2.136 2.955v5.662H9.153V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.064-2.062 2.062 2.062 0 012.064-2.063 2.062 2.062 0 012.063 2.063 2.062 2.062 0 01-2.063 2.062zm-.006 13.012H8.89V9H5.331v11.445z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      value: 'Franscelino',
      link: 'https://github.com/Franscelino', // Ganti dengan tautan GitHub Anda yang sebenarnya
      icon: (
        <svg className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.865-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.619.068-.605.068-.605 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.336 1.089 2.903.832.091-.645.35-1.089.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.39-1.99.999-2.682-.1-.253-.434-1.27.096-2.651 0 0 .817-.269 2.673 1.025.776-.215 1.597-.323 2.418-.328.819.005 1.64.113 2.418.328 1.856-1.294 2.672-1.025 2.672-1.025.531 1.381.197 2.398.096 2.651.61.692.999 1.586.999 2.682 0 3.848-2.339 4.695-4.566 4.946.359.309.678.917.678 1.855 0 1.338-.013 2.419-.013 2.747 0 .268.18.579.688.481C21.137 20.198 24 16.442 24 12.017 24 6.484 19.523 2 14 2h-2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      value: 'melvyn18',
      link: 'https://discordapp.com/users/melvyn18', // Perlu diingat, tautan langsung ke profil Discord tidak selalu berfungsi kecuali pengguna memiliki Discord Nitro dan mengatur vanity URL. Ini adalah tautan umum.
      icon: (
        <svg className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.218 3.627A2.39 2.39 0 0018.156 2a2.39 2.39 0 00-2.062 1.627c-1.847-.282-3.666-.282-5.468 0A2.39 2.39 0 006.094 2a2.39 2.39 0 00-2.062 1.627C1.94 6.702 1.5 9.73 2.193 12.756c.032.14.07.279.113.418.423 1.36.98 2.682 1.666 3.966a1.05 1.05 0 001.07.643 1.05 1.05 0 00.992-.74c.08-.344.156-.69.227-1.037.16-.76.32-1.52.48-2.28a11.96 11.96 0 011.026-.856c.216-.17.433-.34.65-.51a1.01 1.01 0 00.183-.162c.18-.17.36-.34.54-.51a1.01 1.01 0 00.183-.162c.45-.45.9-.9 1.35-1.35.45-.45.9-.9 1.35-1.35.18-.17.36-.34.54-.51a1.01 1.01 0 00.183-.162c.677-.677 1.354-1.354 2.03-2.03a11.96 11.96 0 01.856-1.026c.76-.16 1.52-.32 2.28-.48.347-.07.693-.156 1.037-.227.344-.08.69-.156 1.037-.227a1.05 1.05 0 00.74-.992 1.05 1.05 0 00-.643-1.07c-1.284-.686-2.606-1.243-3.966-1.666a1.01 1.01 0 00-.418-.113c-3.026-.693-6.054-.252-9.106.877z" />
          <path d="M8.09 17.03c.536 0 .97-.434.97-.97s-.434-.97-.97-.97-.97.434-.97.97.434.97.97.97zm7.82 0c.536 0 .97-.434.97-.97s-.434-.97-.97-.97-.97.434-.97.97.434.97.97.97z" />
        </svg>
      ),
    },
    {
      name: 'Phone',
      value: '081221434455',
      link: 'tel:+6281221434455', // Menggunakan format tel: untuk nomor telepon
      icon: (
        <svg className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements for Contact Section */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 border border-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 border border-orange-500/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Me</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Feel free to reach out to me through any of the platforms below!
          </p>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900/40 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg relative overflow-hidden flex flex-col items-center justify-center text-center"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                <div className="relative mb-4 p-3 rounded-full bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-orange-500 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="relative text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="relative text-gray-300 text-base group-hover:text-white transition-colors duration-300">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
