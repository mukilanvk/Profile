import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#050507] py-8 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: MK Logo & Designation */}
        <div className="flex items-center gap-3">
          <span className="font-display font-black text-xl text-white tracking-tighter">
            MK
          </span>
          <span className="text-slate-300">
            Mukil Karupusamy <span className="text-slate-600">•</span> React.js &amp; Next.js Full-Stack Developer
          </span>
        </div>

        {/* Right: Copyright & Scroll to Top Button */}
        <div className="flex items-center gap-4">
          <span className="text-slate-500">&copy; 2026 Mukil Karupusamy. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#FF6B2C]/60 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-[#FFB86B]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
