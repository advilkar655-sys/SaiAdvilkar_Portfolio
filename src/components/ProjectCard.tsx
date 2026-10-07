import React from 'react';
import type { Project } from '../data/portfolioData';
import { Bot, Globe, Edit3, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
  onOpenModalForProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, darkMode, onOpenModalForProject }) => {
  const hasLiveLink = Boolean(project.deployedUrl && project.deployedUrl.trim() !== '' && project.deployedUrl !== '#');

  const handleLaunchProject = (e: React.MouseEvent) => {
    e.preventDefault();
    if (hasLiveLink) {
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // ignore
      }
      window.open(project.deployedUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpenModalForProject(project);
    }
  };

  return (
    <div className={`group relative rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${
      darkMode 
        ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10' 
        : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10'
    }`}>
      
      {/* Dynamic Header Gradient Overlay */}
      <div className={`h-2.5 w-full bg-gradient-to-r ${
        project.id === 'project-1' ? 'from-cyan-500 via-blue-500 to-indigo-500' :
        project.id === 'project-2' ? 'from-purple-500 via-pink-500 to-rose-500' :
        'from-emerald-500 via-teal-500 to-cyan-500'
      }`} />

      <div className="p-6 sm:p-7 flex flex-col h-full justify-between gap-6">
        
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Bot className="w-3.5 h-3.5" />
            <span>{project.badge}</span>
          </span>

          <span className={`text-xs font-medium px-2.5 py-1 rounded-md border ${
            hasLiveLink 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
              : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
          }`}>
            {hasLiveLink ? '🟢 Deployed & Live' : '⚙️ Add Link Later'}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2.5">
          <h3 className={`text-xl sm:text-2xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {project.title}
          </h3>

          <p className="text-xs font-medium text-cyan-500/90 tracking-wide uppercase">
            {project.subtitle}
          </p>

          <p className={`text-sm leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {project.description}
          </p>

          {project.metrics && (
            <div className={`mt-1 text-xs font-semibold px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 w-fit ${
              darkMode ? 'bg-slate-800/80 text-cyan-300' : 'bg-slate-100 text-cyan-800'
            }`}>
              <span>{project.metrics}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2.5 py-1 rounded-lg font-medium border ${
                darkMode
                  ? 'bg-slate-800/50 border-slate-700/60 text-slate-300'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between gap-3">
          
          {/* Main "Click to Open Deployed Project" Button */}
          <button
            onClick={handleLaunchProject}
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
              hasLiveLink
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02]'
                : darkMode
                  ? 'bg-slate-800 text-cyan-300 hover:bg-slate-700 border border-slate-700'
                  : 'bg-slate-100 text-cyan-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            {hasLiveLink ? (
              <>
                <Globe className="w-4 h-4" />
                <span>Open Deployed AI Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <Edit3 className="w-4 h-4" />
                <span>Click to Add Live Link</span>
              </>
            )}
          </button>

          {/* Edit / Quick Link config button */}
          <button
            onClick={() => onOpenModalForProject(project)}
            title="Edit Deployed Link"
            className={`p-3 rounded-xl border transition-all ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Edit3 className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
