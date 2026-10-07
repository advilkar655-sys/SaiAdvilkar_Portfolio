import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Link2 } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenLinkModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenLinkModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Hack2Skill', href: '#hackathon' },
    { name: 'AI Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand with Animated Profile Avatar */}
          <a href="#" className="flex items-center gap-3 group">
            
            {/* Nav Profile Image: smoothly scales in when scrolling down */}
            <div className={`relative transition-all duration-500 ease-out transform ${
              scrolled 
                ? 'scale-100 opacity-100 w-10 h-10' 
                : 'scale-75 opacity-0 w-0 h-0 overflow-hidden'
            }`}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-0.5 shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={profileImg}
                  alt="Sai Advilkar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className={`font-bold tracking-tight text-base sm:text-lg flex items-center gap-1.5 font-heading ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Sai Advilkar
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                B.Tech CSE • AI Dev & Video Editor
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  darkMode 
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Quick Edit Links Button */}
            <button
              onClick={onOpenLinkModal}
              title="Add or update project links"
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                darkMode
                  ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20'
                  : 'bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100'
              }`}
            >
              <Link2 className="w-3.5 h-3.5" />
              <span>Project Links</span>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-all duration-200 ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Let's Connect Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-200 font-heading"
            >
              <span>Let's Connect</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl border ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pt-3 pb-6 border-b shadow-xl ${
          darkMode ? 'bg-slate-950/95 border-slate-800 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
        }`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg font-medium text-sm ${
                  darkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800/40 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLinkModal();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
              >
                <Link2 className="w-4 h-4" /> Manage Deployed Links
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
