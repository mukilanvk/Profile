import React from 'react';
import { X, Award, ShieldCheck, Check } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0F0F16] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Card Styling */}
        <div className="border border-slate-700/70 rounded-xl p-6 bg-gradient-to-b from-[#14141E] to-[#0A0A0F] text-center space-y-4 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF6B2C] via-blue-500 to-[#FFB86B]"></div>

          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Award className="w-7 h-7" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] font-mono tracking-widest text-[#FF6B2C] uppercase font-semibold">
              Google Cloud Certified
            </div>
            <h3 className="font-display font-extrabold text-2xl text-white">
              Gen AI Academy
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              APAC Edition Cohort 3 • 2026
            </p>
          </div>

          <p className="text-xs text-slate-300 max-w-md mx-auto font-light leading-relaxed">
            This certifies that <strong className="text-white font-medium">Mukil Karupusamy</strong> has successfully demonstrated competency in Large Language Models, Multimodal Generative AI, Retrieval-Augmented Generation (RAG), and Autonomous Agentic Architectures on Google Cloud Platform.
          </p>

          {/* Verification Details */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Credential</span>
            </div>
            <div>ID: <span className="text-slate-200">2026MK298APACI3</span></div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono uppercase tracking-wider cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
