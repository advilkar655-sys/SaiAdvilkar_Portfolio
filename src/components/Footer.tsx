import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-10 border-t transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <span className={`font-bold text-sm font-heading ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Sai Advilkar
            </span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              B.Tech CSE 3rd Year
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <span>•</span>
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <span>•</span>
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-cyan-400 transition-colors">Email</a>
          </div>

          <button
            onClick={scrollToTop}
            className={`p-2.5 rounded-xl border transition-all ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
