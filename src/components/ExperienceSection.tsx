import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar } from 'lucide-react';

interface ExperienceSectionProps {
  darkMode: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ darkMode }) => {
  const timeline = PORTFOLIO_DATA.timeline;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Academic & Challenge Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className={darkMode ? 'text-white' : 'text-slate-900'}>Education & </span>
            <span className="text-gradient">Experience</span>
          </h2>

          <p className={`text-base sm:text-lg max-w-2xl ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Journey of continuous learning, computer science engineering studies, and national hackathon participation.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {timeline.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-4 border-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-md shadow-cyan-500/30" />

              <div className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 shadow-lg shadow-slate-100'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {item.subtitle}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>

                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
