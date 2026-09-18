import React from 'react';
import { X, CheckCircle, Layers, Sparkles } from 'lucide-react';
import { Project, SecondaryProject } from '../types';

interface ProjectModalProps {
  project: Project | SecondaryProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isFullProject = 'category' in project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0E0E14] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6B2C] font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>{isFullProject ? (project as Project).category : (project as SecondaryProject).domain}</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            {project.title}
          </h3>
        </div>

        {/* Description / Summary */}
        <p className="text-slate-300 text-sm leading-relaxed font-light">
          {isFullProject ? (project as Project).description : (project as SecondaryProject).summary}
        </p>

        {/* Metrics if available */}
        {isFullProject && (project as Project).metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
            {(project as Project).metrics?.map((m, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                <div className="text-xl font-bold text-white mt-0.5">{m.value}</div>
                {m.detail && <div className="text-[9px] text-[#FFB86B] font-mono mt-0.5">{m.detail}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Key Highlights */}
        {isFullProject && (project as Project).highlights && (
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FFA439]" />
              <span>Architectural Highlights</span>
            </h4>
            <div className="space-y-2">
              {(project as Project).highlights?.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {(isFullProject ? (project as Project).tags : (project as SecondaryProject).tech).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium uppercase tracking-wider cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
