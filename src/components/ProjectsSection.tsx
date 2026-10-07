import React from 'react';
import type { Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Bot, Globe } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  darkMode: boolean;
  onOpenModalForProject: (project: Project) => void;
  onOpenGeneralModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  darkMode,
  onOpenModalForProject,
  onOpenGeneralModal
}) => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <Bot className="w-4 h-4" />
            <span>Hack2Skill × Google for Developers Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className={darkMode ? 'text-white' : 'text-slate-900'}>3 Deployed </span>
            <span className="text-gradient">AI Projects</span>
          </h2>

          <p className={`text-base sm:text-lg max-w-2xl ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Engineered during the Hack2Skill AI challenges utilizing Google Gemini APIs, modern computer vision, and predictive workflows. Click any project card to open live demo.
          </p>

          {/* Quick link status pill */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenGeneralModal}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-cyan-300 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-300 text-cyan-700 hover:bg-slate-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Update / Manage Deployed Links</span>
            </button>
          </div>
        </div>

        {/* 3 Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              darkMode={darkMode}
              onOpenModalForProject={onOpenModalForProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
