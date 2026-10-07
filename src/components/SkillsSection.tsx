import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code, Cpu, Layers } from 'lucide-react';

interface SkillsSectionProps {
  darkMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const categories = PORTFOLIO_DATA.skillCategories;

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            <Cpu className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className={darkMode ? 'text-white' : 'text-slate-900'}>Skills & </span>
            <span className="text-gradient">Tech Stack</span>
          </h2>

          <p className={`text-base sm:text-lg max-w-2xl ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Core foundations developed during B.Tech CSE 3rd year studies alongside hands-on AI model integration & full-stack development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={cat.name}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                  : 'bg-white border-slate-200/90 shadow-lg shadow-slate-100 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                  idx === 0 ? 'bg-cyan-500/10 text-cyan-400' :
                  idx === 1 ? 'bg-indigo-500/10 text-indigo-400' :
                  idx === 2 ? 'bg-purple-500/10 text-purple-400' :
                  'bg-emerald-500/10 text-emerald-400'
                }`}>
                  {idx === 0 ? <BotIcon className="w-5 h-5" /> :
                   idx === 1 ? <Code className="w-5 h-5" /> :
                   idx === 2 ? <Cpu className="w-5 h-5" /> :
                   <Layers className="w-5 h-5" />}
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {cat.name}
                </h3>
              </div>

              {/* Progress items */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 font-mono">{skill.level}%</span>
                    </div>

                    <div className={`w-full h-2 rounded-full overflow-hidden ${
                      darkMode ? 'bg-slate-800' : 'bg-slate-100'
                    }`}>
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const BotIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8"/>
    <rect width="16" height="12" x="4" y="8" rx="2"/>
    <path d="M2 14h2"/>
    <path d="M20 14h2"/>
    <path d="M15 13v2"/>
    <path d="M9 13v2"/>
  </svg>
);
