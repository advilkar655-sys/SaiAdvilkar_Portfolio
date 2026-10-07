import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface HackathonBannerProps {
  darkMode: boolean;
}

export const HackathonBanner: React.FC<HackathonBannerProps> = ({ darkMode }) => {
  const data = PORTFOLIO_DATA.hackathonHighlight;

  return (
    <section id="hackathon" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glow halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-gradient-to-r from-blue-600/10 via-amber-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className={`relative overflow-hidden rounded-3xl border p-6 sm:p-10 backdrop-blur-xl transition-all duration-300 ${
          darkMode 
            ? 'bg-slate-900/70 border-slate-800/80 shadow-2xl shadow-blue-950/20' 
            : 'bg-white/80 border-slate-200/90 shadow-xl shadow-slate-200/50'
        }`}>
          
          {/* Subtle Google Colors Top Line Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start gap-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Trophy className="w-3.5 h-3.5" />
                <span>{data.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading">
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>Hack2Skill </span>
                <span className="text-gradient-google">× Google for Developers</span>
              </h2>

              <p className={`text-sm sm:text-base leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {data.description}
              </p>

              {/* Bullet highlights for 3 specific projects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 w-full">
                <div className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>EcoSphere</strong>: Carbon Footprints AI</span>
                </div>
                <div className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span><strong>JurisAi</strong>: AI Legal & Risk Assistant</span>
                </div>
                <div className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>DemocracyAi</strong>: Election Process Education</span>
                </div>
                <div className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>All 3 Applications Deployed Live</span>
                </div>
              </div>

            </div>

            {/* Right Card / Stats Badge */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className={`p-5 rounded-2xl border flex flex-col items-center justify-center text-center ${
                darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="text-3xl font-extrabold text-gradient-google mb-1 font-heading">
                  3 AI Apps
                </div>
                <div className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Deployed & Live Showcase
                </div>
                <div className="w-full h-px bg-slate-800 my-3" />
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore EcoSphere, JurisAi & DemocracyAi</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
