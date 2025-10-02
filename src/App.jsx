import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications'; // 1. IMPORT KOMPONEN BARU
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailPage from './page/AllProjectsDetailsPage';
import SoftSkillsExperiencePage from './page/softSkillsExperiencePage.jsx';
import HardSkillsExperiencePage from './page/hardSkillsExperiencePage.jsx';
import CertificationsPage from './page/CertificationsPage.jsx';

function App() {
  return (
    <Router>
      <div className="bg-primary-dark text-text-light min-h-screen">
        <Navbar hideNavItems={false} />
        <main>
          <Routes> 
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Certifications /> {/* 2. TAMBAHKAN KOMPONEN DI SINI */}
                <Contact />
              </>
            } />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/projects/all-details-summary" element={<ProjectDetailPage isSummaryPage={true} />} />
            <Route path="/experience/soft-skills" element={<SoftSkillsExperiencePage />} />
            <Route path="/experience/hard-skills" element={<HardSkillsExperiencePage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;