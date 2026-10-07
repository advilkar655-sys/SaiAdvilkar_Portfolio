import React, { useState } from 'react';
import type { Project } from '../data/portfolioData';
import { X, Globe, Save, Check, Copy, ExternalLink } from 'lucide-react';

interface ProjectLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onUpdateProjects: (updated: Project[]) => void;
  selectedProject?: Project | null;
  darkMode: boolean;
}

export const ProjectLinkModal: React.FC<ProjectLinkModalProps> = ({
  isOpen,
  onClose,
  projects,
  onUpdateProjects,
  darkMode
}) => {
  const [links, setLinks] = useState<{ [key: string]: string }>(() => {
    const initial: { [key: string]: string } = {};
    projects.forEach(p => {
      initial[p.id] = p.deployedUrl || '';
    });
    return initial;
  });

  const [copiedCode, setCopiedCode] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (id: string, url: string) => {
    setLinks(prev => ({ ...prev, [id]: url }));
  };

  const handleSave = () => {
    const updated = projects.map(p => ({
      ...p,
      deployedUrl: links[p.id] || ''
    }));
    onUpdateProjects(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const generateConfigSnippet = () => {
    return projects.map(p => `// ${p.title}\ndeployedUrl: "${links[p.id] || ''}"`).join('\n\n');
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(generateConfigSnippet());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-8 shadow-2xl transition-all ${
        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/40">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Manage Deployed Project Links</h3>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Add or update live deployed URLs for your 3 AI projects
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl border ${darkMode ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input List */}
        <div className="py-6 space-y-5">
          {projects.map((proj, idx) => (
            <div key={proj.id} className={`p-4 rounded-2xl border ${
              darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 text-xs flex items-center justify-center font-extrabold">
                    {idx + 1}
                  </span>
                  {proj.title}
                </span>
                <span className="text-xs text-slate-400 font-medium">{proj.badge}</span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="url"
                  placeholder="https://your-deployed-ai-app.vercel.app"
                  value={links[proj.id] || ''}
                  onChange={(e) => handleInputChange(proj.id, e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm font-mono border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-600'
                      : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                  }`}
                />

                {links[proj.id] && links[proj.id].trim() !== '' && (
                  <a
                    href={links[proj.id]}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    title="Test Open Link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/40">
          <button
            onClick={handleCopySnippet}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border ${
              darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedCode ? 'Copied Links Snippet!' : 'Copy Links Snippet'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold border ${
                darkMode ? 'border-slate-800 text-slate-400 hover:bg-slate-800' : 'border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              Close
            </button>

            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:scale-[1.02] transition-all"
            >
              {savedSuccess ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span>{savedSuccess ? 'Saved to Session!' : 'Save & Update Site'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
