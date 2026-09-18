import React from 'react';
import { X, BookOpen, ExternalLink, FileText } from 'lucide-react';

interface ResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0E0E14] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-[#FF6B2C] uppercase font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Peer-Reviewed Publication • IEEE Xplore Indexed</span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
            Deep-Feature Multimodal Fusion for Automated Semantic Document Parsing in Distributed Cloud Topologies
          </h3>
          <p className="text-xs font-mono text-slate-400">
            Author: Mukil Karupusamy et al. | Year: 2024
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
          <div>
            <h4 className="font-mono text-[11px] uppercase text-slate-400 font-semibold mb-1">
              Abstract
            </h4>
            <p className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 italic text-slate-300">
              "Modern enterprise environments ingest millions of semi-structured document streams ranging from invoices to contractual agreements. This paper proposes a hybrid multimodal deep learning framework uniting convolutional feature extractors with transformer-based cross-attention layers. Deployed across distributed cloud workers, the pipeline achieves a 98.4% F1-score with sub-120ms latency per page, demonstrating substantial improvements over isolated visual OCR pipelines."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
            <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">F1-Score</span>
              <span className="text-emerald-400 font-bold text-base">98.4%</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Processing Latency</span>
              <span className="text-[#FFB86B] font-bold text-base">&lt; 120ms / page</span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase text-slate-400 font-semibold mb-1">
              Keywords
            </h4>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono">
              {['Multimodal Fusion', 'Semantic Parsing', 'Cloud Topologies', 'Computer Vision', 'Transformers'].map((kw) => (
                <span key={kw} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

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
