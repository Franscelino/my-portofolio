import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, Route
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailPage from './page/AllProjectsDetailsPage';
import SoftSkillsExperiencePage from './page/softSkillsExperiencePage.jsx';
import HardSkillsExperiencePage from './page/hardSkillsExperiencePage.jsx';

function App() {
  return (
    <Router> {/* Bungkus seluruh aplikasi dengan Router */}
      <div className="bg-primary-dark text-text-light min-h-screen">
        <Navbar hideNavItems={false} />
        <main>
          <Routes> 
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
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/projects/all-details-summary" element={<ProjectDetailPage isSummaryPage={true} />} />
            <Route path="/experience/soft-skills" element={<SoftSkillsExperiencePage />} />
            <Route path="/experience/hard-skills" element={<HardSkillsExperiencePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
