import { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import type { Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FloatingAvatar } from './components/FloatingAvatar';
import { HackathonBanner } from './components/HackathonBanner';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectLinkModal } from './components/ProjectLinkModal';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('sai_portfolio_theme');
    return saved ? saved === 'dark' : true;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('sai_portfolio_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return PORTFOLIO_DATA.projects;
      }
    }
    return PORTFOLIO_DATA.projects;
  });

  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);

  // Scroll Animation Target Anchors
  const navAnchorRef = useRef<HTMLDivElement>(null);
  const heroAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('sai_portfolio_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleUpdateProjects = (updated: Project[]) => {
    setProjects(updated);
    localStorage.setItem('sai_portfolio_projects', JSON.stringify(updated));
  };

  const handleOpenModalForProject = (proj: Project) => {
    setSelectedProjectForModal(proj);
    setIsLinkModalOpen(true);
  };

  const handleOpenGeneralModal = () => {
    setSelectedProjectForModal(null);
    setIsLinkModalOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenLinkModal={handleOpenGeneralModal}
        navAnchorRef={navAnchorRef}
      />

      {/* Floating Interactive Avatar with Smooth Continuous Flight Motion */}
      <FloatingAvatar
        navAnchorRef={navAnchorRef}
        heroAnchorRef={heroAnchorRef}
      />

      {/* Main Content */}
      <main>
        <Hero
          darkMode={darkMode}
          heroAnchorRef={heroAnchorRef}
          onExploreProjects={() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Hack2Skill x Google for Developers Section */}
        <HackathonBanner darkMode={darkMode} />

        {/* 3 Deployed AI Projects Section */}
        <ProjectsSection
          projects={projects}
          darkMode={darkMode}
          onOpenModalForProject={handleOpenModalForProject}
          onOpenGeneralModal={handleOpenGeneralModal}
        />

        {/* Skills Section */}
        <SkillsSection darkMode={darkMode} />

        {/* Experience Section */}
        <ExperienceSection darkMode={darkMode} />

        {/* Contact Section */}
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Link Manager Modal */}
      <ProjectLinkModal
        isOpen={isLinkModalOpen}
        onClose={() => setIsLinkModalOpen(false)}
        projects={projects}
        onUpdateProjects={handleUpdateProjects}
        selectedProject={selectedProjectForModal}
        darkMode={darkMode}
      />

    </div>
  );
}

export default App;
