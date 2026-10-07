import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Bot, Trophy, Video } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  darkMode: boolean;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onExploreProjects }) => {
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Dynamic Glow Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-grid-pattern opacity-40' : 'bg-grid-pattern-light opacity-30'} pointer-events-none`} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Status Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-medium mb-6 backdrop-blur-md transition-all hover:scale-105"
          style={{
            borderColor: darkMode ? 'rgba(56, 189, 248, 0.3)' : 'rgba(56, 189, 248, 0.5)',
            backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.8)',
          }}
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className={darkMode ? 'text-cyan-300' : 'text-cyan-700'}>
            Hack2Skill × Google for Developers Participant
          </span>
          <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>|</span>
          <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
            B.Tech CSE 3rd Year • Video Editor
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 font-heading"
        >
          <span className={darkMode ? 'text-white' : 'text-slate-900'}>Hi, I'm </span>
          <span className="text-gradient drop-shadow-sm">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </motion.h1>

        {/* Subheading / Persona */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg sm:text-2xl font-semibold max-w-3xl mx-auto mb-6 font-heading ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          Building Intelligent AI Applications, Web Experiences & Video Content
        </motion.p>

        {/* Bio description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Pursuing 3rd year in <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>B.Tech Computer Science & Engineering</strong>. 
          AI Developer & Video Editor. Creator of 3 deployed AI applications—<strong className="text-cyan-400">EcoSphere</strong>, <strong className="text-indigo-400">JurisAi</strong>, and <strong className="text-emerald-400">DemocracyAi</strong>—for the <span className="underline decoration-cyan-500/50 underline-offset-4">Hack2Skill Google for Developers challenges</span>.
        </motion.p>

        {/* CTA Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            onClick={onExploreProjects}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-heading"
          >
            <Bot className="w-4 h-4" />
            <span>Explore 3 AI Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#hackathon"
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm border backdrop-blur-md transition-all duration-200 hover:scale-[1.02] font-heading ${
              darkMode
                ? 'bg-slate-900/80 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                : 'bg-white/80 border-slate-300 text-slate-800 hover:bg-slate-50'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Google Hackathon Experience</span>
          </a>
        </motion.div>

        {/* Feature Pill Highlights Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <div className={`p-4 rounded-2xl border backdrop-blur-md flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 ${
            darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white/60 border-slate-200/80'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gradient font-heading">3 Deployed AI Apps</h3>
            <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>EcoSphere, JurisAi & DemocracyAi</p>
          </div>

          <div className={`p-4 rounded-2xl border backdrop-blur-md flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 ${
            darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white/60 border-slate-200/80'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gradient-gold font-heading">Hack2Skill × Google</h3>
            <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Collaborative AI Challenges</p>
          </div>

          <div className={`p-4 rounded-2xl border backdrop-blur-md flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 ${
            darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white/60 border-slate-200/80'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2">
              <Video className="w-5 h-5" />
            </div>
            <h3 className={`font-bold text-lg font-heading ${darkMode ? 'text-white' : 'text-slate-900'}`}>Video Editor & CSE</h3>
            <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Creative & Technical Synergy</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
