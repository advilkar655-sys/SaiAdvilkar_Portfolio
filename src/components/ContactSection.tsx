import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Send, Check, Copy, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-heading">
            <span className={darkMode ? 'text-white' : 'text-slate-900'}>Let's Build </span>
            <span className="text-gradient">Something Meaningful</span>
          </h2>

          <p className={`text-base sm:text-lg max-w-2xl ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Open for software engineering internships, AI project collaborations, and developer opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className={`p-8 rounded-3xl border flex flex-col gap-6 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <div>
                <h3 className={`text-2xl font-bold mb-2 font-heading ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Sai Advilkar
                </h3>
                <p className="text-sm font-semibold text-cyan-400">
                  B.Tech CSE 3rd Year • AI Developer
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Email Box */}
                <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Email Address</span>
                      <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className={`text-xs sm:text-sm font-semibold truncate hover:underline ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>

              {/* Social Links: GitHub & LinkedIn only */}
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Connect on Socials
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border font-medium text-xs transition-all hover:scale-105 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                    }`}
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border font-medium text-xs transition-all hover:scale-105 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                    }`}
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Interactive Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-3xl border flex flex-col gap-5 ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <h3 className={`text-xl font-bold font-heading ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
                  <Check className="w-8 h-8 mx-auto text-emerald-400" />
                  <h4 className="font-bold text-base font-heading">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-400/90">Thank you! Sai will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                          darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                          darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Sai, I reviewed EcoSphere, JurisAi, and DemocracyAi..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
  </svg>
);
