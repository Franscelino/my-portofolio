import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, Route

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDetailPage from './page/AllProjectsDetailsPage'; // Import halaman detail proyek
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router> {/* Bungkus seluruh aplikasi dengan Router */}
      <div className="bg-primary-dark text-text-light min-h-screen">
        <CursorEffect />
        <Navbar />
        <main>
          <Routes> {/* Gunakan Routes untuk mendefinisikan semua rute */}
            <Route path="/" element={ // Halaman utama (home)
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/projects/:id" element={<ProjectDetailPage />} /> {/* Rute untuk halaman detail proyek */}
            {/* Anda bisa menambahkan rute lain di sini jika diperlukan, contoh: /contact, /about */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
